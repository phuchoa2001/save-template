import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import messages_en from './en.json'
import messages_vi from './vi.json'

export { messages_en, messages_vi }

const messages = {
  en: messages_en,
  vi: messages_vi
}

export const defaultNS = 'translation'

export const resources = {
  en: {
    translation: messages.en // 'common' is our custom namespace
  },
  vi: {
    translation: messages.vi
  }
}

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'vi', // language to use
  resources,
  defaultNS,
  debug: process.env.NODE_ENV !== 'production',
  fallbackLng: 'vi'
})

export default i18next
