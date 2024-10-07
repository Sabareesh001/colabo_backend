"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("action_members", {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("action_members");
  },
};
