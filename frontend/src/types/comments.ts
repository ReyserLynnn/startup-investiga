/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';
import { Courses } from './courses';
import { Users } from './user';

export enum CommentsFields {
  ID = 'id',
  MESSAGE = 'message',
  MODULE = 'module',
  USER = 'user',

  EXPAND = 'expand',
  CREATED = 'created',
}

export interface Comments extends RecordModel {
  [CommentsFields.ID]: string;
  [CommentsFields.MESSAGE]: string;

  [CommentsFields.CREATED]: string;
  [CommentsFields.USER]: string[];
  [CommentsFields.MODULE]: string[];
  [CommentsFields.EXPAND]?: {
    [CommentsFields.MODULE]: Courses[];
    [CommentsFields.USER]: Users;
  };
}
