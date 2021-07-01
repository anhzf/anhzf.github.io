/* eslint-disable @typescript-eslint/no-namespace */

export namespace Component {
  export namespace CardProject {
    export interface Props {
      title: string;
      url?: string;
      thumbnailSrc?: string;
      techStack?: string[];
    }
  }

  export namespace CardLink {
    export interface Props {
      label: string;
      url: string;
      thumbnailSrc?: string;
    }
  }
}
