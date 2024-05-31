import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  description: '',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru/' },
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Прочее',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/hywax/plantuml.space/edit/main/docs/:path',
      text: 'Редактировать страницу на GitHub',
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    outline: {
      label: 'На странице',
    },
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Результаты поиска',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено для',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'навигация',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },
        },
      },
    },
    langMenuLabel: 'Язык',
    returnToTopLabel: 'Вернуться к началу',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на темную тему',
  },
})
