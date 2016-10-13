"use strict";
var Sequelize = require('sequelize');
/**
 * @author Humberto Machado
 */
var BaseModel = (function () {
    function BaseModel() {
    }
    BaseModel.prototype.getModelName = function () {
        return this.name;
    };
    BaseModel.prototype.defineModel = function (sequelize) {
        this.model = sequelize.define(this.getModelName(), this.definition, {});
        return this;
    };
    BaseModel.prototype.configure = function () {
        //Hook Method
    };
    BaseModel.prototype.belongsTo = function (modelName) {
        this.model.belongsTo(this.sequelizeDB.getModel(modelName).getInstance());
    };
    BaseModel.prototype.hasMany = function (modelName) {
        this.model.hasMany(this.sequelizeDB.getModel(modelName).getInstance());
    };
    BaseModel.prototype.getInstance = function () {
        return this.model;
    };
    BaseModel.prototype.setSequelizeDB = function (sequelizeDB) {
        this.sequelizeDB = sequelizeDB;
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
exports.DataTypes = Sequelize;
//# sourceMappingURL=BaseModel.js.map