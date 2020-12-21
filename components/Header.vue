<template>
    <v-nav>
        <v-tabs v-model="tab" grow link>
            <v-tabs-slider color="grey"></v-tabs-slider>
            <v-tab v-for="i in items" :key="i" :href="`/${i.link}`">
                {{ i.title }}
            </v-tab>
        </v-tabs>
    </v-nav>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            tab: null,
            items: [
                { title: 'home', link: '' },
                { title: 'about', link: 'about' },
                { title: 'portfolio', link: 'works' },
                { title: 'blog', link: 'blog' },
            ],
        }
    },
    methods: {},
}
</script>
