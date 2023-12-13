import { DataTypes } from "sequelize";

export default {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    barang_id: {
        type: DataTypes.INTEGER
    },
    gudang_id: {
        type: DataTypes.INTEGER
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    }   
}