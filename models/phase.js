"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    static associate(models) {
      this.belongsTo(models.goals, { foreignKey: "goal_id" });
      this.belongsTo(models.users, { foreignKey: "deleted_by" });
      this.belongsTo(models.users, { foreignKey: "created_by" });
      this.hasMany(models.phase_members,{foreignKey:"phase_id"});
      this.hasMany(models.actions,{foreignKey:"goal_phase_id"});
    }
  }
  Phase.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
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
    },
    {
      sequelize,
      modelName: "phases",
    }
  );
  return Phase;
};
