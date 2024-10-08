'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_task_members extends Model {
    static associate(models) {
      this.belongsTo(models.action_tasks,{foreignKey:"task_id"})
      this.belongsTo(models.users,{foreignKey:"member_id"})
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
    }
  }
  action_task_members.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    task_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "action_tasks",
        key: "id",
      },onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    member_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
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
    modelName: 'action_task_members',
  });
  return action_task_members;
};