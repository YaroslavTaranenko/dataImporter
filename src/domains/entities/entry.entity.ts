import { EntityProperty } from "./property.entity";
import _ from 'lodash';
export class Entry{
    constructor(
        private readonly _vendorId: string,
        private readonly _categoryId: number,
        private readonly _vendor: string,
        private readonly _model: string,
        private readonly _url: string,
        private readonly _pictures: string[],
        private readonly _documentation: string[],
        private readonly _price:string,
        private readonly _description: string,
        private readonly _params: EntityProperty[]
    ){

    }
    private readonly _properties: EntityProperty[] = [];

    public get fields(): EntityProperty[]{
        return this._properties;
    }

    private generateInsertSql(): string {
        let result = '';
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