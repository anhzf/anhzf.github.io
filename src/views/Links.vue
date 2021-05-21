<template>
  <div class="page page-links">
    <ul class="link__list">
      <li
        v-for="(link, i) in links"
        :key="i"
        class="link__item"
      >
        <a :href="link.to ? $router.resolve(link.to).href : link.url" />
        <img src="http://placehold.it/500x300" alt="" class="link__item-thumbnail">
        <span>{{ link.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const linkData = [
  {
    title: 'Google',
    url: 'https://google.com',
  },
  {
    title: 'Palestine',
    to: '/palestine-single-div',
  },
]

export default {
  name: 'PageLinks',
  setup() {
    return {
      links: linkData.concat(linkData, linkData, linkData),
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
  grid-template-rows: repeat(auto, 1fr);
  gap: 3rem;
}

.link__item {
  position: relative;
  padding: 1rem .5rem;
  background-color: rgb(215, 240, 255);
  border-radius: 3px;
  box-shadow:
    0 1px 2px rgba(0, 50, 120, .2),
    0 2px 6px rgba(0, 23, 25, 0.133);
}

.link__item a {
  position: absolute;
  top: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.link__item-thumbnail {
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
}
</style>