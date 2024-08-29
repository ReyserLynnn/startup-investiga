/* eslint-disable no-unused-vars */

import { RecordModel } from 'pocketbase';
import { Modules } from './modules';
import { Tags } from './tags';
import { Teacher } from './teacher';
import { Users } from './user';

export enum CoursesFields {
  ID = 'id',
  NAME = 'name',
  SHORT_DESCRIPTION = 'shortDescription',
  DESCRIPTION = 'description',
  SLUG = 'slug',
  PRICE = 'price',
  IS_LIVE = 'is_live',
  IS_FREE = 'is_free',
  PRESENTATION_VIDEO = 'presentation_video',
  IMAGE = 'image',
  TEACHER = 'teacher',
  MODULES = 'modules',
  IS_BEST = 'isBest',
  IS_TRENDING = 'isTrending',
  IS_FUTURE = 'isFuture',
  ALUMNS = 'alumns',
  DURATION = 'duration',
  TAGS = 'tags',

  CREATED = 'created',
  UPDATED = 'updated',
  EXPAND = 'expand',
}

export interface Courses extends RecordModel {
  [CoursesFields.ID]: string;
  [CoursesFields.NAME]: string;
  [CoursesFields.SHORT_DESCRIPTION]: string;
  [CoursesFields.DESCRIPTION]: string;
  [CoursesFields.SLUG]: string;
  [CoursesFields.PRICE]: number;
  [CoursesFields.IS_LIVE]: boolean;
  [CoursesFields.IS_FREE]: boolean;
  [CoursesFields.PRESENTATION_VIDEO]: string;
  [CoursesFields.IMAGE]: string;
  [CoursesFields.TEACHER]: string;
  [CoursesFields.MODULES]: string[];
  [CoursesFields.IS_BEST]: boolean;
  [CoursesFields.IS_TRENDING]: boolean;
  [CoursesFields.IS_FUTURE]: boolean;
  [CoursesFields.ALUMNS]: string[];
  [CoursesFields.DURATION]: number;
  [CoursesFields.TAGS]: string[];
  [CoursesFields.EXPAND]?: {
    [CoursesFields.TEACHER]: Teacher;
    [CoursesFields.MODULES]: Modules[];
    [CoursesFields.ALUMNS]: Users[];
    [CoursesFields.TAGS]: Tags[];
  };

  [CoursesFields.CREATED]: string;
  [CoursesFields.UPDATED]: string;
}
