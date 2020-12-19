<template>
    <v-container>
        <Anime></Anime>

        <div class="pa-5">
            <h1 style="color: salmon">Hi there,</h1>
            <h1 style="normal; color: salmon">
                I am Saki, a front-end developer.
            </h1>
            <p>こんにちは、フロンエンドデベロッパーのサキです。</p>
            <Profile></Profile>
        </div>

        <!-- <div class="d-flex" style="border: 1px solid #333">
            <div
                style="width: 50%; padding: 1rem; border-right: 1px solid #333"
            >
                <h1 class="">Project</h1>
                <p>I Design And Code.</p>
            </div>
            <div style="width: 50%">
                <img
                    src="@/assets/img/skateboard.png"
                    style="width: 100%; heigh"
                />
            </div>
        </div>
        <div
            style="
                with: 100%;
                border-bottom: 1px solid #333;
                padding: 1rem 0;
                background: orange;
            "
            class="text-centered"
        >
            <p>I am currently available for freelance work. Contact here.</p>
        </div> -->
        <!--
        <div class="d-flex" style="border: 1px solid #333">
            <div
                style="width: 50%; padding: 1rem; border-right: 1px solid #333"
            >
                <h1 class="">Project</h1>
                <p>I Design And Code.</p>
            </div>
            <div style="width: 50%">
                <img
                    src="@/assets/img/skateboard.png"
                    style="width: 100%; height: "
                />
            </div>
        </div> -->
        <!-- <Lists></Lists> -->
    </v-container>
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
