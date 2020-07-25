const logger = require('./winston');
const mongoDB = require('./db');

module.exports = {
  /**
     * @desc Loading express application
     */
  async load(app) {
    logger.info({message: 'Configuration options loaded'});

    await mongoDB();
    logger.info({message: 'Connected to the database'});
    if (app == undefined) {
      app = require('express')();
    }
    logger.info({message: 'Initialised express application'});

    app = require('./middleware')(app);
    logger.info({message: 'Mounted middlewares to express application'});

    app.use('/api',require('./routes'));
    logger.info({message: 'Mounted express routes'});
    
    return app;
  },

  /**
     * @desc Starting express application
     */
  async run(app) {
    app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
      logger.info({message: `Running express application at ${process.env.PORT || 3000}`});
    });
  },
};
