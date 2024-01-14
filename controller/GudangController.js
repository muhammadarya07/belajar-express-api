import { Gudang, Connection } from "../db/index.js";

const GudangController = {
    getDataGudang: async function (req, res) {

        try {
            Connection.authenticate()

            const datas = {
                status: 'success',
                pesan: 'Berhasil mendapatkan data',
                data: await Gudang.findAll()
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
}

export { GudangController }