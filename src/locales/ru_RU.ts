// ./locales/ru_RU.ts
import { Locale } from "antd/es/locale";

const ruRU: Locale = {
  locale: "ru",
  Pagination: {
    items_per_page: "/ стр.",
    jump_to: "Перейти",
    jump_to_confirm: "Подтвердить",
    page: "Страница",
    prev_page: "Предыдущая страница",
    next_page: "Следующая страница",
    prev_5: "Предыдущие 5",
    next_5: "Следующие 5",
    prev_3: "Предыдущие 3",
    next_3: "Следующие 3",
  },
  DatePicker: {
    lang: {
      placeholder: "Выберите дату",
      rangePlaceholder: ["Начало", "Конец"],
    },
    timePickerLocale: {
      placeholder: "Выберите время",
    },
  },
  // Add more component translations here if needed
};

export default ruRU;
