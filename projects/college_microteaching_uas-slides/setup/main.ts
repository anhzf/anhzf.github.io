import { defineAppSetup } from '@slidev/types';

export default defineAppSetup(async () => {
  await import('flowbite');
});
