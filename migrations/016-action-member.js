"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("action_members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      action_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "actions",
        },
        key: "id",
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
        },
        key: "id",
      },
      is_owner: {
        type: Sequelize.BOOLEAN,
      },
      is_assignee: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("action_members");
  },
};
