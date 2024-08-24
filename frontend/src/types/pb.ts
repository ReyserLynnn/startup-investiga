import { RecordModel } from 'pocketbase';

export enum Collections {
  USERS = 'users',
  COURSES = 'courses',
  DEGREES = 'degrees',
  INSTITUTIONS = 'institutions',
  MODULES = 'modules',
  SESSIONS = 'sessions',
  TAGS = 'tags',
  TEACHERS = 'teachers',
  TOOLS_IA = 'tools_ia',
}

export enum Sort {
  CREATED = 'created',
}

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

export enum ToolsIAFields {
  ID = 'id',
  COLLECTION_ID = 'collectionId',
  COLLECTION_NAME = 'collectionName',
  CREATED = 'created',
  UPDATED = 'updated',
  NAME = 'name',
  LOGO = 'logo',
  PAGE_URL = 'page_url',
  VIDEO_PRESENTATION = 'video_presentation',
  LIKES = 'likes',
  TAGS = 'tags',
  DESCRIPTION = 'description',
  EXPAND = 'expand',
}

export interface ToolsIa extends RecordModel {
  [ToolsIAFields.ID]: string;
  [ToolsIAFields.COLLECTION_ID]: string;
  [ToolsIAFields.COLLECTION_NAME]: string;
  [ToolsIAFields.CREATED]: string;
  [ToolsIAFields.UPDATED]: string;
  [ToolsIAFields.NAME]: string;
  [ToolsIAFields.LOGO]: string;
  [ToolsIAFields.PAGE_URL]: string;
  [ToolsIAFields.VIDEO_PRESENTATION]: string;
  [ToolsIAFields.LIKES]: string[];
  [ToolsIAFields.TAGS]: string[];
  [ToolsIAFields.DESCRIPTION]: string;
  [ToolsIAFields.EXPAND]?: {
    [ToolsIAFields.LIKES]: any;
    [ToolsIAFields.TAGS]: Tags[];
  };
}

export const expandFields = (fields: string[]) => fields.join(',');
