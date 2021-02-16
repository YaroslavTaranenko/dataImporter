"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
var Entry = /** @class */ (function () {
    function Entry(_vendorId, _categoryId, _vendor, _model, _url, _pictures, _documentation, _price, _description, _params) {
        this._vendorId = _vendorId;
        this._categoryId = _categoryId;
        this._vendor = _vendor;
        this._model = _model;
        this._url = _url;
        this._pictures = _pictures;
        this._documentation = _documentation;
        this._price = _price;
        this._description = _description;
        this._params = _params;
    }
    Object.defineProperty(Entry.prototype, "params", {
        get: function () {
            return this._params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "vendorId", {
        get: function () {
            return this._vendorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "categoryId", {
        get: function () {
            return this._categoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "vendor", {
        get: function () {
            return this._vendor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "pictures", {
        get: function () {
            return this._pictures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "documentation", {
        get: function () {
            return this._documentation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Entry.prototype.generateInsertSql = function () {
        var result = "";
        // const grouped = _.groupBy(this._fields, (a)=>a.dbName);
        // for(let i = 0; i < Object.keys(grouped).length; i++){
        //     const dbName = Object.keys(grouped)[i];
        //     result += `INSERT INTO ${dbName}`;
        //     let tmpFields = [];
        //     let tmpVals = [];
        //     for(let j = 0; j < grouped[dbName].length; j++){
        //         tmpFields.push(grouped[dbName][j].fieldName);
        //         tmpVals.push(grouped[dbName][j].valueType == 'integer' ? grouped[dbName][j].value : `'${grouped[dbName][j].value}'`);
        //     }
        //     result += `(${tmpFields.join(',')}) VALUES(${tmpVals.join(",")});`;
        // }
        return result;
    };
    Entry.prototype.toString = function () {
        return this.generateInsertSql();
    };
    return Entry;
}());
exports.Entry = Entry;
