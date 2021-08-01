<template>
    <div id="blog-header" class="blog-header">
        <h1 class="text-lg">{{ header }}</h1>
        <p class="grey--text lighten2">{{ subHeader }}</p>

        <!-- <img :href> -->
    </div>
</template>

<style lang="scss" scoped>
.blog-header {
    margin: 3rem 0;
}
.blog-header h1 {
    font-size: 4rem;
    line-height: 1.1;
}
</style>

<script>
export default {
    name: 'BlogHeader',
    props: {
        header: { type: String, required: true },
        subHeader: { type: String, required: true },
    },
    data() {
        return {}
    },
}
</script>
