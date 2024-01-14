import express from "express";

import { Stok, Connection } from "../db/index.js";
import schema from "../helpers/validator/schema/stok.js"
import checkValidator from "../helpers/validator/validator.js";

const StokController = {
    createStok: async function (req, res) {
        const { barang_id, gudang_id, jumlah } = req.body

        const result = checkValidator(schema, { barang_id, gudang_id, jumlah })
        if (result === true) {

            const [product, created] = await Stok.findOrCreate({
                where: { "barang_id": barang_id, "gudang_id": gudang_id },
                defaults: {
                    "barang_id": barang_id,
                    "gudang_id": gudang_id,
                    "jumlah": jumlah
                }
            })

            if (created) {
                res.status(201)
                return res.json({ status: 'success', pesan: 'Berhasil menambah data Stok baru' })
            }
            product.jumlah = parseInt(product.jumlah) + parseInt(jumlah)
            product.save()
            res.status(200)
            return res.json({ status: 'success', pesan: 'Berhasil mengupdate stok data' })

        }
        // gagal
        res.status(400)
        return res.json({ status: 'failed', pesan: result })
    }
}

export { StokController }