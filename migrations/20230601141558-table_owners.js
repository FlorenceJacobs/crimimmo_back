'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('owners', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthdate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
      },
      subscribeDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
      },
      hashedPassword: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      picture: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      role: {
          type: Sequelize.ENUM('ADMIN', 'USER')
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('owners');
  }
};
