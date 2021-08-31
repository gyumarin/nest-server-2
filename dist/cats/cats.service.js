"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let CatsService = class CatsService {
    constructor() {
        this.cats = [];
    }
    async create(cat) {
        const client = new pg_1.Client({
            user: 'postgres',
            host: '127.0.0.1',
            database: 'Contact',
            port: 5432,
        });
        await client.connect();
        const result = await client.query(`insert into "user"(name, age, breed) values('${cat.name}', '${cat.age}', '${cat.breed}')`);
        await client.end();
        return result;
    }
    findAll() {
        return this.cats;
    }
    async findDB() {
        const client = new pg_1.Client({
            user: '',
            host: '127.0.0.1',
            database: 'Contact',
            port: 5432,
        });
        await client.connect();
        const result = await client.query('select * from "user"');
        await client.end();
        return result.rows;
    }
    async searchName(name) {
        const client = new pg_1.Client({
            user: 'postgres',
            host: '127.0.0.1',
            database: 'Contact',
            port: 5432,
        });
        await client.connect();
        const result = await client.query(`select * from "user" where name = '${name}'`);
        await console.log(result);
        await client.end();
        return result.rows;
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map