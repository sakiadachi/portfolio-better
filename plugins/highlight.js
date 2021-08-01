import Vue from 'vue'
import VueHighLightJs from 'vue-highlightjs'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import 'highlight.js/styles/agate.css'

Vue.use(VueHighLightJs, {
    languages: {
        javascript,
        css,
        scss,
    },
})
