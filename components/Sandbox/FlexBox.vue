<template>
    <div class="pa-4 mx-auto" style="max-width: 800px">
        <div class="mb-10">
            <h2 class="mb-5">✏️ よく使うFlex box その１</h2>
            <p>
                よく使うわりに、CSSでflexを設定した時の、根本的な仕組みを理解していないので、復習します✊
            </p>
            <p class="grey--text text-xs">2021/7/8</p>
        </div>

        <ol class="">
            <li class="mb-6">
                <h4 class="mb-6">
                    それぞれのエレメント内に違う長さの文章があるが、エレメント全体の高さを揃えたいとき
                </h4>

                <div
                    no-gutters
                    class="d-flex justify-center pa-6 grey lighten-3 mb-4"
                >
                    <div class="box">
                        <h3>Box 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

                    <div class="box">
                        <h3>Box 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod.
                        </p>
                    </div>
                    <div class="box">
                        <h3>Box 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <pre><code class="css">
.box {
    flex: 1 1 300px;
}
// flex: "flex-grow", "flex-shrink", "flex-basis"
// flex-shrink: CSSのプロパティで、フレックスアイテムの縮小係数を設定します。
すべてのフレックスアイテムの寸法がフレックスコンテナーよりも大きい場合、
アイテムはflex-shrink の数値に従って縮小して収まります。(参照：MDN)</code></pre>
            </li>

            <li>
                <h4 class="mb-6">
                    それぞれのエレメント内に違う長さの文章があるが、同じ行数で最後を「...」で省略して表示したいとき
                </h4>
                <v-row
                    no-gutters
                    class="justify-center flex-wrap pa-4 grey lighten-3"
                >
                    <v-col class="d-flex flex-column" cols="3">
                        <v-card class="box pa-4" outlined>
                            <h3>Box 1</h3>
                            <p class="line-cramp-two">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </v-card>
                    </v-col>

                    <v-col class="d-flex flex-column mx-4" cols="3">
                        <v-card class="box pa-4" outlined>
                            <h3>Box 2</h3>
                            <p class="line-cramp-two">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod.
                            </p></v-card
                        >
                    </v-col>
                    <v-col class="d-flex flex-column" cols="3">
                        <v-card class="box pa-4" outlined>
                            <h3>Box 3</h3>
                            <p class="line-cramp-two">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </li>
        </ol>

        <h4 class="mb-6">そもそものflex-boxについての理解を深める</h4>

        <p class="mb-4">flex: "flex-grow", "flex-shrink", "flex-basis"</p>
        <ul class="list-bullet">
            <li class="mb-4">
                <p>
                    flex-grow: flex-grow は CSS
                    のプロパティで、フレックスアイテムの主軸方向の寸法のフレックス伸長係数を設定します。
                </p>
            </li>
            <li class="mb-4">
                <p>
                    flex-shrink: CSS
                    のプロパティで、フレックスアイテムの縮小係数を設定します。すべてのフレックスアイテムの寸法がフレックスコンテナーよりも大きい場合、アイテムは
                    flex-shrink の数値に従って縮小して収まります。
                </p>
            </li>
            <li class="mb-4">
                <p>
                    flex-basis: CSS
                    のプロパティで、フレックスアイテムの主要部分の初期の寸法を設定します。
                    box-sizing
                    で設定していない限り、このプロパティはコンテンツボックスの寸法を定義します。
                </p>
            </li>
        </ul>
        <a
            href="https://developer.mozilla.org/ja/docs/Web/CSS/flex"
            target="_blank"
            alt="MDN"
            >MDN</a
        >
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex: 1 1 300px;
    flex-direction: column;
    background: white;
    padding: 1rem;
    border: 1px solid blue;
}
.box img {
    object-fit: cover;
    height: 100px;
    width: 100%;
}
.line-cramp-two {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

pre code {
    border: none !important;
    background-color: none !important;
    font-size: 0.875rem;
    line-height: 1.5;
    letter-spacing: normal;
    word-break: break-all;
    font-family: 'Courier New', Courier, monospace;
}
</style>

<script>
export default {
    name: 'FlexBox',
    data() {
        return {
            items: ['フロントエンド', 'あああ', 'あああ'],
        }
    },
}
</script>
