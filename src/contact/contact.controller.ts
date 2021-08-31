import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Prisma, Contact } from '@prisma/client';
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(
    @Body() contactCreateInput: Prisma.ContactCreateInput,
  ): Promise<Contact> {
    return await this.contactService.create(contactCreateInput);
  }

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Contact> {
    return this.contactService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() contactUpdateInput: Prisma.ContactUpdateInput,
  ): Promise<Contact> {
    return this.contactService.update(Number(id), contactUpdateInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Contact> {
    return this.contactService.remove(Number(id));
  }
}
