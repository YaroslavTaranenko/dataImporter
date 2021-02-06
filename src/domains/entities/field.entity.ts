export class Field{
    constructor(
        private readonly _dbName: string,
        private readonly _fieldName: string,
        private readonly _value: string,
        private readonly _valueType: string = 'varchar'
    ){}

    
    public get dbName() : string {
        return this._dbName;
    }

    public get fieldName() : string {
        return this._fieldName;
    }
    
    public get value() : string {
        return this._value;
    }
        
    public get valueType() : string {
        return this._valueType;
    }
    
}