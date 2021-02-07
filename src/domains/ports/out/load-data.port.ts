import { Entry } from "../../entities/entry.entity";

export interface LoadData{
    loadData(entries:Entry[]):boolean;
}