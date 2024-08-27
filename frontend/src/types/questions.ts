/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';
import { Answers } from './answers';

export enum QuestionsFields {
  ID = 'id',
  BODY = 'body',
  DESCRIPTION = 'description',
  ANSWERS = 'answers',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface Questions extends RecordModel {
  [QuestionsFields.ID]: string;
  [QuestionsFields.BODY]: string;
  [QuestionsFields.DESCRIPTION]: string;
  [QuestionsFields.ANSWERS]: string[];

  [QuestionsFields.EXPAND]?: {
    [QuestionsFields.ANSWERS]: Answers[];
  };

  [QuestionsFields.CREATED]: string;
  [QuestionsFields.UPDATED]: string;
}
