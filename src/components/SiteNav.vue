<template>
    <nav class="site-nav">
      <ul>
        <li class="title"><h1>Card Sharp</h1></li>
        <li class="nav-1">New Game</li>
        <li class="nav-2">How to Play</li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: "site-nav"
}
</script>

<style>
nav ul, nav li {
  display: inline-block;
}

nav li {
  list-style-type: none;
}

.site-nav {
  background-color: #1a1a1a;
  width: 100vw;
}

.site-nav ul {
  display: flex;
  margin: 0;
  padding: 0 2rem;
  justify-content: space-around;
  align-items: center;
}

.nav-1, .nav-2 {
  flex-grow: 1;
  font-size: 1rem;
  font-family: var(--graduate);
  padding: 0 1rem;
}

.title {
  color: #ffffffea;
  flex-grow: 2;
  font-family: var(--righteous);
}

</style>


