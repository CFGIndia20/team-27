const express = require('express');
const router = express.Router();

const Slot = require('../api/routes/slot')

const logger = require('./winston');

router.post('/slots', Slot.AddSlot);
router.delete('/slots', Slot.RemoveSlot);
router.get('/slots', Slot.GetSlots);
router.post('/slots/attendance', Slot.PostAttendance);
router.post('/slots/switch', Slot.AskForChangeFetchUsersSlot);
router.post('/slots/switch/respond', Slot.RespondSwitchSlot);
router.post('/slots/users', Slot.FetchUsers);
router.post('/slots/select', Slot.SelectSlot);
router.get('/slots/teachers/free', Slot.GetFreeTeacher);

module.exports = router;
