"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.convertDataToJSON = exports.downloadData = void 0;
var xml2js_1 = require("xml2js");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var axios_1 = __importDefault(require("axios"));
var downloadData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var resp, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("https://ecommerce.grundfos.ru/catalog.xml")];
            case 1:
                resp = _a.sent();
                // console.log(data);
                fs_1.default.writeFileSync(path_1.default.join(__dirname, "..", "data", "data.xml"), resp.data, {
                    encoding: "utf8",
                });
                res.status(200).send(resp.data);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(500).send(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.downloadData = downloadData;
var convertDataToJSON = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, dataJs, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "data", "data-manual.xml"));
                console.log("Readed");
                return [4 /*yield*/, xml2js_1.parseStringPromise(data)];
            case 1:
                dataJs = _a.sent();
                console.log("Parsed");
                fs_1.default.writeFileSync(path_1.default.resolve(path_1.default.join(__dirname, "..", "data", "data.json")), JSON.stringify(dataJs), { encoding: "utf8" });
                console.log("Writed");
                res.status(200).send(dataJs);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                res.status(500).send(e_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.convertDataToJSON = convertDataToJSON;
var getData = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, dataJs, result, formatedCategories, i, formatedOffers, i;
    return __generator(this, function (_a) {
        try {
            data = fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "data", "data.json"), { encoding: "utf8" });
            dataJs = JSON.parse(data);
            result = {
                categories: dataJs.yml_catalog.vendor["0"].categories["0"].category,
                offers: dataJs.yml_catalog.vendor["0"].offers["0"].offer,
            };
            formatedCategories = [];
            for (i = 0; i < result.categories.length; i++) {
                formatedCategories.push({
                    id: result.categories[i].$.id,
                    name: result.categories[i]._,
                    techpstid: "",
                });
            }
            formatedOffers = [];
            for (i = 0; i < result.offers.length; i++) {
                formatedOffers.push({
                    id: result.offers[i].$.id,
                    categoryId: result.offers[i].categoryId[0],
                    vendor: result.offers[i].vendor[0],
                    model: result.offers[i].model[0],
                    url: result.offers[i].url[0],
                    picture: result.offers[i].picture,
                    documentation: result.offers[i].documentation,
                    price: result.offers[i].price[0],
                    currency: result.offers[i].currencyId[0],
                    description: result.offers[i].description[0],
                    param: result.offers[i].param,
                });
            }
            fs_1.default.writeFileSync(path_1.default.join(__dirname, "..", "data", "formated_categories.json"), JSON.stringify(formatedCategories));
            res.status(200).json({ formatedCategories: formatedCategories, formatedOffers: formatedOffers });
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
        return [2 /*return*/];
    });
}); };
exports.getData = getData;
