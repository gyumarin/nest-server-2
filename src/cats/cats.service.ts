import { Injectable } from '@nestjs/common';
import { Cat } from '../cats/interface/cats.interface';
import { Client } from 'pg';
import { CreateCatDto } from './dto/cats.dto';
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(cat: CreateCatDto) {
    const client = new Client({
      user: 'postgres',
      host: '127.0.0.1',
      database: 'Contact',
      port: 5432,
    });

    await client.connect();
    const result = await client.query(
      `insert into "user"(name, age, breed) values('${cat.name}', '${cat.age}', '${cat.breed}')`,
    );
    await client.end();

    return result;
  }
  findAll(): Cat[] {
    return this.cats;
  }

  async findDB(): Promise<any> {
    const client = new Client({
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

  async searchName(name: string): Promise<Cat[]> {
    const client = new Client({
      user: 'postgres',
      host: '127.0.0.1',
      database: 'Contact',
      port: 5432,
    });

    await client.connect();
    const result = await client.query(
      `select * from "user" where name = '${name}'`,
    );
    await console.log(result);
    await client.end();
    return result.rows;
  }
}
