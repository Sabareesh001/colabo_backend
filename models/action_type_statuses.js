'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_action_type_statuses extends Model {
    static associate(models) {
        this.belongsTo(models.master_action_types,{foreignKey:"action_type_id" })
        this.hasMany(models.actions, { foreignKey: "action_type_status_id" });
    }
  }
  master_action_type_statuses.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    action_type_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "master_action_types",
      },
      key: "id",
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
    modelName: 'master_action_type_statuses',
  });
  return master_action_type_statuses;
};