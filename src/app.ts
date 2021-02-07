import Express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import BodyParser from "body-parser";
import helmet from "helmet";
import path from "path";
const favicon = require("express-favicon");

dotenv.config();
const app = Express();

app.use(helmet());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");
app.set("view optins", { compileDebug: false, self: true, cache: true });

app.use(Express.static(path.join(__dirname, "..", "public")));

routes(app);

const port = process.env.APPLICATION_PORT || 4000;
app.listen(port, () => {
	console.log(`Application listening port ${port}`);
});
