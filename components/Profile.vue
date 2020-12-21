<template>
    <div class="text-right">
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    outlined
                    color="black"
                    large
                    v-bind="attrs"
                    elevation="0"
                    v-on="on"
                >
                    <h3>say hi <i style="font-size: 22px">👋</i></h3>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img src="@/assets/img/skateboard.png" alt="Saki" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Saki Adachi</v-list-item-title>
                            <v-list-item-subtitle
                                >freelance front end
                                developer</v-list-item-subtitle
                            >
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn
                                :class="fav ? 'blue--text' : ''"
                                icon
                                @click="fav = !fav"
                            >
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item>
                        <v-list-item-title>Email</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action>
                            <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menu = false"> Cancel </v-btn>
                    <v-btn color="primary" text @click="menu = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    components: {},
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            category: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        }
    },
}
</script>
