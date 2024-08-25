import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import PocketBase from 'pocketbase';

export const POCKET_BASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || '';

export class DatabaseClient {
  client: PocketBase;

  constructor() {
    this.client = new PocketBase(POCKET_BASE_URL);
  }

  async authenticate(email: string, password: string) {
    try {
      const result = await this.client
        .collection('users')
        .authWithPassword(email, password);
      if (!result?.token) {
        throw new Error('Erro al obtener el token');
      }
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Correo o contraseña no válida');
    }
  }

  async register(
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
    name: string,
    lastname: string,
    phone: string,
    institution: string,
    degree: string,
  ) {
    try {
      const result = await this.client.collection('users').create({
        username,
        email,
        password,
        passwordConfirm,
        name,
        lastname,
        phone,
        institution,
        degree,
      });
      return result;
    } catch (err) {
      console.log(err);
      throw new Error('Error al registrar el usuario');
    }
  }

  async getInstitutions() {
    try {
      const result = await this.client.collection('institutions').getFullList({
        sort: '-name',
      });

      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las instituciones');
    }
  }

  async getDegrees() {
    try {
      const result = await this.client.collection('degrees').getFullList({
        sort: '-name',
      });

      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los grados academicos');
    }
  }

  async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get('pb_auth');
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || '');
    return this.client.authStore.isValid || false;
  }

  async getUser(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get('pb_auth');
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || '');
    return this.client.authStore.model;
  }

  getClient() {
    return this.client;
  }
}

const pb = new DatabaseClient();
export default pb;
