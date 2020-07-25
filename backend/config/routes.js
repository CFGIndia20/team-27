const express = require('express');
const router = express.Router();
const { AdminAuth, TeacherAuth, AdminUserAuth, UserAuth, StudentAuth } = require('../api/policies');
const { check, validationResult } = require('express-validator');

const Slot = require('../api/routes/slot')
const User = require('../api/routes/user');
const Job = require('../api/routes/job');

const logger = require('./winston');

router.post('/slots/attendance', Slot.PostAttendance);


router.post('/auth/register', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
    // check('password').isLength({min:5}).withMessage("Password Length Should be Minimum 5 characters"),
    // check('method').notEmpty().withMessage("Method of login does not exist"),
    // check('name').isAlpha().withMessage("Invalid name"),
    check('mobile').isNumeric().isLength({min:8,max:10}).withMessage("Invalid mobile number")
], User.Register);

router.post('/auth/login', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
], User.Login);

/** Admin functions */
router.post('/user/verify', AdminAuth, User.Verify);
router.get('/user/verify', AdminAuth, User.UnVerified);
router.post('/slots', AdminAuth, Slot.AddSlot);
router.delete('/slots', AdminAuth, Slot.RemoveSlot);
router.post('/job', AdminAuth,Job.AddJob);
router.delete('/job', AdminAuth, Job.RemoveJob);
router.get('/slots/change', AdminAuth, Slot.GetSwitchRequests);
router.post('/slots/change/respond',AdminAuth, Slot.RespondSwitchSlot);
router.post('/slots/teachers/free',AdminAuth, Slot.GetFreeTeacher);

router.get('/job', AdminUserAuth, Job.Search.all);
router.post('/job/bySkill', AdminUserAuth, Job.Search.bySkill);
router.get('/slots',AdminUserAuth, Slot.GetSlots);

router.post('/slots/users',UserAuth, Slot.FetchUsers);
router.get('/user/dashboard', UserAuth, User.Dashboard);


/** User functions */
router.post('/slots/select', StudentAuth, Slot.SelectSlot);
router.post('/jobs/student', UserAuth, Job.ApplyJob);
router.delete('/jobs/student', UserAuth, Job.RemoveJob);

/** Teacher functions */
router.post('/slots/change', TeacherAuth, Slot.AskForChangeSlot);
router.post('/slots/PostAttendance', TeacherAuth, Slot.PostAttendance);

module.exports = router;
