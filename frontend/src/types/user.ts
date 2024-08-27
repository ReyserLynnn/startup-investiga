/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';

export enum UsersFields {
  ID = 'id',
  USERNAME = 'username',
  EMAIL = 'email',
  NAME = 'name',
  LASTNAME = 'lastname',
  AVATAR = 'avatar',
  BIO = 'bio',
  PHONE = 'phone',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface Users extends RecordModel {
  [UsersFields.ID]: string;
  [UsersFields.USERNAME]: string;
  [UsersFields.EMAIL]: string;
  [UsersFields.NAME]: string;
  [UsersFields.LASTNAME]: string;
  [UsersFields.AVATAR]: string;
  [UsersFields.BIO]: string;
  [UsersFields.PHONE]: string;

  [UsersFields.CREATED]: string;
  [UsersFields.UPDATED]: string;
}
