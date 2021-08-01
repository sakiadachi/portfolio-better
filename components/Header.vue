<template>
    <div>
        <v-app-bar color="white" flat>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        @click="() => {}"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>

            <v-toolbar-title>Saki Adachi</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
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
