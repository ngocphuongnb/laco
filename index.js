"use strict"

const laco = require('laco');

if(!process.env.APP_ROOT) process.env.APP_ROOT = __dirname;
laco.init(__dirname + './config.json');