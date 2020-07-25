const express = require('express');
const router = express.Router();
const { AdminAuth, TeacherAuth, UserAuth } = require('../api/policies');
const { check, validationResult } = require('express-validator');

const Slot = require('../api/routes/slot')
const User = require('../api/routes/user');
const Job = require('../api/routes/job');

const logger = require('./winston');

router.get('/slots', Slot.GetSlots);
router.post('/slots/attendance', Slot.PostAttendance);
router.post('/slots/switch', Slot.AskForChangeSlot);
router.post('/slots/switch/respond', Slot.RespondSwitchSlot);
router.post('/slots/users', Slot.FetchUsers);
router.post('/slots/select', Slot.SelectSlot);
router.get('/slots/teachers/free', Slot.GetFreeTeacher);
router.get('/slots/switch', Slot.GetSwitchRequests);


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
router.get('/user/dashboard', AdminAuth, User.Dashboard);
router.post('/job', AdminAuth,Job.AddJob);
router.delete('/job', AdminAuth, Job.RemoveJob);
router.get('/job', AdminAuth, Job.Search.all);
router.post('/job/bySkill', AdminAuth, Job.Search.bySkill);

module.exports = router;
