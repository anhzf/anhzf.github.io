<template>
  <router-view/>
</template>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app::before {
  content: 'Anhzf.Dev';
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  line-height: 1.2;
  font-size: 9rem;
  font-weight: 600;
  text-align: center;
  writing-mode: vertical-lr;
  color: rgba(20, 20, 20, 0.04);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
