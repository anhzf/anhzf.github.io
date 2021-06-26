import type { HeadClient } from '@vueuse/head';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $head: HeadClient;
  }
}
