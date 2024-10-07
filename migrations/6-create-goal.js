'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      roadmap_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'master_goal_roadmaps'
        },
        key: 'id'
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tags'
        },
        key: 'id'
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users'
        },
        key: 'id'
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
    await queryInterface.dropTable('goals');
  }
};