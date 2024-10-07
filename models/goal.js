"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    static associate(models) {
      this.belongsTo(models.master_goal_roadmaps, { foreignKey: "roadmap_id" });
      this.belongsTo(models.tags, { foreignKey: "tag_id" });
      this.belongsTo(models.users, { foreignKey: "deleted_by" });
      this.belongsTo(models.users, { foreignKey: "created_by" });
      this.hasMany(models.actions, { foreignKey: "goal_id", as: "actions" });
      this.hasMany(models.phases, { foreignKey: "goal_id", as: "phases" });
      this.hasMany(models.goal_members, {
        foreignKey: "goal_id",
        as: "Members",
      });
    }
  }
  Goal.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      roadmap_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_goal_roadmaps",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tags",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      modelName: "goals",
    }
  );
  return Goal;
};
