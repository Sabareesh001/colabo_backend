"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("action_time_variance_reasons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      variance_reason_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_time_variance_reasons",
        },
        key: "id",
      },
      action_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "actions",
        },
        key: "id",
      },
      reason_for_variance: {
        type: Sequelize.STRING,
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
      is_active: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("action_time_variance_reasons");
  },
};
