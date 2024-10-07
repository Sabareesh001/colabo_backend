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
          model: 'master_goal_roadmaps',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tags',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        defaultValue:null
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue:null
      },
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goals');
  }
};