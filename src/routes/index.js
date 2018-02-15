import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initialiseDb from '../db';

const router = express();

// connect to mongooseDB
initialiseDb(db => {

    // internal middleware
    router.use(middleware({ config, db}));

    // api routes /v1 

});

export default router;