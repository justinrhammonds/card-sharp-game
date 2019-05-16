<template>
  <div id="game">
    <hud />
    <game-row />
  </div>
</template>

<script>
import GameRow from '../components/GameRow.vue';
import Hud from '../components/Hud.vue';

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
  }
}
</script>

<style scoped>

  #game {
    height: 100%;
  }

</style>
