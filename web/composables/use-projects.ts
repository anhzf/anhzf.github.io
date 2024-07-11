import { useQuery } from '@tanstack/vue-query';
import { parse } from 'valibot';
import { ProjectSchema } from '~/schemas/project';

export const useProjects = () => {
  const states = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const result = await queryContent('/projects')
        .only(['title', 'desc', 'thumbnail', 'technologies', 'liveUrl', 'demoUrl', 'repositoryUrl', '_path'])
        .find();
      return result.map(el => parse(ProjectSchema, {
        ...el,
        path: el._path,
      }));
    },
    initialData: [],
  });
  const prefetch = () => states.suspense().then(() => true);

  return Object.assign(states, { prefetch });
};