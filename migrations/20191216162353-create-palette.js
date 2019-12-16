'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Palettes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colrOrgId: {
        type: Sequelize.INTEGER
      },
      paletteName: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      color0: {
        type: Sequelize.STRING
      },
      color1: {
        type: Sequelize.STRING
      },
      color2: {
        type: Sequelize.STRING
      },
      color3: {
        type: Sequelize.STRING
      },
      color4: {
        type: Sequelize.STRING
      },
      color5: {
        type: Sequelize.STRING
      },
      color6: {
        type: Sequelize.STRING
      },
      color7: {
        type: Sequelize.STRING
      },
      color8: {
        type: Sequelize.STRING
      },
      color9: {
        type: Sequelize.STRING
      },
      color10: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Palettes');
  }
};