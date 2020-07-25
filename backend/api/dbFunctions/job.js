const Job = require('../models/job');

module.exports = {
    /** 
     * @desc Create a job
     */
    createJob: (userId, skills, description, company, salary) => {
        let job = new Job({
            addedBy: userId,
            skills: skills,
            description,
            company,
            salary,
            appliedStudents: [],
        })
        return job.save();
    },

    /**
     * @desc Find all jobs
     */
    findAllJobs: () => {
        return Job.find();
    },

    /**
     * @desc Find jobs by skills
     */
    findBySkill: (skills) => {
        return Job.find({skills: {"$in": skills}});
    },

    /**
     * @desc delete Job
     */
    deleteJob: (id, userId) => {
        return Job.findOneAndDelete({_id:id, addedBy: userId});
    },

    /**
     * @desc Apply for job
     */
    applyJob: (id, userId) => {
        return Job.findOneAndUpdate({_id: id}, {"$push": {appliedStudents: userId}})
    },

    /**
     * @desc Withdraw name
     */
    withdrawJob: (id, userId) => {
        return Job.findOneAndUpdate({_id: id, appliedStudents: userId}, {"$pull": {appliedStudents: userId}})
    }
}