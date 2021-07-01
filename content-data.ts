import type { Component } from 'src/models';

export const projects: Component.CardProject.Props[] = [
  {
    title: 'Bersamabisa.ID Community',
    thumbnailSrc: '/assets/img/projects/bbid.png',
    techStack: [
      '/assets/icons/quasar.svg',
      '/assets/icons/firebase.svg',
      '/assets/icons/vue.svg',
    ],
  },
  {
    title: 'KPBI Membership Management',
    thumbnailSrc: '/assets/img/projects/kpbi.png',
    techStack: [
      '/assets/icons/vue.svg',
      '/assets/icons/laravel.svg',
    ],
  },
  {
    title: 'Sebelas Maret International IoT Challenges 2021',
    thumbnailSrc: '/assets/img/projects/iotchallenges.png',
    techStack: [
      '/assets/icons/react.svg',
    ],
  },
  {
    title: 'Komplain Apps',
    thumbnailSrc: '/assets/img/projects/sipm.png',
    techStack: [
      '/assets/icons/quasar.svg',
      '/assets/icons/firebase.svg',
      '/assets/icons/vue.svg',
    ],
  },
];

export const links: Component.CardLink.Props[] = [
  {
    label: 'How to create Palestine Flag in Single <div />',
    url: '/blogs/palestine-single-div',
    thumbnailSrc: '/assets/img/links/Optimized-palestine-single-div.png',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/alwan.nuha/',
    thumbnailSrc: 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png',
  },
  {
    label: 'Github',
    url: 'https://github.com/anhzf',
    thumbnailSrc: 'https://github.githubassets.com/pinned-octocat.svg',
  },
];
