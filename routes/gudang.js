import express from 'express'
import { Gudang } from '../db/index.js';

import { GudangController } from '../controller/GudangController.js';

var router = express.Router();

/* GET gudang listing. */
router.get('/', GudangController.getDataGudang);

/* POST gudang */

export default router