'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('holidayRentals', 'ownerId', { 
        type: Sequelize.INTEGER, allowNull: false, references: {
          model: 'owners',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn('holidayRentals', 'ownerId', { 
      type: Sequelize.INTEGER, allowNull: false, references: {
      model: 'owners',
      key: 'id',
    },
  });
  }
};
