import { RecordModel } from 'pocketbase';
import { Tags } from './tags';

/* eslint-disable no-unused-vars */
export enum ToolsIAFields {
  ID = 'id',
  COLLECTION_ID = 'collectionId',
  COLLECTION_NAME = 'collectionName',
  NAME = 'name',
  LOGO = 'logo',
  PAGE_URL = 'page_url',
  VIDEO_PRESENTATION = 'video_presentation',
  LIKES = 'likes',
  TAGS = 'tags',
  DESCRIPTION = 'description',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface ToolsIa extends RecordModel {
  [ToolsIAFields.ID]: string;
  [ToolsIAFields.COLLECTION_ID]: string;
  [ToolsIAFields.COLLECTION_NAME]: string;
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

  [ToolsIAFields.CREATED]: string;
  [ToolsIAFields.UPDATED]: string;
}
