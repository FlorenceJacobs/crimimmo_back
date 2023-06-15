'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.changeColumn('locations', 'holidayRentalId', { 
        type: Sequelize.INTEGER, allowNull: false, references: {
          model: 'holidayRentals',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('locations', 'holidayRentalId', { 
      type: Sequelize.INTEGER, allowNull: false, references: {
      model: 'holidayRentals',
      key: 'id',
    },
  });
  }
};