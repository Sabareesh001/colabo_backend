'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_tasks extends Model {
    static associate(models) {
      this.hasMany(models.action_task_members,{foreignKey:"task_id"})
      this.belongsTo(models.actions,{foreignKey:"action_id"})
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
    }
  }
  action_tasks.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
    },
    action_id: {
      type: Sequelize.UUID,
      references: {
        model: "actions",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    custom_est_time:{
      type: Sequelize.DECIMAL(10,2),
    },
    est_time_id:{
      type: Sequelize.INTEGER,
    },
    act_time:{
      type: Sequelize.INTEGER,
    },
    is_closed: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
      defaultValue:null,
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    deleted_at: {
      type: Sequelize.DATE,
      defaultValue:null
    },
    created_by: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
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
    modelName: 'action_tasks',
  });
  return action_tasks;
};