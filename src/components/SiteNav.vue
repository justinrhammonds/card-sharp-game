<template>
  <nav class="site-nav">
    <div class="title">
      <span class="main-title">Card</span>
      <span class="main-title">Sharp</span>
      <span class="sub-title">Solo</span>
    </div>
    <ul class="nav-menu">
      <li><router-link to="/tutorial">Tutorial</router-link></li> 
      <li><router-link to="/play" go>Play Game</router-link></li> 
    </ul>
  </nav>
</template>

<script>

export default {
  name: "site-nav",
  components: {
  },
  methods: {

  }
}
</script>

<style>

.site-nav {
  background-color: #1a1a1a;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem calc(var(--nav-font-size) * .5);
}

.main-title{
  text-transform: uppercase;
  font-family: var(--monoton);
  font-weight: 400;
  color: white;
  font-size: calc(var(--nav-font-size) * 1.1);
  margin-right: calc(var(--nav-font-size) * .35);
}

.sub-title {
  font-family: var(--yellowtail);
  color: #007bff;
  font-weight: 500;
  font-size: calc(var(--nav-font-size) * 1.2);
}

.nav-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
}

.nav-menu li {
  font-family: var(--yellowtail);
  font-size: var(--nav-font-size);
  color: #007bff;
  padding: .5rem 0 .5rem 1rem;
  margin-left: calc(var(--nav-font-size) * .4);
}

.nav-menu li a:hover,
.nav-menu li a:focus {
  outline: none;
  text-decoration: none;
}

.nav-menu li a:hover {
  color: aqua;
}

</style>
