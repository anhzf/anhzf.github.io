/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
declare module '@windicss/animations' {
  import type { Plugin } from 'windicss/types/interfaces';

  interface pluginOptions {
    settings?: Record<string, unknown>;
  }

  declare const plugin: (opts: pluginOptions) => Plugin;

  export default plugin;
}

declare module '@tailwindcss/*' {
  import type { Plugin } from 'windicss/types/interfaces';

  declare const plugin: Plugin;

  export default plugin;
}

declare module 'unit-to-px' {
  declare const toPx: (cssLength: string) => number;

  export default toPx;
}

declare module 'virtual:generated-pages' {
  import type { RouteRecordRaw } from 'vue-router';

  declare const routes: RouteRecordRaw[];

  export default routes;
}

declare module 'markdown-it-highlightjs' {
  declare const plugin: any;

  export default plugin;
}

declare module 'eva-icons' {
  interface AnimationOptions {
    type?: string;
    hover?: boolean;
    infinite?: boolean;
  }

  interface ReplaceOptions {
    fill?: string;
    width?: string | number;
    height?: string | number;
    class?: string;
    animation?: AnimationOptions;
  }

  declare const replace: (options?: ReplaceOptions) => void;

  export {
    AnimationOptions,
    ReplaceOptions,
    replace,
  };
}

declare module 'animejs/lib/anime.es' {
  type Values = any;

  interface AnimateOptions {
    targets?: any;
    translateX?: any;
    translateY?: any;
    translateZ?: any;
    rotate?: any;
    rotateX?: any;
    rotateY?: any;
    rotateZ?: any;
    scale?: any;
    scaleX?: any;
    scaleY?: any;
    scaleZ?: any;
    skew?: any;
    skewX?: any;
    skewY?: any;
    perspective?: any;
    duration?: number;
    easing?: string;
    [k: string]: any;
  }

  declare const animate: (opts: AnimateOptions) => void;

  export {
    animate as default,
  };
}
