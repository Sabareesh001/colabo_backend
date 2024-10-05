'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goal_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goal_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'goals'
        },
        key:'id'
      },
      member_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users'
        },
        key:'id'
      },
      is_owner: {
        type: Sequelize.BOOLEAN
      },
      is_assignee: {
        type: Sequelize.BOOLEAN
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        references:{
          model:'users'
        },
        key:'id'
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goal_members');
  }
};