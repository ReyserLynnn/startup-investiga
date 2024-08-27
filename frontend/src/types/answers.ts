/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';

export enum AnswersFields {
  ID = 'id',
  BODY = 'body',
  VALUE = 'value',
  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Answers extends RecordModel {
  [AnswersFields.ID]: string;
  [AnswersFields.BODY]: string;
  [AnswersFields.VALUE]: string;

  [AnswersFields.CREATED]: string;
  [AnswersFields.UPDATED]: string;
}
