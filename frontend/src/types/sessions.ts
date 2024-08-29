/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';

export enum SessionsFields {
  ID = 'id',
  TITLE = 'title',
  DESCRIPTION = 'description',
  DURATION = 'duration',
  POSTER = 'poster',

  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Sessions extends RecordModel {
  [SessionsFields.ID]: string;
  [SessionsFields.TITLE]: string;
  [SessionsFields.DESCRIPTION]: string;
  [SessionsFields.DURATION]: number;
  [SessionsFields.POSTER]: string;

  [SessionsFields.CREATED]: string;
  [SessionsFields.UPDATED]: string;
}
