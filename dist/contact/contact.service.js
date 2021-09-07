"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const func_1 = require("../func/func");
let ContactService = class ContactService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(contactCreateInput) {
        if (contactCreateInput.email == (undefined || '')) {
            if ((0, func_1.what_language)(contactCreateInput.name)) {
                contactCreateInput.email = (0, func_1.createEmail)();
            }
            else {
                contactCreateInput.email = contactCreateInput.name + '@douzone.com';
            }
        }
        if (contactCreateInput.phone == (undefined || '')) {
            contactCreateInput.phone = (0, func_1.createPhone)();
        }
        if (contactCreateInput.desc == (undefined || '')) {
            contactCreateInput.desc = (0, func_1.createDesc)(contactCreateInput.name);
        }
        if (contactCreateInput.age == (undefined || 0)) {
            contactCreateInput.age = (0, func_1.createAge)();
        }
        return this.prisma.contact.create({
            data: contactCreateInput,
        });
    }
    findAll() {
        return this.prisma.contact.findMany();
    }
    findOne(id) {
        return this.prisma.contact.findUnique({
            where: { id },
        });
    }
    update(id, contactUpdateInput) {
        return this.prisma.contact.update({
            where: { id },
            data: contactUpdateInput,
        });
    }
    remove(id) {
        return this.prisma.contact.delete({
            where: { id },
        });
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map