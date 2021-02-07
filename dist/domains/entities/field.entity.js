"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var Field = /** @class */ (function () {
    function Field(_dbName, _fieldName, _value, _valueType) {
        if (_valueType === void 0) { _valueType = 'varchar'; }
        this._dbName = _dbName;
        this._fieldName = _fieldName;
        this._value = _value;
        this._valueType = _valueType;
    }
    Object.defineProperty(Field.prototype, "dbName", {
        get: function () {
            return this._dbName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "valueType", {
        get: function () {
            return this._valueType;
        },
        enumerable: false,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;
