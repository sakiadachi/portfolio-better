<template>
    <v-container>
        <!-- <section class="home-section"> -->
        <div
            id="introduction"
            class="introduction mx-auto d-flex flex-column justify-space-between"
        >
            <div class="profile_link">
                <h1 class="xlarge">Saki Adachi</h1>
                <h3 class="">Frontend Developer & Designer Based in Tokyo</h3>
                <p class="grey--text">I code and design things.</p>
                <Profile></Profile>
            </div>
            <!-- <div class="d-flex justify-end">
                    <div class="links mt-8">
                        <div class="">
                            <a
                                href="https://codepen.io/sakiadachi88"
                                target="_blank"
                                class="black--text"
                                >codepen</a
                            >
                        </div>
                        <div>
                            <a
                                href="https://qiita.com/sakiadachi_88"
                                target="_blank"
                                class="black--text"
                                >Qiita</a
                            >
                        </div>
                        <div>
                            <a
                                href="https://dribbble.com/sakiadachi88"
                                target="_blank"
                                class="black--text"
                                >dribbble</a
                            >
                        </div>
                    </div>
                </div> -->
        </div>
        <!-- </section> -->

        <section class="home-section">
            <h2 class="title-home">WHAT I DO</h2>
            <div class="d-flex justify-space-between flex-wrap">
                <div class="skill-box">
                    <div class="d-flex justify-center mb-2">
                        <v-icon x-large color="amber lighten-2"
                            >mdi-vuejs</v-icon
                        >
                        <v-icon x-large color="amber lighten-2"
                            >mdi-nuxt</v-icon
                        >
                    </div>
                    <h3 class="mb-2">Web Development</h3>
                    <p>
                        Experienced and Skilled in developing web application
                        with Vue.js and nuxt.js
                    </p>
                </div>
                <div class="skill-box">
                    <div class="d-flex justify-center mb-2">
                        <v-icon x-large color="amber lighten-2"
                            >mdi-desktop-mac-dashboard</v-icon
                        >
                    </div>
                    <h3 class="mb-2">Improve User Experience</h3>
                    <p>
                        Implementing and suggesting functions in application for
                        users to have a better experience.
                    </p>
                </div>
                <div class="skill-box">
                    <div class="d-flex justify-center mb-2">
                        <v-icon x-large color="amber lighten-2"
                            >mdi-drawing</v-icon
                        >
                    </div>
                    <h3 class="mb-2">Illustration</h3>
                    <p>
                        I illustrate things for digital platforms, often make an
                        animation too. Using Adobe Illustrator, AfterEffects and
                        Procreate.
                    </p>
                </div>
            </div>

            <div class="d-block mt-10">
                <div class="mb-8">
                    <h3>Freelance Frontend Web Developer</h3>
                    <p class="grey--text text-sm">2020/05 ~</p>
                    <p>Working with a team creating...</p>
                </div>
                <div class="mb-8">
                    <h3>Udacity Frontend Web Developer Nanodegree</h3>
                    <p class="grey--text text-sm">2020/01 ~ 2020/04</p>
                </div>
                <div class="d-flex justify-end">
                    <!-- <v-btn
                        large
                        elevation="0"
                        color="grey darken-4 white--text"
                        flat
                        :ripple="false"
                        >Resume<v-icon right dark>
                            mdi-chevron-right
                        </v-icon></v-btn
                    > -->
                    <a
                        href="https://www.linkedin.com/in/saki-adachi"
                        target="_blank"
                        >Resume on linkedin</a
                    >
                </div>
            </div>
        </section>

        <section class="home-section">
            <h2 id="works" class="title-home">WORKS</h2>
            <div class="d-flex justify-space-between">
                <v-card class="works-card" flat>
                    <v-card class="" max-width="344">
                        <img
                            src="@/assets/img/todolist.png"
                            width="342"
                            height="193"
                            class="mx-0"
                        />
                        <v-card-text>
                            <h2 class="text-h6 primary--text font-weight-bold">
                                Todo list
                            </h2>
                            A simple Todo list app saving on your browser.
                        </v-card-text>
                        <!--
                        <v-card-text>
                            <v-chip class="mr-2" label> Vue.js </v-chip>
                            <v-chip class="mr-2" label> nuxt.js </v-chip>
                            <v-chip class="mr-2" label> database app </v-chip>
                        </v-card-text> -->

                        <v-card-actions>
                            <v-btn
                                color="grey darken-3"
                                text
                                href="/works/todolist"
                            >
                                See More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <div class="works-card--hover">
                        <v-dialog v-model="dialog" width="700">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="red lighten-2"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Click Me
                                </v-btn>
                            </template>

                            <v-card max-width="700">
                                <v-card-title class="">
                                    Todo list
                                </v-card-title>

                                <v-row class="mb-6">
                                    <v-col>
                                        <v-card-text
                                            >シンプルなtodo
                                            listです。localStorageにデータを保存できます。</v-card-text
                                        >
                                        <v-card-text>
                                            <p>使用言語</p>
                                            <div class="d-inline-block">
                                                <v-chip class="ma-1" label>
                                                    HTML
                                                </v-chip>
                                                <v-chip class="ma-1" label>
                                                    Sass
                                                </v-chip>
                                                <v-chip class="ma-1" label>
                                                    nuxt.js
                                                </v-chip>
                                                <v-chip class="ma-1" label>
                                                    Vuetify
                                                </v-chip>
                                                <v-chip class="ma-2" label>
                                                    vuex
                                                </v-chip>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                    <img
                                        src="@/assets/img/todolist.png"
                                        width="300"
                                        class="mx-auto"
                                        style="object-fit: cover"
                                    />
                                </v-row>
                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        href="/works/todolist"
                                    >
                                        See more
                                    </v-btn>
                                    <v-btn text @click="dialog = false"
                                        >close</v-btn
                                    >
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-card>
            </div>
        </section>
        <section class="home-section">
            <h2 id="blog-list" class="title-home">Blog</h2>
            <div class="d-flex-column">
                <a href="/blog/quill-cdn" class="black--text">
                    <v-col
                        cols="12"
                        sm="8"
                        class="amber lighten-2 pa-8 mb-4 mx-auto"
                    >
                        <h3>Quill editorをCDNで使う nuxt.js</h3>
                        <p>2021.7.30</p>
                    </v-col>
                </a>
                <!-- <v-col
                    cols="12"
                    sm="8"
                    class="amber lighten-2 pa-8 mb-4 mx-auto"
                >
                    <h3>Title</h3>
                    <p>Something about the project. Let's talk about it.</p>
                </v-col>
                <v-col
                    cols="12"
                    sm="8"
                    class="amber lighten-2 pa-8 mb-4 mx-auto"
                >
                    <h3>Todo List</h3>
                    <p>
                        Simple todo list web app created with Vue.js and nuxt.js
                    </p>
                </v-col> -->
            </div>
        </section>
    </v-container>
</template>

<style scoped>
.home-section {
    width: 100%;
    height: 100%;
    min-height: 50vh;
}
.works-card .works-card--hover {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
}
.works-card:hover .works-card--hover {
    opacity: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

<script>
import Profile from '@/components/Profile'
// import Projects from '@/components/Projects'

export default {
    components: {
        Profile,
        // Projects,
    },
    data() {
        return {
            overlay: false,
            skills: [
                {
                    title: 'Front end Development',
                    more: 'フロントエンド開発、Webデザイン',
                },
                {
                    title: 'Visual design',
                    more: 'UI/UX デザイン、イラスト制作・グラフィックデザイン',
                },
            ],
            dialog: false,
        }
    },
}
</script>
