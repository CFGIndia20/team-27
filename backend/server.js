const express =  require('express');
const {load, run} = require('./config/mount');


let app = express();

async function runApp() {
    app = await load(app)
    app.get('*', function (req, res) {
        res.status(200).sendFile(`/`, {root: 'public'});
    });
    run(app);
}

runApp();