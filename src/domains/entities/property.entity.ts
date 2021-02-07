export class EntityProperty{
    constructor(
        private readonly _name: string,
        private readonly _value: string,
    ){}

    
    public get name() : string {
        return this._name;
    }

    public get value() : string {
        return this._value;
    }
}