'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.UUID,
        references:{
          model:'master_user_roles',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      user_status: {
        type: Sequelize.UUID,
        references:{
          model:'master_user_statuses',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
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
    await queryInterface.dropTable('users');
  }
};