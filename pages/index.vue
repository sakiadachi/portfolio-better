<template>
    <div>
        <div class="pt-8 pl-8 pr-8 pb-16">
            <div class="profile_link black--text">
                <h1 class="xlarge">Saki Adachi</h1>
                <h1 class="">Frontend Developer / Designer Based in Tokyo</h1>
            </div>
            <!-- <p class="my-6">I code and design things.</p> -->
            <Profile></Profile>
        </div>

        <div class="links">
            <v-row no-gutters>
                <v-col>
                    <a
                        href="https://codepen.io/sakiadachi88"
                        target="_blank"
                        class="white--text hov-blue"
                        >codepen</a
                    >

                    <a
                        href="https://dribbble.com/sakiadachi88"
                        target="_blank"
                        class="white--text hov-yellow"
                        >Qiita</a
                    >

                    <a
                        href="https://dribbble.com/sakiadachi88"
                        target="_blank"
                        class="white--text hov-pink"
                        >dribbble</a
                    >

                    <a
                        href="https://coconala.com/users/1790932"
                        target="_blank"
                        class="white--text hov-orange"
                        >coconala</a
                    >
                </v-col>
            </v-row>
        </div>
    </div>
</template>

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
