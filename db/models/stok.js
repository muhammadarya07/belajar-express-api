import { DataTypes } from "sequelize";

export default {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    barang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'barang',
            key: 'id'
        }
    },
    gudang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'gudang',
            key: 'id'
        }
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}