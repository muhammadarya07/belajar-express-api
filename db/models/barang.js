import { DataTypes } from "sequelize";

export default {
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
}