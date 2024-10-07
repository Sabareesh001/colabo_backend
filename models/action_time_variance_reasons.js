'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_time_variance_reasons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.master_time_variance_reasons,{foreignKey:"variance_reason_id" })
      this.hasMany(models.actions,{foreignKey:"action_id"})
      this.hasMany(models.users,{foreignKey:"deleted_by"})
      
    }
  }
  action_time_variance_reasons.init({
    name: DataTypes.STRING,
    variance_reason_id: DataTypes.INTEGER,//
    action_id: DataTypes.INTEGER,//
    reason_for_variance: DataTypes.STRING,

    is_deleted: {type:DataTypes.BOOLEAN,defaultValue:false},
    deleted_by: DataTypes.INTEGER,//
    deleted_at: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},    
  }, {
    sequelize,
    modelName: 'action_time_variance_reasons',
  });
  return action_time_variance_reasons;
};