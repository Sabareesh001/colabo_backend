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
      GoalMember.belongsTo(Goal, { foreignKey: 'goal_id' });
GoalMember.belongsTo(User, { foreignKey: 'member_id' });
GoalMember.belongsTo(User, { foreignKey: 'deleted_by' });
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