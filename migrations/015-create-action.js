"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("actions", {
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
      est_time: {
        type: Sequelize.INTEGER,
      },
      act_time: {
        type: Sequelize.INTEGER,
      },
      is_closed: {
        type: Sequelize.BOOLEAN,
      },
      priority: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_priorities",
        },
        key: "id",
      },
      goal_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'goals'
        },
        key:'id'
      },
      action_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_types",
        },
        key: "id",
      },
      goal_phase_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "phases",
        },
        key: "id",
      },
      action_type_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_type_statuses",
        },
        key: "id",
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
        },
        key: "id",
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("actions");
  },
};
