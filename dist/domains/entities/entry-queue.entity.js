"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryQueue = void 0;
var EntryQueue = /** @class */ (function () {
    function EntryQueue() {
        this._entries = [];
    }
    Object.defineProperty(EntryQueue.prototype, "entries", {
        get: function () {
            return this._entries;
        },
        set: function (v) {
            this._entries = v;
        },
        enumerable: false,
        configurable: true
    });
    EntryQueue.prototype.getQueries = function () {
        var result = '';
        for (var i = 0; i < this._entries.length; i++) {
            result += this._entries[i].toString() + '\r';
        }
        return result;
    };
    EntryQueue.prototype.getQueriesArray = function () {
        var result = [];
        for (var i = 0; i < this._entries.length; i++) {
            result.push(this._entries[i].toString());
        }
        return result;
    };
    return EntryQueue;
}());
exports.EntryQueue = EntryQueue;
