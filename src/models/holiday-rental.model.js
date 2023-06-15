import { DataTypes } from "sequelize";
import { sequelize } from './index.js'
import { User } from "./user.model.js";
import { Location } from "./location.model.js";

export const HolidayRental = sequelize.define('holidayRental', {
    name: DataTypes.STRING,
    description : DataTypes.STRING,
    type: DataTypes.ENUM('House','Apartment','Bungalow'),
    fromDate: DataTypes.DATEONLY,
    nbrPersMax: DataTypes.INTEGER,
    nightPrice: DataTypes.DECIMAL(5,2),
    weekPrice: DataTypes.DECIMAL(5,2),
    weekendPrice: DataTypes.DECIMAL(5,2),
    picture: DataTypes.STRING,
}, { timestamps: false });

User.hasMany(HolidayRental);
HolidayRental.belongsTo(User);