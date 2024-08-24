import { Injectable } from '@nestjs/common';
import { Order } from 'src/types/order';

import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';

@Injectable()
export class MercadoPagoService {
  async webhook({ type, data_id }: { type: string, data_id: string }) {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS as string,
      options: {
        timeout: 5000,
        idempotencyKey: 'abc',
      },
    });

    const payment = new Payment(client);

    try {
      if (type === 'payment') {
        const data = await payment.get({ id: data_id, requestOptions: {} });

        if (!data.id || !data.metadata?.user_id) {
          throw new Error('Payment not found');
        }

        // await savePayment(data);

        return Response.json({ message: 'ok' });
      }
      return Response.json({ message: 'ok' });
    } catch (error : any) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }

  async checkout({ order }: { order: Order }) {
    if (order.course.is_free) {
      return {
        error: 'The course is free',
      };
    }

    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS as string,
      options: {
        timeout: 5000,
        idempotencyKey: 'abc',
      },
    });

    const preference = new Preference(client);

    try {
      const response = await preference.create({
        body: {
          items: [
            {
              id: order.course.id,
              title: order.course.name,
              description: order.course.description,
              quantity: 1,
              currency_id: 'BRL',
              unit_price: order.course.price,
            },
          ],
          back_urls: {
            success: `${process.env.URL_API}/pagos`,
            failure: `${process.env.URL_API}/carrito-de-compras/failure`,
            pending: `${process.env.URL_API}/carrito-de-compras/pending`,
          },
          notification_url: `${process.env.URL_API}api/orderHook`,
          metadata: {
            user_id: order.user.id,
          },
        },
      });

      return {
        init_point: response.init_point,
        preference_id: response.id,
      };
    } catch (error) {
      return {
        error: "Couldn't create the preference",
      };
    }
  }
}
