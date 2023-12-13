import express from 'express'
import { Barang } from '../db/index.js';
import checkValidator from '../helpers/validator/validator.js';
import schema from '../helpers/validator/schema/barang.js';
var router = express.Router();

/* GET barang listing. */
router.get('/', async function (req, res, next) {
	return res.json(Barang.findAll())
});

/* POST barang */
router.post('/create', async function (req, res) {
	const data = {
		nama: req.body.nama,
		harga: parseFloat(req.body.harga),
		keterangan: req.body.keterangan
	}
	const result = checkValidator(schema, data)
	if (result === true) {
		const product = await Barang.create(data)
		res.status(201)
		return res.send("Berhasil")
	}
	// gagal
	res.status(400)
	return res.json(result)
})


export default router