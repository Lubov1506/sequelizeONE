'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Task.belongsTo(models.User, {
      foreignKey: 'userId'
    })

    }
  }
  Task.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isDone: {
      field: 'is_done',
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks'
  });
  return Task;
};