'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      deleted_by: {
        type: Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        defaultValue:null
      },
      created_by: {
        type: Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      deleted_at: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tags');
  }
};