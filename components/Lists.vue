<template>
    <div class="lists">
        <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
                <v-expansion-panel-header>
                    <h1>{{ item }}</h1>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="d-flex">
                        <img
                            src="@/assets/img/skateboard.png"
                            class="mr-3"
                            style="width: 200px; height: auto"
                        />
                        <div>
                            <h3>
                                Now it’s time for a little controversy. Of all
                                the topics we researched while creating Tyrus,
                                nothing fanned the flames of debate quite like
                                the age old question: Do you always stay true to
                                your personal illustration style, or do you
                                adapt according to each client’s (and your
                                business’) needs?
                            </h3>
                            <a href="/works" class="text-right"
                                >ポートフォリオを見る</a
                            >
                        </div>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: 'Lists',
    data() {
        return {
            items: ['フロントエンド', 'あああ', 'あああ'],
        }
    },
}
</script>
