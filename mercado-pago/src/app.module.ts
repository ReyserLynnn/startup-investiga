import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module';

@Module({
  imports: [MercadoPagoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
