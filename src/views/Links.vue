<template>
  <div class="page page--padding page-links">
    <ul class="link__list">
      <li
        v-for="(link, i) in links"
        :key="i"
        class="link__item"
      >
        <a :href="link.to ? $router.resolve(link.to).href : link.url" target="_blank" />

        <div class="link__item-content">
          <img :src="link.imgSrc" alt="" class="link__item-thumbnail">
          <span class="link__item-title">{{ link.title }}</span>
        </div>

        <a class="link__item-overlay" :href="link.to ? $router.resolve(link.to).href : link.url" target="_blank">
          <div class="link__open-btn" role="button">
            <span class="mdi mdi-open-in-new" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const linkData = [
  {
    title: 'How To Make Palestine Flag in Single <div/>',
    to: '/palestine-single-div',
    imgSrc: '/images/Optimized-palestine-single-div.png',
  },
  {
    title: 'My Github',
    url: 'https://github.com/anhzf',
    imgSrc: '/images/Optimized-github-profile.png',
  },
  {
    title: 'My Instagram',
    url: 'https://instagram.com/alwan.nuha',
    imgSrc: '/images/Optimized-pp.jpg'
  },
]

export default {
  name: 'PageLinks',
  setup() {
    return {
      links: linkData,
    }
  }
}
</script>

<style scoped>
.link__list {
  list-style: none;
  width: 100%;
  max-width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.link__item {
  position: relative;
  padding: .5rem;
  background-color: rgb(48, 117, 160);
  border-radius: 10px;
  box-shadow:
    0 0.2px 0.6px rgba(0, 0, 0, 0.02),
    0 0.5px 1.3px rgba(0, 0, 0, 0.028),
    0 0.9px 2.5px rgba(0, 0, 0, 0.035),
    0 1.6px 4.5px rgba(0, 0, 0, 0.042),
    0 2.9px 8.4px rgba(0, 0, 0, 0.05),
    0 7px 20px rgba(0, 0, 0, 0.07)
  ;
}

.link__item-content {
  display: flex;
  flex-direction: column;
  row-gap: .6rem;
}

.link__item-content a {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.link__item-thumbnail {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
}

.link__item-title {
  z-index: 1;
  margin: .2em 0;
  color: #fff;
  font-weight: 600;
}

.link__item-overlay {
  position: absolute;
  display: flex;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  backdrop-filter: blur(2px);
  background-color: #0016;
  border-radius: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .14s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.link__item:hover .link__item-overlay {
  transform: scaleY(1);
}

.link__open-btn {
  display: flex;
  width: 4rem;
  height: 4rem;
  font-size: 1.6rem;
  color: #fff;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color .14s ease-out;
}

.link__open-btn:hover {
  background-color: #fff4;
}

@media screen and (max-width: 768px) {
  .link__list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>