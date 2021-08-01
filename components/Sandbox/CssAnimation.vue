<template>
    <div class="pa-4 mx-auto" style="max-width: 800px">
        <div class="mb-10">
            <h1>よく使うCSS animations</h1>
            <p class="mb-6 grey--text lighten2">2021/7/8</p>
            <div class="pa-6 text--center">
                <span
                    class="icon-chevron-top"
                    :class="{ open: rotate }"
                    @click="rotate = !rotate"
                ></span>
            </div>

            <pre><code>&lt;style lang=&quot;scss&quot; scoped&gt;
    .icon-chevron-top {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 40px;
        height: 40px;
        border: 2px solid transparent;
        border-radius: 100px;
        transition: all 0.3s ease;

        &:after {
            content: '';
            display: block;
            box-sizing: border-box;
            position: absolute;
            width: 24px;
            height: 24px;
            border-bottom: 4px solid;
            border-right: 4px solid;
            color: #000;
            transform: rotate(45deg);
            right: 6px;
            top: 0px;
        }
    }
    .icon-chevron-top.open {
        transform: rotateZ(180deg);
    }&lt;/style&gt;</code></pre>
        </div>
    </div>
</template>

<style scoped></style>

<script>
export default {
    name: 'CssAnimation',
    data() {
        return {}
    },
}
</script>
