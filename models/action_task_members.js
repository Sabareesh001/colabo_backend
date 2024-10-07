'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_task_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.action_tasks,{foreignKey:"task_id"})
      this.hasMany(models.users,{foreignKey:"member_id"})
      this.hasMany(models.users,{foreignKey:"deleted_by"})
    }
  }
  action_task_members.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    task_id: {
      type: Sequelize.UUID,
      references: {
        model: "action_tasks",
        key: "id",
      },onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    member_id: {
      type: Sequelize.UUID,
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
    modelName: 'action_task_members',
  });
  return action_task_members;
};