'use strict';

process.env.APP_ROOT = __dirname;
process.env.LOG_WARN_PATH = process.env.APP_ROOT + '/private/logs/laco_warn.log';
process.env.LOG_ERROR_PATH = process.env.APP_ROOT + '/private/logs/laco_error.log';
process.env.LOG_COMBINED_PATH = process.env.APP_ROOT + '/private/logs/laco.log';
const Laco = require('laco');

let laco = new Laco.Laco();
let blog = new Laco.SubApp();

blog.router.register({
    path: '/',
    name: 'home',
    label: 'Home',
    get: (req, res, next) => res.end('Home')
});

laco.subapp.register('/', blog);

laco.start();
laco.on('started', app => {
    app.logger.info('Ahihi it\'s started');
});