import { Sequelize } from "sequelize";
import 'dotenv/config'

// all models
import barangSchema from "./models/barang.js";
import gudangSchema from "./models/gudang.js";


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb'
});

// models
const Barang = sequelize.define('Barang', barangSchema, { tableName: 'barang' })
const Gudang = sequelize.define('Gudang', gudangSchema, { tableName: 'gudang' })

export { Barang, Gudang }
export default sequelize