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
			path.join(__dirname, "..", "data", "data-manual.xml")
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
		let formatedCategories: any[] = [];
		for (let i = 0; i < result.categories.length; i++) {
			formatedCategories.push({
				id: result.categories[i].$.id,
				name: result.categories[i]._,
				techpstid: "",
			});
		}
		let formatedOffers: any[] = [];
		for (let i = 0; i < result.offers.length; i++) {
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
		fs.writeFileSync(
			path.join(__dirname, "..", "data", "formated_categories.json"),
			JSON.stringify(formatedCategories)
		);
		res.status(200).json({ formatedCategories, formatedOffers });
	} catch (e) {
		console.log(e);
		res.status(500).send(e.message);
	}
};
// const formatData = async(req: Request, res: Response, next: NextFunction)=>{
// 	try{

// 	}catch(e){

// 	}
// }
export { downloadData, convertDataToJSON, getData };
