/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';

export enum TeacherFields {
  ID = 'id',
  NAME = 'name',
  LASTNAME = 'lastname',
  DESCRIPTION = 'description',
  VIDEO_PRESENTATION = 'video_presentation',

  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Teacher extends RecordModel {
  [TeacherFields.ID]: string;
  [TeacherFields.NAME]: string;
  [TeacherFields.LASTNAME]: string;
  [TeacherFields.DESCRIPTION]: string;

  [TeacherFields.CREATED]: string;
  [TeacherFields.UPDATED]: string;
}
