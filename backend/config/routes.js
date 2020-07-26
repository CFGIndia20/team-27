const express = require('express');
const router = express.Router();
const { AdminAuth, TeacherAuth, AdminUserAuth, UserAuth, StudentAuth } = require('../api/policies');
const { check, validationResult } = require('express-validator');

const Slot = require('../api/routes/slot')
const User = require('../api/routes/user');
const upload = require('../api/utils/uploadFile');
const Job = require('../api/routes/job');

const logger = require('./winston');
const userAuth = require('../api/policies/userAuth');

router.get('/slots', UserAuth, Slot.GetSlots);


router.post('/auth/register', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
    check('mobile').isNumeric().isLength({ min: 8, max: 10 }).withMessage("Invalid mobile number"),
    // check('dateOfBirth').isISO8601().withMessage("Please enter a valid date"),
    check('access').isIn(["student","teacher","admin"]).withMessage("Invalid access value")
], User.Register);

router.post('/auth/login', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
], User.Login);

router.post('/user/updateprofile', UserAuth,
    upload.fields([{ name: 'c10', maxCount: 1 },{ name: 'c12', maxCount: 1 },{ name: 'aadhar', maxCount: 1 },{ name: 'bpl', maxCount: 1 }]),
    User.StudentUpdateProfile);
/** Admin functions */
router.post('/user/verify', AdminAuth, User.Verify);
router.post('/user/profile', UserAuth, User.Profile);

/** Admin functions */
router.post('/user/verify', AdminAuth, User.Verify);
router.get('/user/verify', AdminAuth, User.UnVerified);

router.post('/slots', AdminAuth, [
    check('startTime').isNumeric().withMessage("Please add a start time"),
    check('endTime').isNumeric().withMessage('Please add an end time'),
    check('startDate').notEmpty().withMessage('Please enter a start date'),
    check('endDate').notEmpty().withMessage('Please enter a end date')
], Slot.AddSlot);

router.delete('/slots', [
    check('slotId').isMongoId().withMessage("Please select valid slot")
], AdminAuth, Slot.RemoveSlot);

router.post('/job', AdminAuth, [
    check('description').isAlpha().withMessage("Please provide a description"),
    check('company').isAlpha().withMessage("Please provide company name"),
    check('salary').isNumeric().withMessage("Salary details incorrect")
], Job.AddJob);

router.delete('/job', AdminAuth, Job.RemoveJob);
router.get('/slots/change', AdminAuth, Slot.GetSwitchRequests);
router.post('/slots/change/respond',AdminAuth, Slot.RespondSwitchSlot);
router.post('/slots/teachers/free',AdminAuth, Slot.GetFreeTeacher);

router.get('/job', AdminUserAuth, Job.Search.all);
router.post('/job/bySkill', AdminUserAuth, Job.Search.bySkill);
router.get('/slots',AdminUserAuth, Slot.GetSlots);

router.post('/slots/users', [
    check('slotId').isMongoId().withMessage("Please select valid slot")
], UserAuth, Slot.FetchUsers);
router.get('/user/dashboard', UserAuth, User.Dashboard);


/** User functions */
router.post('/slots/select', StudentAuth, Slot.SelectSlot);
router.post('/jobs/student', UserAuth, Job.ApplyJob);
router.delete('/jobs/student', UserAuth, Job.RemoveJob);

/** Teacher functions */
router.post('/slots/change', TeacherAuth, Slot.AskForChangeSlot);
router.post('/slots/PostAttendance', TeacherAuth, Slot.PostAttendance);

module.exports = router;
