"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var path_1 = __importDefault(require("path"));
var favicon = require("express-favicon");
dotenv_1.default.config();
var app = express_1.default();
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(favicon(path_1.default.join(__dirname, "..", "public", "favicon.ico")));
app.set("views", path_1.default.join(__dirname, "templates"));
app.set("view engine", "ejs");
app.set("view optins", { compileDebug: false, self: true, cache: true });
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
routes_1.default(app);
var port = process.env.APPLICATION_PORT || 4000;
app.listen(port, function () {
    console.log("Application listening port " + port);
});
