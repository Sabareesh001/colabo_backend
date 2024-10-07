'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_time_variance_reasons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //define association here
    }
  }
  master_time_variance_reasons.init({
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},    
  }, {
    sequelize,
    modelName: 'master_time_variance_reasons',
  });
  return master_time_variance_reasons;
};