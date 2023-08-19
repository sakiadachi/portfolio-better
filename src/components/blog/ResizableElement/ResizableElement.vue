<template>
  <v-card flat>
    <h1 class="pa-4">ドラッグで、カラムのリサイズ【TypeScript】</h1>
    <v-card-subtitle>
      <time :datetime="`${dateTime.valueOf()}`">{{
        dateTime.format('YY/MM/DD')
      }}</time>
    </v-card-subtitle>

    <v-card-text>
      <p>
        エレメントの枠を上下、または左右にドラッグすることで、自由にエレメントの大きさを変える実装を書きたいと思います。
      </p>
      <p>
        縦方向のリサイズに関しては、スマホでの使用感の良さもあり、使ったことのあるUIではないでしょうか。
        Flutterでは、DraggebleScrollableSheetというWidgetがあり、実装が容易です。
      </p>
      <a
        href="https://api.flutter.dev/flutter/widgets/DraggableScrollableSheet-class.html"
        target="_blank"
        >Flutter DraggableScrollableSheet</a
      >

      <p class="mt-8">
        横方向のリサイズに関しては、WebのSlackやBitbucketなどで実装されていますね。UIで常に表示されているメニューの幅を縮め、メインのコンテンツをユーザーが自分の好きな幅に変更できることは、ユーザーの体験の質を向上していると思います。
      </p>

      <h3 class="mt-8">#1 横方向のリサイズ</h3>
      <p>
        ウィンドウの内部の幅から、mouseupイベントが発火されたページ全体からの相対X座標の値を取得する。
      </p>
      <pre
        class="resizable-element__pre bg-grey-lighten-2 pa-4 rounded mt-8"
        :class="{ 'resizable-element__pre--mobile': mobile }"
      >
// React
export default function BoxLeft() {
  // カラムの幅の初期値(px)
  const [menuWidth, setMenuWidth] = useState(150);

  const onMousedown = () => {
    const startDragging = (ev: MouseEvent) => {
      setMenuWidth(ev.clientX);
    };
    const stopDragging = () => {
      document.removeEventListener("mousemove", startDragging);
      document.removeEventListener("mouseup", stopDragging);
    };
    document.addEventListener("mousemove", startDragging);
    document.addEventListener("mouseup", stopDragging);
  };
  ...
}
</pre
      >
      <p class="my-8">
        See more:
        <a
          href="https://github.com/sakiadachi/resizable-elements"
          target="_blank"
          >GitHub Repo</a
        >
      </p>

      <iframe
        style="max-width: 100%"
        width="800"
        height="800"
        src="https://codesandbox.io/p/github/sakiadachi/resizable-elements/?embed=1"
        allowfullscreen
      ></iframe>

      <h3 class="mt-8">#2 縦方向のリサイズ</h3>
      <p>
        ページ全体のから、mouseupイベントが発火された位置の
        ページ全体からの相対Y （垂直）座標を引いた値を取得する。
      </p>
      <pre
        class="resizable-element__pre bg-grey-lighten-2 pa-4 rounded my-8"
        :class="{ 'resizable-element__pre--mobile': mobile }"
      >
// Vue
// 高さの初期値
const height = ref("120px");
const onMousedown = () => {
  const resizableBarHeight = 16 * 2;

  const startDragging = (e: MouseEvent) => {
    const { innerHeight } = window;
    height.value = `${innerHeight - resizableBarHeight - e.pageY}px`;
  };
  const stopDragging = () => {
    document.removeEventListener("mousemove", startDragging);
    document.removeEventListener("mouseup", stopDragging);
  };
  document.addEventListener("mousemove", startDragging);
  document.addEventListener("mouseup", stopDragging);
};
</pre
      >
      <iframe
        style="max-width: 100%"
        width="800"
        height="800"
        src="https://codesandbox.io/p/sandbox/resizable-div-element-zy3g2d?embed=1"
        allowfullscreen
      ></iframe>

      <p>
        このような実装になりました！MouseEvent取得のタイミングがキーになると思いました。
      </p>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { mobile } = useDisplay()

const dateTime = dayjs('2023/07/16 17:00:00')
</script>
<style lang="scss" scoped>
.resizable-element {
  &__pre {
    tab-size: 2;
    &--mobile {
      white-space: pre-line;
    }
  }
}
</style>
