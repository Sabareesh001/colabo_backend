"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("action_time_variance_reasons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      variance_reason_id: {
        type: Sequelize.UUID,
        references: {
          model: "master_time_variance_reasons",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      action_id: {
        type: Sequelize.UUID,
        references: {
          model: "actions",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      reason_for_variance: {
        type: Sequelize.STRING,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("action_time_variance_reasons");
  },
};
