<template>
    <div class="container">
        <!-- <button @click="animeEl">Click me</button>
        <div class="bar"></div> -->
    </div>
</template>

<script>
export default {
    name: 'Anime',
    data() {
        return {}
    },
    methods: {
        animeEl() {
            this.$anime({
                targets: '.bar',
                width: '100%', // -> from '28px' to '100%',
                easing: 'easeInOutQuad',
                direction: 'alternate',
                duration: 600,
                loop: false,
            })
        },
    },
}
</script>

<style scoped>
.block {
    pointer-events: none;
    position: relative;
    width: 128px;
    height: 128px;
    margin: 1px;
    background-color: currentColor;
    font-size: 12px;
    color: #2c3e50;
}
</style>
