'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('holidayRentals', 'userId', { 
        type: Sequelize.INTEGER, allowNull: false, references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn('holidayRentals', 'userId', { 
      type: Sequelize.INTEGER, allowNull: false, references: {
      model: 'users',
      key: 'id',
    },
  });
  }
};
