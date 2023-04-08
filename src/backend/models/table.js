const { DataTypes } = require('sequelize');
const { sequelize } = require(__dirname + '/../config/config.json');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {

    static associate(models) {
      // define association here
      models.Table.hasMany(models.Column)
    }
  }
  Table.init({
    tab_id: DataTypes.STRING,
    tab_collection: DataTypes.STRING,
    tab_name: DataTypes.STRING,
    tab_desc: DataTypes.TEXT,
    tab_enum: DataTypes.STRING,
    tab_count: DataTypes.STRING,
    tab_model: DataTypes.TEXT,
    tab_comment: DataTypes.TEXT,
    tab_created: DataTypes.STRING,
    tab_lastmaj : DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
