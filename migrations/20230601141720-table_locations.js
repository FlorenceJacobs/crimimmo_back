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
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      },
      longitude: { 
        type: Sequelize.DECIMAL(9,5),
        allowNull: true
      },
      latitude: { 
        type: Sequelize.DECIMAL(9,5),
        allowNull: true
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: true
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
