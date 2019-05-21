<template>
    <div class="game-recap-modal">
        <h2><b>Game Over</b></h2>
        <h4>Final Score: {{finalScore}}</h4>
        <b-button @click="$bvModal.hide('game-recap-modal')">Keep Trying</b-button> 
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

    .game-recap-modal button {
        background-color: var(--blue);
        float: right;
        margin-top: 20px;
        border: none;
    }

    .game-recap-modal button:hover,
    /* overriding boostrap's style here */
    .game-recap-modal button:not(:disabled):not(.disabled):active {
        background-color: #23cece;
        border: none;
    }

</style>