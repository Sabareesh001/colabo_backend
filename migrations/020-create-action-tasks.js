"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("action_tasks", {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, 
      },
      name: {
        type: Sequelize.STRING,
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
      custom_est_time:{
        type: Sequelize.DECIMAL(10,2),
      },
      est_time_id:{
        type: Sequelize.INTEGER,
      },
      act_time:{
        type: Sequelize.INTEGER,
      },
      is_closed: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
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
        defaultValue:true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("action_tasks");
  },
};
