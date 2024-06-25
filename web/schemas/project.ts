import * as v from 'valibot';
import { TECHNOLOGY_NAMES } from '~/lib/projects';

export const ProjectSchema = v.object({
  title: v.string(),
  desc: v.optional(v.string()),
  thumbnail: v.string(),
  technologies: v.picklist(TECHNOLOGY_NAMES),
  liveUrl: v.optional(v.string()),
  demoUrl: v.optional(v.string()),
  repositoryUrl: v.optional(v.string()),
});