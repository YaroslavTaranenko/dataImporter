import { Request, Response, NextFunction } from "express";
import { parseStringPromise } from "xml2js";
import fs from "fs";
import path from "path";
import axios from "axios";

const downloadData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let resp = await axios.get("https://ecommerce.grundfos.ru/catalog.xml");
		// console.log(data);
		fs.writeFileSync(
			path.join(__dirname, "..", "data", "data.xml"),
			resp.data,
			{
				encoding: "utf8",
			}
		);

		res.status(200).send(resp.data);
	} catch (e) {
		res.status(500).send(e);
	}
};
const convertDataToJSON = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const data = fs.readFileSync(
			path.join(__dirname, "..", "data", "data.xml")
		);
		console.log("Readed");
		const dataJs = await parseStringPromise(data);
		console.log("Parsed");
		fs.writeFileSync(
			path.resolve(path.join(__dirname, "..", "data", "data.json")),
			JSON.stringify(dataJs),
			{ encoding: "utf8" }
		);

		console.log("Writed");
		res.status(200).send(dataJs);
	} catch (e) {
		console.log(e);
		res.status(500).send(e.message);
	}
};
const getData = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = fs.readFileSync(
			path.join(__dirname, "..", "data", "data.json"),
			{ encoding: "utf8" }
		);
		let dataJs = JSON.parse(data);
		let result = {
			categories: dataJs.yml_catalog.vendor["0"].categories["0"].category,
			offers: dataJs.yml_catalog.vendor["0"].offers["0"].offer,
		};
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).send(e.message);
	}
};
export { downloadData, convertDataToJSON, getData };
