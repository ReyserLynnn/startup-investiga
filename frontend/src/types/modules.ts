/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';
import { Sessions } from './sessions';
import { Courses } from './courses';

export enum ModulesFields {
  ID = 'id',
  TITLE = 'title',
  DESCRIPTION = 'description',
  TIME = 'time',
  COURSE = 'course',
  SESSIONS = 'sessions',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface Modules extends RecordModel {
  [ModulesFields.ID]: string;
  [ModulesFields.TITLE]: string;
  [ModulesFields.DESCRIPTION]: string;
  [ModulesFields.TIME]: number;
  [ModulesFields.COURSE]: string;
  [ModulesFields.SESSIONS]: string[];

  [ModulesFields.EXPAND]?: {
    [ModulesFields.COURSE]: Courses;
    [ModulesFields.SESSIONS]: Sessions[];
  };

  [ModulesFields.CREATED]: string;
  [ModulesFields.UPDATED]: string;
}
