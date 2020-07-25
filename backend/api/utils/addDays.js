const { workerData, parentPort } = require('worker_threads')
const Slot = require('../models/slot');
// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread";
let start = workerData.start; 
let stop = workerData.stop;
let teacher = workerData.teacher;
let slot = workerData.slot;
if (start == undefined || stop == undefined || id == undefined) {
    throw new Error();
}
while(start <= stop) {
    await Slot.findOneAndUpdate({_id: slot},{"$push": {dailyStatus: {teacher, date: start}}});
    start.setDate(start.getDate() + 1);
}
parentPort.postMessage({ success: true });