import { GetQueries } from "../ports/in/get-queries.query";
import { Entry } from "../entities/entry.entity";
import { EntryQueue } from "../entities/entry-queue.entity";

export class GetQueriesFromDataService implements GetQueries{
    getQueries(data:Entry[]):string{
        const eq = new EntryQueue();
        eq.entries = data; 

        return eq.getQueries();
    }
    getQueriesArray(data: Entry[]): string[]{
        const eq = new EntryQueue();
        eq.entries = data;
        return eq.getQueriesArray();
    }
}