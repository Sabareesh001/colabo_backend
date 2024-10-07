'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.hasMany(models.master_action_priorities,{foreignKey:"priority" })
    this.belongsTo(models.goals,{foreignKey:"goal_id" })
    this.hasMany(models.master_action_types,{foreignKey:"action_type_id" })
    this.hasMany(models.phases,{foreignKey:"goal_phase_id" })
    this.hasMany(models.master_action_type_statuses,{foreignKey:"action_type_status_id" })
    this.hasMany(models.users,{foreignKey:"deleted_by" })
    }
  }
  actions.init({
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    est_time: DataTypes.INTEGER,
    act_time: DataTypes.INTEGER,
    is_closed: {type:DataTypes.BOOLEAN,defaultValue:false},
    priority: DataTypes.INTEGER,
    goal_id: DataTypes.INTEGER,
    action_type_id:DataTypes.INTEGER,
    goal_phase_id:DataTypes.INTEGER,
    action_type_status_id:DataTypes.INTEGER,
    is_deleted: {type:DataTypes.BOOLEAN,defaultValue:false},
    deleted_by: DataTypes.INTEGER,//
    deleted_at: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'actions',
  });
  return actions;
};