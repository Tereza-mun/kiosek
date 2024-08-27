import './style/output.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import cz from './locale/cz.json'
import en from './locale/en.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

function loadLocaleMessages () {
  const locales = [ { cz: cz}, { en: en}]
  const messages = {};
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  });
  return messages;
}

const i18n = createI18n({
  legacy: false,
  locale: 'cz',
  availableLocales: ['cz', 'en'],
  fallbackLocale: 'cz',
  messages: loadLocaleMessages()
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
