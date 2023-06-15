'use strict';

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
          allowNull: false,
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      type: {
          type: Sequelize.ENUM('House','Apartment','Bungalow'),
          allowNull: false,
      },
      fromDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
      },
      nbrPersMax: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      nightPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: false,
      },
      weekPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: false,
      },
      weekendPrice: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: false,
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
          }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('holidayRentals');
  }
};
