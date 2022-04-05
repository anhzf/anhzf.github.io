import type { Component } from 'src/models';

export const projects: Component.CardProject.Props[] = [
  {
    title: 'PanenPlaza',
    url: 'https://panenplaza.id/apps/',
    thumbnailSrc: '/assets/img/projects/panenplaza.jpg',
    techStack: [
      'https://nextjs.org/static/favicon/favicon-16x16.png',
      '/assets/icons/react.svg',
    ],
  },
  {
    title: 'Bersamabisa.ID Community',
    url: 'https://bersamabisa.id/',
    thumbnailSrc: '/assets/img/projects/bbid.png',
    techStack: [
      '/assets/icons/quasar.svg',
      '/assets/icons/firebase.svg',
      '/assets/icons/vue.svg',
    ],
  },
  {
    title: 'Online Vote App',
    url: 'https://anhzf-election.web.app/',
    thumbnailSrc: '/assets/img/projects/evote.jpg',
    techStack: [
      '/assets/icons/quasar.svg',
      '/assets/icons/firebase.svg',
      '/assets/icons/vue.svg',
    ],
  },
  {
    title: 'KPBI Membership Management',
    url: 'https://anggota.kpbi.or.id/',
    thumbnailSrc: '/assets/img/projects/kpbi.png',
    techStack: [
      '/assets/icons/vue.svg',
      '/assets/icons/laravel.svg',
    ],
  },
  {
    title: 'Sebelas Maret International IoT Challenges 2021',
    url: 'https://iotchallenges.ft.uns.ac.id/',
    thumbnailSrc: '/assets/img/projects/iotchallenges.png',
    techStack: [
      '/assets/icons/react.svg',
    ],
  },
  // {
  //   title: 'Komplain Apps',
  //   url: 'https://oprec-upt-tik.web.app/',
  //   thumbnailSrc: '/assets/img/projects/sipm.png',
  //   techStack: [
  //     '/assets/icons/quasar.svg',
  //     '/assets/icons/firebase.svg',
  //     '/assets/icons/vue.svg',
  //   ],
  // },
];

export const links: Component.CardLink.Props[] = [
  {
    label: 'Windows 11: Ulasan Saya Setelah Menggunakan 2 Pekan Sebagai Pengguna Windows 10',
    url: 'https://anhzf.medium.com/c56753e8fe4d',
    thumbnailSrc: 'https://miro.medium.com/max/1200/1*FBDnInXxeeGzzA6jQlOjcA.png',
  },
  {
    label: 'How to create Palestine Flag in Single <div />',
    url: '/blogs/palestine-single-div',
    thumbnailSrc: '/assets/img/links/Optimized-palestine-single-div.png',
  },
  {
    label: 'Github',
    url: 'https://github.com/anhzf',
    thumbnailSrc: 'https://github.githubassets.com/pinned-octocat.svg',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/alwan.nuha/',
    thumbnailSrc: 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png',
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/anhzf/',
    thumbnailSrc: 'https://static-exp1.licdn.com/sc/h/5bukxbhy9xsil5mb7c2wulfbx',
  },
  {
    label: 'Medium Blogs',
    url: 'https://anhzf.medium.com/',
    thumbnailSrc: 'https://miro.medium.com/fit/c/164/164/1*vReTE3fNqmaW91z7sma4nQ.png',
  },
];
