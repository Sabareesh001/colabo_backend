'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.actions,{foreignKey:"action_id" })
      this.hasMany(models.users,{foreignKey:"member_id"})
      this.hasMany(models.users,{foreignKey:"deleted_by"})
      
    }
  }
  action_members.init({
    name: DataTypes.STRING,
    action_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    is_owner: DataTypes.BOOLEAN,
    is_assignee: DataTypes.BOOLEAN,
    is_deleted: {type:DataTypes.BOOLEAN,defaultValue:false},
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},    
  }, {
    sequelize,
    modelName: 'action_members',
  });
  return action_members;
};