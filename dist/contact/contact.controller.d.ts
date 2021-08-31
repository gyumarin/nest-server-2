import { ContactService } from './contact.service';
import { Prisma, Contact } from '@prisma/client';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: number): Promise<Contact>;
    update(id: string, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
    remove(id: string): Promise<Contact>;
}
