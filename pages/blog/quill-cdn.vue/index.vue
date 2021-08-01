<template>
    <div class="" style="height: 100%">
        <article id="blog" class="article-container mx-auto">
            <BlogHeader
                :header="'Quill editorをCDNで使う nuxt.js'"
                :sub-header="'2021.7.30'"
            ></BlogHeader>

            <div id="blog-body" class="blog-body">
                <p>環境はnuxt.jsのssr: true (mode: universal)</p>
                <p>
                    もともとnpmパッケージをプロジェクトにインストールして使っていたのですが、Quill.jsはビルド時に読み込むファイルサイズが大きかったため、CDN経由で使用することに。
                    その際に、SSRでquillをクライアントサイドのみで使用するなど、数点手こずった点があったので、ブログにメモしたいと思います！
                </p>

                <h4 class="mt-6">主な点</h4>
                <ol>
                    <li>
                        <p>
                            コンポーネントでheadで読み込みたい外部のscriptやcssを追加できる
                        </p>
                        <p>
                            （参照URL：<a
                                ref="How to Load External Script in Nuxt App"
                                href="https://irian.to/blogs/how-to-load-external-script-in-nuxt-app/"
                                >How to Load External Script in Nuxt App by Igor
                                Irianto</a
                            >）
                        </p>
                        <pre><code>export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.quilljs.com/1.3.6/quill.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.quilljs.com/1.3.6/quill.snow.css",
        },
      ],
    };
  }
}</code></pre>
                    </li>
                    <li>Quill.jsのコンポーネントを作り、headを追加</li>
                    <li>
                        <p>
                            サーバーサイドで、CDNは読まれていないので、エラーが発生する
                        </p>
                        <p>ReferenceError: Quill is not defined</p>
                    </li>
                </ol>

                <!-- <p>
                    なんでだ、、、headに読み込むことはできているのに、できない？
                    default/layoutの最初のページでdefineしないと、head内のjavascriptソースを読み込む順番が決まっておらず、コンポーネントがマウントした時にquillが読み込めないという問題がありました。
                </p> -->

                <p class="mb-6">
                    解決：components/quillEditorでheadを追加でなく、head追加をpages/index.vueに設置すると、解決しました。
                </p>
            </div>

            <iframe
                src="https://codesandbox.io/embed/quilljs-in-nuxt-using-cdn-81et7?fontsize=14&hidenavigation=1&theme=dark"
                style="
                    width: 100%;
                    height: 500px;
                    border: 0;
                    border-radius: 4px;
                    overflow: hidden;
                "
                title="quill.js in nuxt using CDN"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </article>
    </div>
</template>

<style scoped></style>

<script>
import BlogHeader from '@/components/blog/BlogHeader.vue'

export default {
    page: 'contact',
    components: {
        BlogHeader,
    },
    data() {
        return {}
    },
}
</script>
