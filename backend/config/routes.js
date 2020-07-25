const express = require('express');
const router = express.Router();

const Slot = require('../api/routes/slot')

const logger = require('./winston');


router.post('/slots', Slot.AddSlot);
router.delete('/slots', Slot.RemoveSlot);
router.get('/slots', Slot.FetchUsers);

module.exports = router;
