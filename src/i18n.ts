import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'vn',
  fallbackLng: 'vn',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        thankyou: 'Multi-language app'
      }
    },
    vn: {
      translation: {
        thankyou:
          'Trân trọng mời bạn đến chung vui trong ngày hạnh phúc của chúng tôi'
      }
    }
  }
})

export default i18n
