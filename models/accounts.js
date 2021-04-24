'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Accounts',
  });
  return Accounts;
};