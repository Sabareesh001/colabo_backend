'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_members extends Model {
    static associate(models) {
      this.belongsTo(models.actions,{foreignKey:"action_id" })
      this.belongsTo(models.users,{foreignKey:"member_id"})
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
      
    }
  }
  action_members.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    action_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "actions",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    member_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    is_owner: {
      type: Sequelize.BOOLEAN,
    },
    is_assignee: {
      type: Sequelize.BOOLEAN,
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    deleted_by: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
      defaultValue: null,
    },
    deleted_at: {
      type: Sequelize.DATE,
      defaultValue: null,
    },
    created_by: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
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
    modelName: 'action_members',
  });
  return action_members;
};