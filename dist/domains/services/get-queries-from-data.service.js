"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQueriesFromDataService = void 0;
var entry_queue_entity_1 = require("../entities/entry-queue.entity");
var GetQueriesFromDataService = /** @class */ (function () {
    function GetQueriesFromDataService() {
    }
    GetQueriesFromDataService.prototype.getQueries = function (data) {
        var eq = new entry_queue_entity_1.EntryQueue();
        eq.entries = data;
        return eq.getQueries();
    };
    GetQueriesFromDataService.prototype.getQueriesArray = function (data) {
        var eq = new entry_queue_entity_1.EntryQueue();
        eq.entries = data;
        return eq.getQueriesArray();
    };
    return GetQueriesFromDataService;
}());
exports.GetQueriesFromDataService = GetQueriesFromDataService;
