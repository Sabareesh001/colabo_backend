'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_durations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //define association here
    }
  }
  master_durations.init({
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},    
  }, {
    sequelize,
    modelName: 'master_durations',
  });
  return master_durations;
};