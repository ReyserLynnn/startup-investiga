/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';

export enum SessionsFields {
  ID = 'id',
  TITLE = 'title',
  DESCRIPTION = 'description',
  TIME = 'time',

  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Sessions extends RecordModel {
  [SessionsFields.ID]: string;
  [SessionsFields.TITLE]: string;
  [SessionsFields.DESCRIPTION]: string;
  [SessionsFields.TIME]: number;

  [SessionsFields.CREATED]: string;
  [SessionsFields.UPDATED]: string;
}
