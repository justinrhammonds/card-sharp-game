<template>
  <div id="app">
    <site-nav />
    <router-view />
  </div>
</template>

<script>
import SiteNav from "./components/SiteNav.vue";

export default {
  name: "app",
  components: {
    SiteNav
  }
};
</script>

<style>
:root {
  --monoton: "Monoton", cursive;
  --yellowtail: "Yellowtail", cursive;
  --open-sans: "Open Sans", sans-serif;
  --card-height: calc(var(--card-width) / 0.727278);
  --card-width: 12vw;
  --small-font-size: calc(14px + (18 - 14) * (100vw - 400px) / (1600 - 400));
  --nav-font-size: calc(15px + (30 - 15) * (100vw - 400px) / (1600 - 400));
  --large-font-size: calc(32px + (40 - 32) * (100vw - 400px) / (1600 - 400));
  --bright-coral: #ff8a82;
  --blue: #007bff;
  --green: #5cea42;
  --black: #1a1a1a;
  --yellow: yellow;
}

html {
  height: 100vh;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-weight: 400;
}

body {
  background-color: #1a1a1a;
  color: white;
  font-family: var(--monoton);
  font-size: 16px;
  margin: 0;
}

h1,
h2,
h3 {
  margin: 1rem auto;
}

h1 {
  font-size: calc(2.25rem + (3.25 - 2.25) * (100vw - 400px) / (1600 - 400));
  line-height: 2.25rem;
}

h2 {
  font-size: calc(2rem + (3 - 2) * (100vw - 400px) / (1600 - 400));
  line-height: 2.15rem;
}

h3 {
  font-size: calc(1.5rem + (2.5 - 1.5) * (100vw - 400px) / (1600 - 400));
  line-height: 1.55rem;
}

nav ul,
nav li {
  display: inline-block;
}

nav li {
  align-items: center;
}

li {
  list-style: none;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: all 0.25s ease;
}

a:visited {
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: aqua;
  transition: all 0.25s ease;
}

p {
  font-family: var(--open-sans);
}

#app {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>
