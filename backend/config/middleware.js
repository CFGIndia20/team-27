const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

/**
 * @desc Mounting middle wares to app
 * @param app Initialised express application
 */
module.exports = (app) => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(cors({origin: 'http://localhost:4200', credentials: true}));    
  app.use(helmet());
  return app;
}
