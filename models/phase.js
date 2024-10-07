'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.goals, { foreignKey: 'goal_id' });
      this.belongsTo(models.users, { foreignKey: 'deleted_by' });
      this.hasMany(models.phase_members,{foreignKey:'phase_id'})
    }
  }
  Phase.init({
    name: DataTypes.STRING,
    goal_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'phases',
  });
  return Phase;
};