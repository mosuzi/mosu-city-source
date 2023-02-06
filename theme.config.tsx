import React from 'react'
import { useRouter as useRouter8 } from "next/router"
import { DocsThemeConfig } from 'nextra-theme-docs'

const repository = 'https://github.com/mosuzi/mosu-city-source'

var DEFAULT_LOCALE = "zh"
// var DEFAULT_LOCALE = "en-US"

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
  },
  toc: {
    title: "本文"
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  gitTimestamp({ timestamp }) {
    const { locale = DEFAULT_LOCALE } = useRouter8();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, "最后更新于", "", timestamp.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric"
    }));
  },
}

export default config
