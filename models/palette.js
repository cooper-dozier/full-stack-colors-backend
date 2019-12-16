'use strict';
module.exports = (sequelize, DataTypes) => {
  const Palette = sequelize.define('Palette', {
    colrOrgId: DataTypes.INTEGER,
    paletteName: DataTypes.STRING,
    notes: DataTypes.TEXT,
    color0: DataTypes.STRING,
    color1: DataTypes.STRING,
    color2: DataTypes.STRING,
    color3: DataTypes.STRING,
    color4: DataTypes.STRING,
    color5: DataTypes.STRING,
    color6: DataTypes.STRING,
    color7: DataTypes.STRING,
    color8: DataTypes.STRING,
    color9: DataTypes.STRING,
    color10: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Palette.associate = function(models) {
    // associations can be defined here
    Palette.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Palette;
};