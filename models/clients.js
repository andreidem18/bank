'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Clients',
  });
  return Clients;
};