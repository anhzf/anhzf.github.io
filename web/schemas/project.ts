import * as v from 'valibot';
import { TECHNOLOGY_NAMES } from '~/lib/projects';

export const ProjectSchema = v.objectWithRest({
  title: v.string(),
  path: v.string(),
  pinned: v.nullish(v.boolean(), false),
  description: v.nullish(v.string()),
  thumbnail: v.nullish(v.string()),
  image: v.nullish(v.string()),
  cover: v.nullish(v.string()),
  technologies: v.nullish(v.array(v.picklist(TECHNOLOGY_NAMES)), []),
  liveUrl: v.nullish(v.string()),
  demoUrl: v.nullish(v.string()),
  repositoryUrl: v.nullish(v.string()),
}, v.unknown());