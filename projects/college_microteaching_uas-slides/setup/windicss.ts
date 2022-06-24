import { defineWindiSetup } from '@slidev/types';
import { transform } from 'windicss/helpers';

export default defineWindiSetup(() => ({
  plugins: [
    transform('flowbite/plugin'),
  ],
}));
