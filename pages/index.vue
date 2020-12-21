<template>
    <div>
        <Anime></Anime>

        <div class="pa-5" style="">
            <div class="d-flex align-center">
                <h1 style="line-height: 1; margin-right: 1rem">Saki Adachi</h1>
                <Profile></Profile>
            </div>
            <h4 class="m-0">
                A front-end developer / designer based in Tokyo.
            </h4>
            <p style="width: 50%">I code and design things.</p>
            <p style="width: 50%">Blog: here</p>
        </div>

        <div class="pa-8 beige" style="border-bottom: 1px solid #333">
            <h1 class="text-right beige">Skills</h1>
        </div>
        <div class="pa-8" style="border-bottom: 1px solid #333">
            <v-row>
                <v-col>
                    <h3>Front end Deveopment</h3>
                    <p>
                        Using modern framework, I create user-centered products
                        with eyes of designer and developer.
                        <a href="/works">See More</a>
                    </p>
                </v-col>
                <v-col>
                    <h3>Illustration</h3>
                    <p>
                        Explaining your products visually is one of the best way
                        to show your idea. I illustrates and design custom
                        icons, banners and graphic design for web products.
                    </p>
                    <a href="/works">See More</a>
                </v-col>
            </v-row>
        </div>
        <!-- <div class="text-right"><Profile></Profile></div> -->
    </div>
</template>

<script>
import Anime from '@/components/Anime'
import Profile from '@/components/Profile'
// import Lists from '@/components/Lists'

export default {
    components: {
        Anime,
        Profile,
    },
    data() {
        return {
            items: [
                {
                    text: 'ポートフォリオ',
                    disabled: false,
                    href: '/works',
                },
                {
                    text: 'Sandbox',
                    disabled: false,
                    href: '/sandbox',
                },
                {
                    text: 'ブログ',
                    disabled: false,
                    href: '/blog',
                },
            ],
        }
    },
}
</script>
