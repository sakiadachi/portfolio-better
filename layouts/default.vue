<template>
    <v-app>
        <v-main>
            <!-- <Header></Header> -->

            <nuxt />
        </v-main>

        <!-- <v-footer padless :absolute="!fixed" app>
            <v-col class="text-center">
                Saki Adachi <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-col>
        </v-footer> -->
    </v-app>
</template>

<script>
// import Header from '@/components/Header'

export default {
    components: {
        // Header,
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/',
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire',
                },
            ],
            menus: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
        }
    },
}
</script>
