import express from 'express'
import { BarangController } from '../controller/BarangController.js';

var router = express.Router();

/* GET barang listing. */
router.get('/', BarangController.getAllProduct)

/* GET PRODUCT BY ID*/
router.get('/:id', BarangController.getProductByID)

/* POST create barang */
router.post('/create', BarangController.postDataBarang)

/* DELETE barang */
router.delete('/:id', BarangController.DeleteDataBarang)

export default router