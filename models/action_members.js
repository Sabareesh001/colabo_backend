'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.actions,{foreignKey:"action_id" })
      this.hasMany(models.users,{foreignKey:"member_id"})
      this.hasMany(models.users,{foreignKey:"deleted_by"})
      
    }
  }
  action_members.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    action_id: {
      type: Sequelize.UUID,
      references: {
        model: "actions",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    member_id: {
      type: Sequelize.UUID,
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
      type: Sequelize.UUID,
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
      type: Sequelize.UUID,
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