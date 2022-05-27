'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName:{ 
      field: 'first_name',
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: { 
      field: 'last_name',
      allowNull: false,
      type: DataTypes.STRING
    },
    email: { 
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      field: 'password_hash',
      allowNull: false,
      type: DataTypes.TEXT
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    gender: { 
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};