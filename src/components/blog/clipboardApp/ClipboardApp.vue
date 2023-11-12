<template>
  <v-card flat>
    <h1 class="pa-4">Clipboard 管理アプリを作る</h1>
    <v-card-subtitle>
      <time :datetime="`${dateTime.valueOf()}`">{{
        dateTime.format('YY/MM/DD')
      }}</time>
    </v-card-subtitle>

    <v-card-text>
      <section>
        <h2>アプリの紹介</h2>
        <p>クリップボート管理アプリです。</p>
        <p>
          自分の好きな複数の絵文字を一つのセットにしてよく自分は使用するのですが、それを一覧化して、好きな時に参照またはコピー＆ペーストしたいな、と思ってこのアプリを作りました。
        </p>
        <p>
          例えば、「やばいね🥺💦」のように２つの絵文字を利用したいとき、絵文字使用履歴や変換候補を探すことに時間がかかり、組み合わせのままを利用したいなと思うことがよくあったからです。
        </p>
        <ul class="mt-2 bg-grey-lighten-3 py-2">
          <li>
            Github:
            <a
              href="https://github.com/sakiadachi/emoji-clipboard-app"
              target="_blank"
              >フロントエンド</a
            >
          </li>
          <li>
            Github:
            <a
              href="https://github.com/sakiadachi/clipboard_project"
              target="_blank"
              >バックエンド</a
            >
          </li>
          <li>
            プロダクションリンク:
            <a href="https://joyful-faloodeh-f040f9.netlify.app/"
              >Clipboard App</a
            >
          </li>
        </ul>
      </section>

      <section>
        <h2>使用言語・フレームワーク</h2>
        <ul>
          <li>フロントエンド: Next.js, TypeScript, tailwindCSS</li>
          <li>バックエンド: Django, Django REST Framework</li>
          <li>データベース: SQLite, PostgreSQL</li>
          <li>バックエンドデプロイサービス: Fly.io</li>
          <li>フロントエンドデプロイサービス: Netlify</li>
        </ul>
      </section>

      <section>
        <h2>実装した機能: バックエンド</h2>
        <ul>
          <li>Clipboard Model作成</li>
          <li>ログイン・ログアウト</li>
          <li>ユーザー登録</li>
          <li>CRUD処理</li>
          <li>CSRF認証</li>
        </ul>
      </section>

      <section>
        <h2>実装した機能: フロントエンド</h2>
        <ul>
          <li>ユーザーログイン・ログアウト</li>
          <li>ユーザー登録</li>
          <li>クリップボード登録</li>
          <li>テキストコピー</li>
          <li>クリップボード並び替え機能</li>
        </ul>
      </section>

      <section>
        <h3>機能説明: フォーム</h3>
        <ul>
          <li>
            フォームから新しいクリップボードを登録することができます。タイトルと対象のテキストを入力してください。
          </li>
          <li>
            フォーム上の+または-ボタンをクリックすると、フォームをUI上で閉じたり開いたりできます。
          </li>
        </ul>
        <v-img
          cover
          src="@/assets/blog/ClipboardApp_01.png"
          alt="クリップボードアプリ画像 インデックスページ"
        ></v-img>

        <h3>機能説明: クリップボード一覧</h3>
        <ul>
          <li>クリップボードカードをクリックでコピーすることができます。</li>
          <li>
            クリップボードの「I like
            it!」ボタンをクリックで、表示順を+1することができます。ログインユーザーが登録しているクリップボードは、この表示順の数が大きい順番で表示されます。
          </li>
        </ul>
        <v-img
          cover
          src="@/assets/blog/ClipboardApp_02.png"
          alt="クリップボードアプリ画像 フォームを隠した状態のインデックスページ"
        ></v-img>
      </section>

      <section>
        <p>
          作成期間は約3週間ほどでしたが、Django、Django REST
          Frameworkのチュートリアルを往復するなどして、なんとか完成できました!
        </p>
        <p>
          Djangoや、Django REST
          Framework内の作業はチュートリアルを勉強することで事足りましたが、バックエンドのデプロイとバックエンドのCSRF認証の設定周りは、<a
            href="mailto:hello@justus.pw"
            >詳しい方(夫)</a
          >にお手伝いいただきました。
        </p>

        <p>
          バックエンドの構築ができたので、次はモバイルアプリを作成したいと思っています📱🤩
        </p>
        <p>よろしければ、感想お聞かせください！</p>
      </section>

      <section>
        <h3>参考</h3>
        <ul>
          <li>
            <a
              href="https://www.amazon.co.jp/gp/product/B07XWL8FPM/ref=ppx_yo_dt_b_d_asin_title_351_o00?ie=UTF8&psc=1"
              target="_blank"
              >現場で使える Django REST Framework の教科書[3.2 LTS 対応版］
              (Django の教科書シリーズ)</a
            >
          </li>
          <li>
            <a href="https://www.django-rest-framework.org/" target="_blank"
              >Django REST Framework</a
            >
          </li>
          <li>
            <a href="https://www.djangoproject.com/" target="_blank">Django</a>
          </li>
          <li><a href="https://fly.io/" target="_blank">Fly.io</a></li>
        </ul>
      </section>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'

const dateTime = dayjs('2023/11/12 17:00:00')
</script>
<style lang="scss" scoped>
ul {
  padding: 0 1rem;
}
section {
  margin-bottom: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
}
</style>
