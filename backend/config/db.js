const mongoose = require('mongoose');

const {MONGO_URI} = require('./loadConfig');

/**
 * @desc Connecting to  MongoDB database
 */
module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    return true;
  } catch (err) {
    throw new Error('Error connecting to the MongoDB database');
  }
};
