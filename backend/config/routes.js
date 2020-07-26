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

router.get('/slots', Slot.GetSlots);
router.post('/slots/attendance', Slot.PostAttendance);


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

router.post('/user/updateprofile', UserAuth, upload.single('dob'), User.StudentUpdateProfile);
/** Admin functions */
router.post('/user/verify', AdminAuth, User.Verify);
router.post('/user/profile', UserAuth, User.Profile);


/** Admin functions */
router.post('/user/verify', AdminAuth, User.Verify);
router.get('/user/verify', AdminAuth, User.UnVerified);
router.post('/slots', AdminAuth, Slot.AddSlot);
router.delete('/slots', AdminAuth, Slot.RemoveSlot);
router.get('/user/dashboard', AdminUserAuth, User.Dashboard);
router.post('/job', AdminAuth,Job.AddJob);
router.delete('/job', AdminAuth, Job.RemoveJob);
router.get('/slots/change', AdminAuth, Slot.GetSwitchRequests);
router.post('/slots/change/respond',AdminAuth, Slot.RespondSwitchSlot);
router.post('/slots/teachers/free',AdminAuth, Slot.GetFreeTeacher);

router.get('/job', AdminUserAuth, Job.Search.all);
router.post('/job/bySkill', AdminUserAuth, Job.Search.bySkill);
router.post('/slots/users',UserAuth, Slot.FetchUsers);



/** USer functions */
router.get('/slots',AdminUserAuth, Slot.GetSlots);
router.post('/slots/select', StudentAuth, Slot.SelectSlot);


/** Teacher functions */
router.post('/slots/change', TeacherAuth, Slot.AskForChangeSlot);

module.exports = router;
