import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const repository = 'https://github.com/mosuzi/mosu-city-source'

const config: DocsThemeConfig = {
  logo: <span>莫苏城</span>,
  project: {
    link: repository,
  },
  chat: {
    link: 'https://discord.com/channels/1071337275868332122/1071337279035015170',
  },
  docsRepositoryBase: repository,
  footer: {
    text: <span>MIT {new Date().getFullYear()} © Mosu City | Powered by <a href="https://nextra.site" target="_blank">Nextra</a> Docs</span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 莫苏城'
    }
  }
}

export default config
