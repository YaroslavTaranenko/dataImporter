"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityProperty = void 0;
var EntityProperty = /** @class */ (function () {
    function EntityProperty(_name, _value) {
        this._name = _name;
        this._value = _value;
    }
    Object.defineProperty(EntityProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return EntityProperty;
}());
exports.EntityProperty = EntityProperty;
