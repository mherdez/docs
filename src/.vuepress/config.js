module.exports = {

  title: 'Programación Web',
  description: 'Contenido digital de la asignatura Programación Web',

  themeConfig: {

    nav: [
      /*
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
      */
    ],
    sidebar: [
      '/',
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
