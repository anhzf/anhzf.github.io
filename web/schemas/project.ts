import * as v from 'valibot';
import { TECHNOLOGY_NAMES } from '~/lib/projects';

export const ProjectSchema = v.object({
  title: v.string(),
  path: v.string(),
  description: v.nullish(v.string()),
  thumbnail: v.string(),
  technologies: v.nullish(v.array(v.picklist(TECHNOLOGY_NAMES)), []),
  liveUrl: v.nullish(v.string()),
  demoUrl: v.nullish(v.string()),
  repositoryUrl: v.nullish(v.string()),
});