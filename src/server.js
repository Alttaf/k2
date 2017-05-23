// @flow

import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import log from 'fancy-log';
import passport from './passport';

const app = new Koa();

app.use(logger());
app.use(convert(cors({ credentials: true })));
app.use(bodyParser());
app.use(passport.initialize());

const modules = require('./modules');
modules(app);

app.listen(process.env.PORT, () => log(`API server started on ${process.env.PORT}`));