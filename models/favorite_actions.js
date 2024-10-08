"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite_actions extends Model {
    static associate(models) {
      this.belongsTo(models.actions, { foreignKey: "action_id" });
      this.belongsTo(models.users, { foreignKey: "user_id" });
      this.belongsTo(models.users, { foreignKey: "deleted_by" });
      this.belongsTo(models.users, { foreignKey: "created_by" });
    }
  }
  favorite_actions.init(
    {
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
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
        defaultValue: null,
        onDelete: "cascade",
        onUpdate: "cascade",
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
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "favorite_actions",
    }
  );
  return favorite_actions;
};
