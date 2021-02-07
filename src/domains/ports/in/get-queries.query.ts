import { Entry } from "../../entities/entry.entity";

export interface GetQueries{
    getQueries(data: Entry[]):string;
    getQueriesArray(data: Entry[]): string[];
}