import { DataTypes } from "sequelize";
import { sequelize } from './index.js'
import { Roles } from "../enums/roles.enum.js";

export const User = sequelize.define('user', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    subscribeDate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: DataTypes.ENUM(...Object.values(Roles))}, { timestamps: false });
