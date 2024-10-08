'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_goal_roadmaps extends Model {
    static associate(models) {
      this.hasMany(models.goals, { foreignKey: "roadmap_id" });
    }
  }
  master_goal_roadmaps.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'master_goal_roadmaps',
  });
  return master_goal_roadmaps;
};