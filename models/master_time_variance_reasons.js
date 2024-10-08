'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_time_variance_reasons extends Model {
    static associate(models) {
      this.belongsTo(models.master_time_variance_reasons_types, { foreignKey: "type" });
      this.hasMany(models.action_time_variance_reasons, { foreignKey: "variance_reason_id" });
    }
  }
  master_time_variance_reasons.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER,
      references: {
        model: "master_time_variance_reasons_types",
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",

    },
    name: {
      type: Sequelize.STRING
    },
    is_active: {
      type: Sequelize.BOOLEAN
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
    modelName: 'master_time_variance_reasons',
  });
  return master_time_variance_reasons;
};