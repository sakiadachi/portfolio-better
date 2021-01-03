<template>
    <v-container>
        <!-- <div>
            <v-progress-linear
                v-model="power"
                color="amber"
                height="25"
            ></v-progress-linear>

            <br />

            <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
            </v-progress-linear>

            <br />

            <v-progress-linear v-model="knowledge" height="25">
                <strong>{{ Math.ceil(knowledge) }}%</strong>
            </v-progress-linear>
        </div> -->
        <v-row>
            <v-col>
                <h3>Title Title</h3>
                <p>
                    Enthusiastic front-end developer / designer eager to
                    contribute to team success through hard work, attention to
                    detail and excellent organizational skills. Clear
                    understanding of visual design for websites and training in
                    frontend development. Motivated to learn, grow and excel in
                    creating user-centered products from the eyes of designer
                    and developer.
                </p>
            </v-col>
            <v-col>
                <h3>Title Title</h3>
                <p>
                    Enthusiastic front-end developer / designer eager to
                    contribute to team success through hard work, attention to
                    detail and excellent organizational skills. Clear
                    understanding of visual design for websites and training in
                    frontend development. Motivated to learn, grow and excel in
                    creating user-centered products from the eyes of designer
                    and developer.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Title Title</h3>
                <p>
                    Enthusiastic front-end developer / designer eager to
                    contribute to team success through hard work, attention to
                    detail and excellent organizational skills. Clear
                    understanding of visual design for websites and training in
                    frontend development. Motivated to learn, grow and excel in
                    creating user-centered products from the eyes of designer
                    and developer.
                </p>
            </v-col>
            <v-col>
                <h3>Title Title</h3>
                <p>
                    Enthusiastic front-end developer / designer eager to
                    contribute to team success through hard work, attention to
                    detail and excellent organizational skills. Clear
                    understanding of visual design for websites and training in
                    frontend development. Motivated to learn, grow and excel in
                    creating user-centered products from the eyes of designer
                    and developer.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            skill: 20,
            knowledge: 33,
            power: 78,
        }
    },
}
</script>
