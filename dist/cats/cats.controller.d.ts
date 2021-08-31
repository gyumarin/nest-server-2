import { CreateCatDto } from '../cats/dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from '../cats/interface/cats.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("pg").QueryResult<any>>;
    findAll(): Promise<Cat[]>;
    findDb(): any;
    searchName(args: any): Promise<Cat[]>;
}
