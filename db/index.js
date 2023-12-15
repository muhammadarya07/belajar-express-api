import { Sequelize } from "sequelize";
import 'dotenv/config'

import barangSchema from "./models/barang.js";
import gudangSchema from "./models/gudang.js";
import stokSchema from "./models/stok.js"


const Connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb'
});

// Models
const Barang = Connection.define('Barang', barangSchema, { tableName: 'barang' })
const Gudang = Connection.define('Gudang', gudangSchema, { tableName: 'gudang' })
const Stok = Connection.define('Stok', stokSchema, { tableName: 'stok' })

export { Barang, Gudang, Stok, Connection }