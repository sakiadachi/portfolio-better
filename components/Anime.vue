<template>
    <div class="container">
        <div>
            <p>HTML, CSS, Sass</p>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'Anime',
    data() {
        return {
            skill: 20,
            knowledge: 33,
            power: 78,
        }
    },
}
</script>
