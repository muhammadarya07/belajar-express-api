import { Sequelize, DataTypes } from "sequelize";
import connection from "./connection.js";

const Barang = connection.define('Barang', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    keterangan: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { tableName: 'barang' })


Barang.sync({ force: true })
export default Barang