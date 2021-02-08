import { EntityProperty } from "./property.entity";
import _ from "lodash";

type Price = {
	amount: number;
	currency: string;
};
export class Entry {
	constructor(
		private readonly _vendorId: string,
		private readonly _categoryId: number,
		private readonly _vendor: string,
		private readonly _model: string,
		private readonly _url: string,
		private readonly _pictures: string[],
		private readonly _documentation: string[],
		private readonly _price: Price,
		private readonly _description: string,
		private readonly _params: EntityProperty[]
	) {}

	public get params(): EntityProperty[] {
		return this._params;
	}
	public get vendorId(): string {
		return this._vendorId;
	}
	public get categoryId(): number {
		return this._categoryId;
	}
	public get vendor(): string {
		return this._vendor;
	}
	public get model(): string {
		return this._model;
	}
	public get url(): string {
		return this._url;
	}
	public get pictures(): string[] {
		return this._pictures;
	}
	public get documentation(): string[] {
		return this._documentation;
	}
	public get price(): Price {
		return this._price;
	}
	public get description(): string {
		return this._description;
	}

	private generateInsertSql(): string {
		let result = "";
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
	}
	public toString(): string {
		return this.generateInsertSql();
	}
}
