'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_action_types extends Model {
    static associate(models) {
      this.hasMany(models.actions, { foreignKey: "action_type_id" });
      this.hasMany(models.master_action_type_statuses, { foreignKey: "action_type_id" });
    }
  }
  master_action_types.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
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
    modelName: 'master_action_types',
  });
  return master_action_types;
};