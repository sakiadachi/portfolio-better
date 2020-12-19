<template>
    <div class="">
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="white"
                    elevation="4"
                    x-large
                    v-bind="attrs"
                    class="btn_xlarge"
                    v-on="on"
                >
                    Say Hi to Saki <i style="font-size: 23px">👋</i></v-btn
                >
            </template>

            <v-card>
                <v-form v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8">
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-overflow-btn segmented></v-overflow-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
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
        }
    },
}
</script>
