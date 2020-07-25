const express = require('express');
const router = express.Router();
const { AdminAuth, TeacherAuth, UserAuth } = require('../api/policies');
const { check, validationResult } = require('express-validator');

const Slot = require('../api/routes/slot')
const User = require('../api/routes/user');
const upload = require('../api/utils/uploadFile');

const logger = require('./winston');
const userAuth = require('../api/policies/userAuth');

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


router.get('/user/verify', AdminAuth, User.UnVerified);
router.post('/slots', AdminAuth, Slot.AddSlot);
router.delete('/slots', AdminAuth, Slot.RemoveSlot);
router.get('/user/dashboard', AdminAuth, User.Dashboard);

module.exports = router;
