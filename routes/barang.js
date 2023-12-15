import express from 'express'
import { Barang, Connection } from '../db/index.js';
import checkValidator from '../helpers/validator/validator.js';
import schema from '../helpers/validator/schema/barang.js';

var router = express.Router();

/* GET barang listing. */
router.get('/', async function (req, res, next) {
	// cek apakah berhasil koneksi
	try {
		await Connection.authenticate()

		const datas = {
			status: 'success',
			pesan: 'Berhasil mendapatkan data',
			data: Barang.findAll()
		}

		res.status(200)
		return res.json(datas)
	} catch (err) {
		console.error(err)
		res.status(500)
		return res.json({
			status: 'failed',
			pesan: 'Terdapat kesalahan pada server',
			data: {}
		})
	}

});

/* POST create barang */
router.post('/create', async function (req, res) {
	const { nama, harga, keterangan } = req.body

	const result = checkValidator(schema, { nama: nama, harga: parseFloat(harga), keterangan })
	if (result === true) {
		const product = await Barang.create({ nama: nama, harga: parseFloat(harga), keterangan })
		res.status(201)
		return res.json({ status: 'success', pesan: 'Berhasil menambahkan barang baru' })
	}
	// gagal
	res.status(400)
	return res.json(result)
})


export default router