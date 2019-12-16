'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'boyd',
        email: 'boyd@hcolors.com',
        password: 'bananaboat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'carrie',
        email: 'carrie@hcolors.com',
        password: 'pineapplepinata',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'claire',
        email: 'claire@hcolors.com',
        password: 'orangeorangutang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};