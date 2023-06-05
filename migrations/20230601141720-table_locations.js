'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      holidayRentalId: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'holidayRentals',
            key : 'id'
          }
      },
      longitude: { 
        type: Sequelize.DECIMAL(9,5),
        allowNull: false
      },
      latitude: { 
        type: Sequelize.DECIMAL(9,5),
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true
      },
      locality: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      county: {
        type: Sequelize.STRING,
        allowNull: true
      },

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  }
};
