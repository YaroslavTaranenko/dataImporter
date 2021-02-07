"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
var lodash_1 = __importDefault(require("lodash"));
var Entry = /** @class */ (function () {
    function Entry() {
        this._fields = [];
    }
    Object.defineProperty(Entry.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Entry.prototype.generateInsertSql = function () {
        var result = '';
        var grouped = lodash_1.default.groupBy(this._fields, function (a) { return a.dbName; });
        for (var i = 0; i < Object.keys(grouped).length; i++) {
            var dbName = Object.keys(grouped)[i];
            result += "INSERT INTO " + dbName;
            var tmpFields = [];
            var tmpVals = [];
            for (var j = 0; j < grouped[dbName].length; j++) {
                tmpFields.push(grouped[dbName][j].fieldName);
                tmpVals.push(grouped[dbName][j].valueType == 'integer' ? grouped[dbName][j].value : "'" + grouped[dbName][j].value + "'");
            }
            result += "(" + tmpFields.join(',') + ") VALUES(" + tmpVals.join(",") + ");";
        }
        return result;
    };
    Entry.prototype.toString = function () {
        return this.generateInsertSql();
    };
    return Entry;
}());
exports.Entry = Entry;
