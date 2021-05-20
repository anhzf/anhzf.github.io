<template>
  <main class="page">
    <h1 class="title">Free Palestine 🔥</h1>

    <div class="palestine-flag__container">
      <div class="palestine-flag" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'PalestineSingleDiv'
}
</script>

<style scoped>
.page {
  flex-direction: column-reverse;
  justify-content: center;
  row-gap: 1rem;
}

.palestine-flag {
  position: relative;
  width: 800px;
  height: 500px;
}

.palestine-flag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(500px / 3);
  background-color: #000;
  box-shadow:
    0 calc(500px / 3 * 1) #fff,
    0 calc(500px / 3 * 2) #00763B
  ;
}

.palestine-flag::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: calc(500px / 2) solid #C81025;
  border-top: calc(500px / 2) solid transparent;
  border-bottom: calc(500px / 2) solid transparent;
}

.palestine-flag__container {
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  box-shadow:
    0 2.6px 3.4px rgba(0, 0, 0, 0.043),
    0 6.6px 8.7px rgba(0, 0, 0, 0.062),
    0 13.5px 17.7px rgba(0, 0, 0, 0.078),
    0 27.7px 36.5px rgba(0, 0, 0, 0.097),
    0 76px 100px rgba(0, 0, 0, 0.14)
  ;
}

.title {
  font-size: 3rem;
  line-height: 2;
}
</style>