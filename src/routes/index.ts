import { Application } from "express";
import * as convertRoute from "./convert";

export default (app: Application) => {
	app.get("/", (req, res, next) => {
		res.send("Hello!");
	});

	app.get("/download_data", convertRoute.downloadData);
	app.get("/convert_to_json", convertRoute.convertDataToJSON);
	app.get("/get_data", convertRoute.getData);
};
