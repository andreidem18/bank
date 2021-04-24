'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transactions.init({
    account_ori: DataTypes.INTEGER,
    account_des: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    transaction_type: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Transactions',
  });
  return Transactions;
};