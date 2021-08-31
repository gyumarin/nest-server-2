import { Cat } from '../cats/interface/cats.interface';
import { CreateCatDto } from './dto/cats.dto';
export declare class CatsService {
    private readonly cats;
    create(cat: CreateCatDto): Promise<import("pg").QueryResult<any>>;
    findAll(): Cat[];
    findDB(): Promise<any>;
    searchName(name: string): Promise<Cat[]>;
}
