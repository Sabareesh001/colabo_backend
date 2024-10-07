"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("favorite_actions", {
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
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
        defaultValue:null
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("favorite_actions");
  },
};
