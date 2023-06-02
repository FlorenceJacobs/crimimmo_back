import { DataTypes } from "sequelize";
import { sequelize } from './index.js'
import { HolidayRental } from "./holiday-rental.model.js";

export const Location = sequelize.define('locations', {
    longitude: DataTypes.DECIMAL(9,5),
    latitude: DataTypes.DECIMAL(9,5),
    number: DataTypes.STRING,
    street: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    region: DataTypes.STRING,
    locality: DataTypes.STRING,
}, { timestamps: false });

Location.belongsTo(HolidayRental);
HolidayRental.hasOne(Location);