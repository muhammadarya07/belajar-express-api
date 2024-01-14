import express from 'express'

import { StokController } from '../controller/StokController.js'

var router = express.Router();

/* GET gudang listing. */
// router.get('/', GudangController.getDataGudang);

/* POST stok */
router.post('/create', StokController.createStok)

export default router