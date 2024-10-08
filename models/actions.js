"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actions extends Model {
    static associate(models) {
      this.belongsTo(models.master_durations, { foreignKey: "est_time_id" });
      this.belongsTo(models.master_action_statuses, { foreignKey: "status" });
      this.belongsTo(models.master_action_priorities, { foreignKey: "priority" });
      this.belongsTo(models.goals, { foreignKey: "goal_id" });
      this.belongsTo(models.master_action_types, {foreignKey: "action_type_id"});
      this.belongsTo(models.phases, { foreignKey: "goal_phase_id" });
      this.belongsTo(models.master_action_type_statuses, {foreignKey: "action_type_status_id"});
      this.belongsTo(models.users, { foreignKey: "deleted_by" });
      this.belongsTo(models.users, { foreignKey: "created_by" });


      this.hasMany(models.action_time_variance_reasons,{foreignKey:"action_id"});
      this.hasMany(models.action_members,{foreignKey:"action_id"});
      this.hasMany(models.action_tasks,{foreignKey:"action_id"});
      this.hasMany(models.favorite_actions,{foreignKey:"action_id"});
    }
  }
  actions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
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
      custom_est_time: {
        type: Sequelize.DECIMAL(10, 2),
      },
      est_time_id: {
        type: Sequelize.UUID,
        references: {
          model: "master_durations",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      act_time: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.UUID,
        references: {
          model: "master_action_statuses",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      priority: {
        type: Sequelize.UUID,
        references: {
          model: "master_action_priorities",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      goal_id: {
        type: Sequelize.UUID,
        references: {
          model: "goals",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      action_type_id: {
        type: Sequelize.UUID,
        references: {
          model: "master_action_types",
          key: "id",
        },
      },
      goal_phase_id: {
        type: Sequelize.UUID,
        references: {
          model: "phases",
          key: "id",
        },
      },
      action_type_status_id: {
        type: Sequelize.UUID,
        references: {
          model: "master_action_type_statuses",
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
        defaultValue: null,
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
    },
    {
      sequelize,
      modelName: "actions",
    }
  );
  return actions;
};
