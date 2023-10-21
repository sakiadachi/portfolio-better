<template>
  <v-card flat>
    <h1 class="pa-4">Clipboard 管理アプリを作る</h1>
    <v-card-subtitle>
      <time :datetime="`${dateTime.valueOf()}`">{{
        dateTime.format('YY/MM/DD')
      }}</time>
    </v-card-subtitle>

    <v-card-text>
      <h3 class="mt-8">#Day1 データベース作成</h3>
      <p>
        <a href="https://www.postgresql.org/">PostgreSQL</a>をHomebrewからインストールする。
      </p>

      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >brew install postgresql@15 
</pre
      >

      <p>PostgreSQLデータベースをスタートする</p>
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >brew services start postgresql@15
</pre
      >

      <p>PostgreSQLデータベースを停止する</p>
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >brew services stop postgresql@15
</pre
      >

      <p>root user作成する</p>
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >psql postgres
</pre
      >
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >CREATE ROLE saki WITH LOGIN PASSWORD 'password';
ALTER ROLE saki CREATEDB;
</pre
      >
<p>ログインする</p>
<pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >\q
psql postgres -U saki;
</pre>
    </v-card-text>

    <v-card-text>
      <h3>#Day2</h3>
<a href="https://postgresweb.com/introduction-to-postgresql">PostgresWeb</a>
<a href="https://www.postgresqltutorial.com/">PostgreSQL Tutorial</a>
      <p>pgAdmin4でテーブル作成</p>
      <p>postgres@15サーバーを再スタート</p>
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >brew services restart postgresql@15
</pre
      >
      <p>データベースにログイン</p>
      <pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >\q
psql postgres -U saki;
</pre>
<p>pgAdmin4でサーバを作成</p>
<p>Database > Query Toolから、CREATE構文でテーブルを作成</p>
<pre
        class="clipboard-app__pre bg-grey-lighten-2 pa-4 rounded mb-8"
        :class="{ 'clipboard-app__pre--mobile': mobile }"
      >
CREATE TABLE account
  (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
  );
CREATE TABLE clipboard
  (
    title VARCHAR ( 50 ) NOT NULL,
    clipboard_text VARCHAR ( 1000 ),
    show_order INT NOT NULL,
    created_user VARCHAR ( 100 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    clipboard_id serial PRIMARY KEY
  );
</pre>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { mobile } = useDisplay()

const dateTime = dayjs('2023/10/20 17:00:00')
</script>
<style lang="scss" scoped>
.clipboard-app {
  &__pre {
    tab-size: 2;
    &--mobile {
      white-space: pre-line;
    }
  }
}
</style>
