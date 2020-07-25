const express = require('express');
const router = express.Router();
const { AdminAuth, TeacherAuth, UserAuth } = require('../api/policies');
const { check, validationResult } = require('express-validator');

const Slot = require('../api/routes/slot')
const User = require('../api/routes/user');
const upload = require('../api/utils/uploadFile');

const logger = require('./winston');
const userAuth = require('../api/policies/userAuth');

router.post('/slots', Slot.AddSlot);
router.delete('/slots', Slot.RemoveSlot);
router.get('/slots', Slot.GetSlots);
router.post('/slots/attendance', Slot.PostAttendance);
router.post('/slots/switch', Slot.AskForChangeSlot);
router.post('/slots/switch/respond', Slot.RespondSwitchSlot);
router.post('/slots/users', Slot.FetchUsers);
router.post('/slots/select', Slot.SelectSlot);
router.get('/slots/teachers/free', Slot.GetFreeTeacher);
router.get('/slots/switch', Slot.GetSwitchRequests);


router.post('/user/register', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
    // check('password').isLength({min:5}).withMessage("Password Length Should be Minimum 5 characters"),
    // check('method').notEmpty().withMessage("Method of login does not exist"),
    check('name').isAlpha().withMessage("Invalid name"),
    check('mobile').isNumeric().isLength({min:8,max:10}).withMessage("Invalid mobile number")
], User.Register);

router.post('/user/login', [
    check('email').isEmail().withMessage("Please enter a valid email address"),
    check('email').notEmpty().withMessage("Please enter an email address"),
    check('password').notEmpty().withMessage("Please enter a password"),
], User.Login);

router.post('/user/verify', AdminAuth, User.Verify);


router.post('/user/updateprofile', userAuth, upload.single('dob'), User.StudentUpdateProfile);

// router.post('/user/updateprofile', upload.single('dob'), User.StudentUpdateProfile);
module.exports = router;
