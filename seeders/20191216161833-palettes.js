'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Palettes', [
      {
        colrOrgId: '11011',
        notes: 'a note',
        paletteName: 'super2',
        userId: 1,
        color0: '#111111',
        color1: '#122111',
        color2: '#133111',
        color3: '#144111',
        color4: '#155111',
        color5: '#166111',
        color6: '#177111',
        color7: '#188111',
        color8: '#199111',
        color9: '#1aa111',
        color10: '#1bb111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        colrOrgId: '09876',
        notes: 'happiness',
        paletteName: 'whiteness',
        userId: 1,
        color0: '#111111',
        color1: '#122111',
        color2: '#133111',
        color3: '#144111',
        color4: '#155111',
        color5: '#166111',
        color6: '#177111',
        color7: '#188111',
        color8: '#199111',
        color9: '#1aa111',
        color10: '#1bb111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        colrOrgId: '14239',
        notes: 'too many',
        paletteName: 'scorpions',
        userId: 1,
        color0: '#111111',
        color1: '#122111',
        color2: '#133111',
        color3: '#144111',
        color4: '#155111',
        color5: '#166111',
        color6: '#177111',
        color7: '#188111',
        color8: '#199111',
        color9: '#1aa111',
        color10: '#1bb111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Palettes');
  }
};