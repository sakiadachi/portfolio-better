<template>
    <!-- <div style="border-bottom: 1px solid #333">
        <v-breadcrumbs
            :items="items"
            divider="|"
            class="justify-center"
        ></v-breadcrumbs>
    </div> -->
    <v-app-bar flat color="white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>
        <v-breadcrumbs
            :items="items"
            divider="/"
            class="justify-center menu-link"
        ></v-breadcrumbs>
    </v-app-bar>
</template>
<script>
export default {
    name: 'Header',
    data: () => ({
        items: [
            {
                text: 'プロフィール',
                disabled: false,
                href: '/about',
            },
            {
                text: 'ポートフォリオ',
                disabled: false,
                href: '/works',
            },
            {
                text: 'コード',
                disabled: false,
                href: '/sandbox',
            },
            {
                text: 'ブログ',
                disabled: false,
                href: '/blog',
            },
        ],
    }),
}
</script>
