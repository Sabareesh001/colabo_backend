'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalMember extends Model {
    static associate(models) {
      this.belongsTo(models.goals, { foreignKey: 'goal_id' });
      this.belongsTo(models.users, { foreignKey: 'member_id', as: "User" });
      this.belongsTo(models.users, { foreignKey: 'deleted_by' });
      this.belongsTo(models.users, { foreignKey: 'created_by' });
    }
  }
  GoalMember.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    goal_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'goals',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    member_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    is_owner: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_assignee: {
      type: Sequelize.BOOLEAN
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    deleted_by: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
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
        model: 'users',
        key: 'id'
      },
      onDelete: 'cascade',
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
  }, {
    sequelize,
    modelName: 'goal_members',
  });
  return GoalMember;
};