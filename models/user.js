'use strict';
const {isAfter} = require('date-fns');
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
      User.hasMany(models.Task,{
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    firstName:{ 
      field: 'first_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    lastName: { 
      field: 'last_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    email: { 
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
        notNull: true,
        isEmail: true
      }
    },
    password: {
      field: 'password_hash',
      allowNull: false,
      type: DataTypes.TEXT
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate:{
        notNull: true,
        isDate: true,
        isValidDate(value){
          if(isAfter(new Date(value), new Date())){throw new Error('Your birthday can not be erlier than today')}
        } 
      }
    },
    gender: { 
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};