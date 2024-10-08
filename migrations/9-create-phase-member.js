'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phase_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phase_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'phases'
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
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
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
    await queryInterface.dropTable('phase_members');
  }
};