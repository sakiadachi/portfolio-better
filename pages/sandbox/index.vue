<template>
    <div class="">
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list color="transparent">
                            <v-list-item :ripple="false" @click="changeTab(0)">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        コンポーネントのSass
                                        variableを変更する【Vuetify
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item :ripple="false" @click="changeTab(1)">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        よく使うcss animation
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet
                        v-if="tab_id == 0"
                        min-height="70vh"
                        rounded="lg"
                        class="tab"
                    >
                        <AboutVuetify></AboutVuetify>
                    </v-sheet>

                    <v-sheet
                        v-if="tab_id == 1"
                        min-height="70vh"
                        rounded="lg"
                        class="tab mb-8"
                    >
                        <CssAnimation></CssAnimation>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.sandbox-container {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #000;
}

.icon-chevron-top {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 100px;
    transition: all 0.3s ease;

    &:after {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 24px;
        height: 24px;
        border-bottom: 4px solid;
        border-right: 4px solid;
        color: #000;
        transform: rotate(45deg);
        right: 6px;
        top: 0px;
    }
}
.icon-chevron-top.open {
    transform: rotateZ(180deg);
}
</style>

<script>
import AboutVuetify from '@/components/Sandbox/AboutVuetify'
import CssAnimation from '@/components/Sandbox/CssAnimation.vue'

export default {
    page: 'sandbox',
    components: {
        AboutVuetify,
        CssAnimation,
    },
    data() {
        return {
            tab_id: 0,
            rotate: true,
        }
    },
    methods: {
        changeTab(n) {
            this.tab_id = n
        },
    },
}
</script>
