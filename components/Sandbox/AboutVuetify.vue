<template>
    <div class="pa-4">
        <h1>&#x1f52e;コンポーネントのSass variableを変更する【Vuetify】</h1>
        <p class="mb-6 grey--text lighten2">2021.8.1</p>

        <v-card elevation="4" class="" width="360">
            <v-card-title>カードタイトル</v-card-title>
            <v-card-text>
                カードのテキスト、カードのテキストカードのテキスト
                カードのテキストカードのテキストカードのテキスト
            </v-card-text>
        </v-card>

        <p class="mt-6">
            Vuetifyの公式ドキュメントの、それぞれのコンポーネントのapiページで、Sass
            variablesが確認できます。求める値を指定し、コンポーネントのsass読み込み、再設定できます。
        </p>
        <p class="mb-6">
            例）<a href="https://vuetifyjs.com/en/api/v-card/" target="_blank"
                >v-card api</a
            >
        </p>

        <pre><code>&lt;style lang=&quot;scss&quot; scoped&gt;
        $card-border-radius: 0.25rem;
        $card-title-font-size: 2rem;
        $card-text-font-size: 1.25rem;
        @import '~vuetify/src/components/VCard/VCard.sass';
    &lt;/style&gt;
    </code></pre>
    </div>
</template>

<style lang="scss" scoped>
$card-border-radius: 0.25rem;
$card-title-font-size: 2rem;
$card-text-font-size: 1.25rem;
@import '~vuetify/src/components/VCard/VCard.sass';
</style>

<script>
export default {
    name: 'AboutVuetify',
    data() {
        return {}
    },
}
</script>
