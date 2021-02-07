import { Field } from "./field.entity";
import _ from 'lodash';
export class Entry{
    private readonly _fields: Field[] = [];

    public get fields(): Field[]{
        return this._fields;
    }

    private generateInsertSql(): string {
        let result = '';
        const grouped = _.groupBy(this._fields, (a)=>a.dbName);

        for(let i = 0; i < Object.keys(grouped).length; i++){
            const dbName = Object.keys(grouped)[i];
            result += `INSERT INTO ${dbName}`;
            let tmpFields = [];
            let tmpVals = [];
            for(let j = 0; j < grouped[dbName].length; j++){
                tmpFields.push(grouped[dbName][j].fieldName);
                tmpVals.push(grouped[dbName][j].valueType == 'integer' ? grouped[dbName][j].value : `'${grouped[dbName][j].value}'`);
            }
            result += `(${tmpFields.join(',')}) VALUES(${tmpVals.join(",")});`;
        }


        return result;
    }
    public toString(): string {
        return this.generateInsertSql();
    }
}