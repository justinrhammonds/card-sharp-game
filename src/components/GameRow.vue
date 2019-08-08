<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage :key="index" v-for="(stage, index) in stages" :row-stage="stage">
        <game-controls />
      </row-stage>
    </div>
  </div>
</template>

<script>
import RowStage from "./RowStage.vue";
import GameControls from "./GameControls.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "game-row",
  components: {
    RowStage,
    GameControls
  },
  computed: {
    ...mapState(["stages"])
  },
  methods: {
    ...mapActions(["shuffleAndDeal"]),
  },
  created() {
    this.shuffleAndDeal();
  }
};
</script>

<style scoped>
.row-container {
  display: flex;
  justify-content: space-evenly;
  padding-top: 10vh;
}
</style>
