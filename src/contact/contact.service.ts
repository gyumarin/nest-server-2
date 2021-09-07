import { Injectable } from '@nestjs/common';
import { Prisma, Contact } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

import {
  createEmail,
  createPhone,
  what_language,
  createDesc,
  createAge,
} from 'src/func/func';
@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact> {
    if (contactCreateInput.email == (undefined || '')) {
      if (what_language(contactCreateInput.name)) {
        contactCreateInput.email = createEmail();
      } else {
        contactCreateInput.email = contactCreateInput.name + '@douzone.com';
      }
    }

    if (contactCreateInput.phone == (undefined || '')) {
      contactCreateInput.phone = createPhone();
    }

    if (contactCreateInput.desc == (undefined || '')) {
      contactCreateInput.desc = createDesc(contactCreateInput.name);
    }

    if (contactCreateInput.age == (undefined || 0)) {
      contactCreateInput.age = createAge();
    }

    return this.prisma.contact.create({
      data: contactCreateInput,
    });
  }

  findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  findOne(id: number): Promise<Contact> {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    contactUpdateInput: Prisma.ContactUpdateInput,
  ): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data: contactUpdateInput,
    });
  }

  remove(id: number): Promise<Contact> {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}
