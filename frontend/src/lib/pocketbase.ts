import { Collections } from '@/types/pb';
import { Questions, QuestionsFields } from '@/types/questions';
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import PocketBase from 'pocketbase';
import { ToolsIa, ToolsIAFields } from '@/types/toolsIA';
import { POCKET_BASE_URL } from '@/config/global';
import { Responses, ResponsesFields } from '@/types/responses';
import { expandFields } from './utils';
import { Courses } from '@/types/courses';
import { Tags } from '@/types/tags';

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

  async getQuestions() {
    const questions = await this.client
      .collection(Collections.QUESTIONS)
      .getFullList({
        expand: QuestionsFields.ANSWERS,
      });

    return questions as Questions[];
  }

  async getTools() {
    const tools = await this.client
      .collection(Collections.TOOLS_IA)
      .getFullList({
        expand: expandFields([ToolsIAFields.LIKES, ToolsIAFields.TAGS]),
      });

    return tools as ToolsIa[];
  }

  async getResponseByUser({ userId }: { userId: string }) {
    const response = await this.client
      .collection(Collections.RESPONSES)
      .getFullList({
        filter: `${ResponsesFields.USER} = "${userId}"`,
        expand: expandFields([
          ResponsesFields.QUESTION,
          ResponsesFields.ANSWER,
          `${ResponsesFields.QUESTION}.${QuestionsFields.ANSWERS}`,
        ]),
      });

    return response as Responses[];
  }

  async createResponse({
    userId,
    questionId,
    answer,
  }: {
    userId: string;
    questionId: string;
    answer: string;
  }) {
    const newResponse = {
      [ResponsesFields.USER]: userId,
      [ResponsesFields.QUESTION]: questionId,
      [ResponsesFields.ANSWER]: answer,
    };

    console.log(newResponse);

    const response = await this.client
      .collection(Collections.RESPONSES)
      .create(newResponse);

    return response as Responses;
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

  async getBestCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        filter: 'isBest=true',
        expand: 'tags',
        requestKey: 'bestCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      console.log(error)
      throw new Error('Error al obtener los mejores cursos');
    }
  }

  async getAnyCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        expand: 'tags',
        requestKey: 'anyCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      throw new Error('Error al obtener todos los cursos');
    }
  }

  async getTrendingCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        filter: 'isTrending=true',
        expand: 'tags',
        requestKey: 'trendingCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      console.error('Error al obtener los mejores cursos:', error);
      throw new Error('Error al obtener los cursos en tendencia');
    }
  }

  async getLiveCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        filter: 'is_live=true',
        expand: 'tags',
        requestKey: 'liveCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      throw new Error('Error al obtener los cursos en vivo');
    }
  }

  async getFreeCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        filter: 'is_free=true',
        expand: 'tags',
        requestKey: 'freeCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      throw new Error('Error al obtener los cursos gratis');
    }
  }

  async getFutureCourses() {
    try {
      const result = await this.client.collection('courses').getFullList({
        filter: 'isFuture=true',
        expand: 'tags',
        requestKey: 'futureCoursesApi',
      });

      return result as Courses[];
    } catch (error) {
      throw new Error('Error al obtener los cursos futuros');
    }
  }

  async getTags() {
    try {
      const result = await this.client.collection('tags').getFullList({
        requestKey: 'tagsApi',
      });
      return result as Tags[];
    } catch (error) {
      throw new Error('Error al obtener los tags');
    }
  }
}

const pb = new DatabaseClient();
export default pb;
