import { Entry } from "./entry.entity";

export class EntryQueue{
    private _entries: Entry[] = [];

    
    public get entries() : Entry[] {
        return this._entries;
    }
    
    public set entries(v : Entry[]) {
        this._entries = v;
    }
    
    
    public getQueries():string {
        let result = '';
        for(let i = 0; i < this._entries.length; i++){
            result += this._entries[i].toString() + '\r';
        }
        return result;
    }
    public getQueriesArray(): string[]{
        let result = [];
        for(let i = 0; i < this._entries.length; i++){
            result.push(this._entries[i].toString());
        }
        return result;
    }
}