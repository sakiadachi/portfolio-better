<template>
    <v-app>
        <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">
                <v-spacer></v-spacer>
                <v-btn
                    v-for="(link, index) in links"
                    :key="index"
                    :href="link.href"
                    text
                    :ripple="false"
                >
                    {{ link.text }}
                </v-btn>

                <!-- <v-spacer></v-spacer>
                <a href="/">
                    <v-avatar
                        class="mr-10"
                        color="grey darken-1"
                        size="32"
                    ></v-avatar>
                </a> -->
            </v-container>
        </v-app-bar>

        <v-main>
            <nuxt />
        </v-main>
        <v-footer padless :absolute="!fixed" app class="py-8 grey darken-4">
            <v-col class="text-center white--text">
                Saki Adachi <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-col>
        </v-footer>
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
            drawer: true,
            fixed: false,
            links: [
                {
                    text: 'home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'works',
                    disabled: false,
                    href: '/works',
                },
                {
                    text: 'sandbox',
                    disabled: false,
                    href: '/sandbox',
                },
                {
                    text: 'blog',
                    disabled: false,
                    href: '/blog',
                },
                {
                    text: 'contact',
                    disabled: false,
                    href: '/contact',
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
        }
    },
}
</script>
