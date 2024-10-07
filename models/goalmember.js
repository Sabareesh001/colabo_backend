'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.goals, { foreignKey: 'goal_id' });
      this.belongsTo(models.users, { foreignKey: 'member_id', as: "User" });
      this.belongsTo(models.users, { foreignKey: 'deleted_by' });
    }
  }
  GoalMember.init({
    goal_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    is_owner: DataTypes.BOOLEAN,
    is_assignee: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'goal_members',
  });
  return GoalMember;
};