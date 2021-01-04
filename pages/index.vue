<template>
    <div>
        <v-container>
            <div class="pa-4 mx-auto">
                <div class="profile_link black--text">
                    <h1 class="xlarge">Saki Adachi</h1>
                    <h1 class="">
                        Frontend Developer / Designer Based in Tokyo
                    </h1>
                </div>
                <!-- <p class="my-6">I code and design things.</p> -->
                <Profile></Profile>
            </div>

            <div class="links mt-8 mx-auto">
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
                        href="https://dribbble.com/sakiadachi88"
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
                <div>
                    <a
                        href="https://coconala.com/users/1790932"
                        target="_blank"
                        class="black--text"
                        >coconala</a
                    >
                </div>
            </div>
        </v-container>
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
