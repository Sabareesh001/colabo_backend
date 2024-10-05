'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Goal.belongsTo(User, { foreignKey: 'deleted_by' });
      Goal.belongsTo(Tag, { foreignKey: 'tag_id' });
    }
  }
  Goal.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    roadmap_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'goals',
  });
  return Goal;
};