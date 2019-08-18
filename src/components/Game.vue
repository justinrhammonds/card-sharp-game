<template>
  <div id="game">
    <hud />
    <game-row />
    <game-recap />
  </div>
</template>

<script>
import Hud from "./Hud";
import GameRow from "./GameRow";
import GameRecap from "./GameRecap";

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
    GameRecap
  }
};
</script>

<style scoped>
#game {
  height: 100vh;
  background-color: #299104;
  background-image: url("../assets/45-degree-fabric.png");
  background-repeat: repeat;
}
</style>
