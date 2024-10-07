"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("favorite_actions", {
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
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
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
      is_active: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("favorite_actions");
  },
};
