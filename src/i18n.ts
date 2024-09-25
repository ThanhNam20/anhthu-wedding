import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        thankyou: 'joyfully invite you to celebrate their union',
        weddingCeremony: 'Wedding Ceremony',
        friday: 'Friday',
        date: 'Friday, October 25th 2024',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        reception: 'Reception',
        photoTime: 'Photo Time',
        eating: 'Eating',
        ceremony: 'Ceremony',
        speeches: 'Speeches',
        at: 'At',
        des1: `Thu and Charles met in 2019 in Hanoi. Since then, their bond has continued to strengthen through facing challenges together, enjoying wonderful moments, and being true companions in life's journey.`,
        des2: 'It was this that led Charles to propose to Thu on the 23rd of October 2023, in Chiang Mai, Thailand.',
        des3: 'Now, almost exactly a year later, it is time to honor that proposal with a wedding attended by friends and family.',
        des4: 'We look forward to the honor of your presence. We kindly request your RSVP by 30th September 2024',
        des5: 'We Look forward to your Attendance',
        guest: 'Guest',
        partner: 'Partner',
        email: 'Email',
        declines: 'Declines',
        accepts: 'Accepts',
        dressCode: 'Dresscode: Non-white attire preferred',
        des6: 'We look forward to the honor of your presence!',
        submit: 'Submit',
        rsvpSuccess: 'Thank you for your RSVP'
      }
    },
    vn: {
      translation: {
        thankyou:
          'Trân trọng mời bạn đến chung vui trong ngày hạnh phúc của chúng tôi',
        weddingCeremony: 'Lễ thành hôn',
        friday: 'Thứ Sáu',
        date: '25 Tháng 10, 2024',
        days: 'Ngày',
        hours: 'Giờ',
        minutes: 'Phút',
        seconds: 'Giây',
        reception: 'Tiệc chiêu đãi',
        photoTime: 'Chụp Ảnh',
        eating: 'Dùng tiệc',
        ceremony: 'Lễ thành hôn',
        speeches: 'Bài phát biểu',
        at: 'Tại',
        des1: `Thư và Charles gặp nhau vào năm 2019 tại Hà Nội. Kể từ đó, tình cảm của họ ngày càng bền chặt qua những thử thách cùng nhau vượt qua, những khoảnh khắc tuyệt vời và trở thành những người đồng hành thực sự trên hành trình cuộc sống.`,
        des2: 'Chính điều đó đã dẫn đến việc Charles cầu hôn Thư vào ngày 23 tháng 10 năm 2023, tại Chiang Mai, Thái Lan.',
        des3: 'Giờ đây, gần tròn một năm sau, đã đến lúc vinh danh lời cầu hôn ấy bằng một lễ cưới được tổ chức trong sự hiện diện của gia đình và bạn bè.',
        des4: 'Chúng tôi rất mong được đón tiếp sự hiện diện của bạn. Kính mong bạn vui lòng xác nhận tham dự trước ngày 14 tháng 10 năm 2024.',
        des5: 'Chúng tôi mong đợi sự hiện diện của bạn',
        guest: 'Khách mời',
        partner: 'Bạn đồng hành',
        email: 'Email',
        declines: 'Từ Chối',
        accepts: 'Tham dự',
        dressCode: 'Trang phục: Ưu tiên trang phục không màu trắng',
        des6: 'Chúng tôi rất mong được đón tiếp sự hiện diện của bạn!',
        submit: 'Gửi',
        rsvpSuccess: 'Cảm ơn bạn đã gửi xác nhận tham dự'
      }
    }
  }
})

export default i18n
