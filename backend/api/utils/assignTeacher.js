const {slotDetails, addTeacherToSlot} = require('../dbFunctions/slot');
const {getFreeTeachers} = require('../dbFunctions/teacher');
const { Worker } = require('worker_threads')

runService = (start, stop, id, slot) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./addDays.js', { start, stop, id, slot });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

module.exports = async (slotId) => {
    try {
        const slot = await slotDetails(slotId);
        if (slot == null) return;
        const teachers = await getFreeTeachers(slot.startTime);
        const added = await addTeacherToSlot(slotId, teachers[0]._id);
        if (added == null) return; // Send mail to admin to manually assign
        const result = await runService(slot.startDate, slot.endDate, teachers[0]._id, slotId);
        console.log(result);
    } catch (err) {
        return; // Send mail to admin to manually assign
    }
}