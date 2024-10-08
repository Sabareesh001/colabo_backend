'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phases', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, 
      },
      name: {
        type: Sequelize.STRING
      },
      goal_id: {
        type: Sequelize.UUID,
        references:{
          model:'goals',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      is_close: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      deleted_by: {
        type: Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },onDelete: 'cascade',
        onUpdate: 'cascade',
        defaultValue:null
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue:null
      },
      created_by: {
        type: Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },onDelete: 'cascade',
        onUpdate: 'cascade',
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
    await queryInterface.dropTable('phases');
  }
};