"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("actions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      custom_est_time:{
        type:Sequelize.DECIMAL(10,2),
      },
      est_time_id: {
        type: Sequelize.INTEGER,
      },
      act_time: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      priority: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_priorities",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      goal_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'goals',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      action_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_types",
          key: "id",
        },
      },
      goal_phase_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "phases",
          key: "id",
        },
      },
      action_type_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "master_action_type_statuses",
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
        type: Sequelize.INTEGER,
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
        defaultValue:null,
      },
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        defaultValue:null,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("actions");
  },
};
