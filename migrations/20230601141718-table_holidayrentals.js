'use strict';

import { RentalType } from "../src/enums/rental-type.enum";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('holidayRentals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      description: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      type: {
          type: Sequelize.ENUM(...Object.values(RentalType)),
          allowNull: true,
      },
      fromDate: {
          type: Sequelize.DATEONLY,
          allowNull: true,
      },
      nbrPersMax: {
          type: Sequelize.INTEGER,
          allowNull: true,
      },
      nightPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: true,
      },
      weekPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: true,
      },
      weekendPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: true,
      },
      picture: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      complete:{
          type: Sequelize.BOOLEAN,
          defaultValue: false,
      },
      published:{
          type: Sequelize.BOOLEAN,
          defaultValue: false,
      },
      userId: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'users',
            key : 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('holidayRentals');
  }
};
