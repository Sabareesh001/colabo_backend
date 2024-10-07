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
      this.belongsTo(models.tags, { foreignKey: 'tag_id' });
      this.belongsTo(models.users, { foreignKey: 'deleted_by' });
    }
  }
  Goal.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    roadmap_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},    
    is_deleted: {type:DataTypes.BOOLEAN,defaultValue:false},
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'goals',
  });
  return Goal;
};