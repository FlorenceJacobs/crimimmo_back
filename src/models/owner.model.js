import { DataTypes } from "sequelize";
import { sequelize } from './index.js'

export const Owner = sequelize.define('owner', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    subscribeDate: DataTypes.ENUM('M','F','X'),
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: DataTypes.ENUM('ADMIN', 'USER')}, { timestamps: false });
