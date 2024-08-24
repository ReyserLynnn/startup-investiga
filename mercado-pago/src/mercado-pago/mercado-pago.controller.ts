import {
  Body, Controller, Get, Post, Query,
} from '@nestjs/common';
import { parserOrder } from 'src/types/order';
import { MercadoPagoService } from './mercado-pago.service';

@Controller('mercado-pago')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {
  }

  @Get('webhook')
  async webhook(
  @Query('type') type: string,
    @Query('data.id') data_id: string,
  ) {
    return this.mercadoPagoService.webhook({ type, data_id });
  }

  @Post('checkout')
  async checkout(@Body() body: unknown) {
    const order = parserOrder.safeParse(body);
    if (!order.success) {
      return order.error;
    }

    return this.mercadoPagoService.checkout({ order: order.data });
  }
}
