import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

import { ContactModule } from './contact/contact.module';

@Module({
  imports: [CatsModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
