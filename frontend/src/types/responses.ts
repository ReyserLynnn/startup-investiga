/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';
import { Answers } from './answers';
import { Questions } from './questions';
import { Users } from './user';

export enum ResponsesFields {
  ID = 'id',
  ANSWER = 'answer',
  QUESTION = 'question',
  USER = 'user',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface Responses extends RecordModel {
  [ResponsesFields.ID]: string;
  [ResponsesFields.ANSWER]: string;
  [ResponsesFields.QUESTION]: string;
  [ResponsesFields.USER]: string;

  [ResponsesFields.EXPAND]?: {
    [ResponsesFields.ANSWER]: Answers;
    [ResponsesFields.QUESTION]: Questions;
    [ResponsesFields.USER]: Users;
  };

  [ResponsesFields.CREATED]: string;
  [ResponsesFields.UPDATED]: string;
}
