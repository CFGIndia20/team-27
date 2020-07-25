const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27018/clientell',
  JWT: process.env.JWT || 'secret',
};
