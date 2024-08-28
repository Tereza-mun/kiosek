import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import './style/output.css'
import cz from './locale/cz.json'
import en from './locale/en.json'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'cz',
  availableLocales: ['cz', 'en'],
  fallbackLocale: 'cz',
  messages: {
    cz: cz,
    en: en
  }
})

// app.use(VueRecaptchaPlugin, {
//   v2SiteKey: '6LdZfzAqAAAAAEPRXdfDz0_sRA_A0TevSEzbEmvl',
//   v3SecretKey: '6LdZfzAqAAAAAPaAGVswsHwxrkAk3Bj12CvoJsFz'
//   v3SiteKey: '6LdgEzEqAAAAAEYKoeqoEDLaCfwaatPHtf-mYXXI'
// })
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
