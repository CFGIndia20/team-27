const express = require('express');
const router = express.Router();

const Slot = require('../api/routes/slot')

const logger = require('./winston');


router.post('/slots', Slot.AddSlot);
router.delete('/slots', Slot.RemoveSlot);
router.get('/slots', Slot.FetchUsers);
router.post('/slots/attendance', Slot.PostAttendance);
router.post('/slots/switch', Slot.AskForChangeSlot);
router.post('/slots/switch/respond', Slot.RespondSwitchSlot);

module.exports = router;
