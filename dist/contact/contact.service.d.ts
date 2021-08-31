import { Prisma, Contact } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: number): Promise<Contact>;
    update(id: number, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
    remove(id: number): Promise<Contact>;
}
