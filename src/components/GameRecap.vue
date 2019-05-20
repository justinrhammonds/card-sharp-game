<template>
    <div class="game-recap-modal">
        <h3><b>Game Over</b></h3>
        <h5>Your Final Score: {{finalScore}}</h5>
    </div>
</template>

<script>
export default {
    name: "game-recap-modal",
    props: {
        finalScore: {
            type: Number
        },
    },
    methods: {
        startNewGame() {
            this.$emit('start-new-game');
        }
    }
}
</script>

<style>
    .game-recap-modal {
        color: black;
    }

</style>