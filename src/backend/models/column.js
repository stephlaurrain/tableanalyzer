const { DataTypes } = require('sequelize');
const { sequelize } = require(__dirname + '/../config/config.json');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Column extends Model {

    static associate(models) {
      // define association here
      models.Column.belongsTo(models.Table)
    }
  }
  Column.init({
    col_id: DataTypes.STRING,
    col_key: DataTypes.STRING,
    col_name: DataTypes.STRING,
    col_type: DataTypes.STRING,
    col_nullable: DataTypes.STRING,
    col_length: DataTypes.STRING,
    col_default: DataTypes.STRING,
    col_count: DataTypes.TEXT,
    col_desc: DataTypes.STRING,
    col_reference: DataTypes.STRING,
    col_infos: DataTypes.STRING,
    col_model: DataTypes.STRING,
    col_comment: DataTypes.TEXT,
    col_mapped: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'Column',
  });
  return Column;
};
