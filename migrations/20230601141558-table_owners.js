'use strict';

const { Roles } = require('../src/enums/role.enum');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthdate: {
          type: Sequelize.DATEONLY,
          allowNull: true,
      },
      subscribeDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
      },
      hashedPassword: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      picture: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      role: {
          type: Sequelize.ENUM(...Object.values(Roles))
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
