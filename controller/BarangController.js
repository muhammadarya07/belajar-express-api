import express from 'express'
import { Barang, Connection } from '../db/index.js';
import checkValidator from '../helpers/validator/validator.js';
import schema from '../helpers/validator/schema/barang.js';

const BarangController = {
    // Get All Product
    getAllProduct: async function (req, res) {
        // cek apakah berhasil koneksi
        try {
            await Connection.authenticate()

            const datas = {
                status: 'success',
                pesan: 'Berhasil mendapatkan data',
                data: await Barang.findAll()
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
    },

    // Get Product By ID
    getProductByID: async function (req, res) {
        // Cek apakah server database hidup
        const productID = req.params.id
        try {
            await Connection.authenticate()
            // Jika hidup lakukan sesuatu
            const datas = {
                status: 'success',
                pesan: 'Berhasil mendapatkan data',
                data: await Barang.findByPk(productID)
            }
            // jika tidak mendapatkan barang maka return data kosong
            if (datas.data === null) {
                res.status(404)
                return res.json({
                    status: 'failed',
                    pesan: 'Data dengan ID yang diberikan tidak ditemukan',
                    data: {}
                })
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
    },

    // Create New Product
    postDataBarang: async function (req, res) {
        const { nama, harga, keterangan } = req.body

        const result = checkValidator(schema, { nama, harga, keterangan })
        if (result === true) {
            const product = await Barang.create({ nama, harga, keterangan })
            res.status(201)
            return res.json({ status: 'success', pesan: 'Berhasil menambahkan barang baru' })
        }
        // gagal
        res.status(400)
        return res.json({ status: 'failed', pesan: result })
    },

    // Delete Product
    DeleteDataBarang: async function (req, res) {
        const id = req.params.id
        const product = await Barang.findByPk(id)

        if (product == null) {
            res.status(204)
            return res.json({
                status: 'failed',
                pesan: 'Data tidak ditemukan'
            })
        }
        // delete produk 
        product.destroy()

        res.status(200)
        return res.json({
            status: 'success',
            pesan: 'berhasil menghapus data barang'
        })


    }
}

export { BarangController }