"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class action_time_variance_reasons extends Model {
    static associate(models) {
      this.belongsTo(models.master_time_variance_reasons, {
        foreignKey: "variance_reason_id",
      });
      this.belongsTo(models.actions, { foreignKey: "action_id" });
      this.belongsTo(models.users, { foreignKey: "deleted_by" });
      this.belongsTo(models.users, { foreignKey: "created_by" });
    }
  }
  action_time_variance_reasons.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      variance_reason_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_time_variance_reasons",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
      reason_for_variance: {
        type: Sequelize.STRING,
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
        defaultValue: null,
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      deleted_at: {
        type: Sequelize.DATE,
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
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "action_time_variance_reasons",
    }
  );
  return action_time_variance_reasons;
};
