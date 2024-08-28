import { RecordModel } from 'pocketbase';

/* eslint-disable no-unused-vars */
export enum TagsFields {
  ID = 'id',
  NAME = 'name',
  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Tags extends RecordModel {
  [TagsFields.ID]: string;
  [TagsFields.NAME]: string;

  [TagsFields.CREATED]: string;
  [TagsFields.UPDATED]: string;
}
