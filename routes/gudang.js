import express from 'express'
import { Gudang } from '../db/index.js';

var router = express.Router();

/* GET gudang listing. */
router.get('/', async function (req, res, next) {
    res.json(Gudang.findAll())
});

/* POST gudang */

export default router