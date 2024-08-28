/* eslint-disable no-unused-vars */

export enum Collections {
  USERS = 'users',
  COURSES = 'courses',
  DEGREES = 'degrees',
  INSTITUTIONS = 'institutions',
  MODULES = 'modules',
  SESSIONS = 'sessions',
  TAGS = 'tags',
  TEACHERS = 'teachers',
  TOOLS_IA = 'tools_ia',
  ANSWERS = 'answers',
  QUESTIONS = 'questions',
  RESPONSES = 'responses',
}

export enum Sort {
  CREATED = 'created',
}

export interface UpdateDataFormUser {
  id?: string;
  name?: string;
  lastname?: string;
  avatar?: File;
  bio?: string;
  phone?: string;
  courses?: Array<string>;
  institution?: string;
  degree?: string;
  last_login?: string;
}
