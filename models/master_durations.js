'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_durations extends Model {
    static associate(models) {
      this.hasMany(models.actions, { foreignKey: "est_time_id" });
    }
  }
  master_durations.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },    
  }, {
    sequelize,
    modelName: 'master_durations',
  });
  return master_durations;
};