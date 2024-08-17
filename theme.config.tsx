import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Kanari Network Docs',
    }
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://kanari.network" target="_blank">
        🎉 https://kanari.network →
      </a>
    )
  },
  logo: (
    <>
      <img src="./icon.png" alt="Kanari Network Logo" style={{ width: '40px', height: '40px' }}/>
      <span style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: 500 }}>
        Kanari Network Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/kanari-network/',
  },
  chat: {
    link: 'https://discord.gg/RKzUr4fK',
  },
  docsRepositoryBase: 'https://github.com/kanari-network/',
  footer: {
    text: 'MIT 2021 © Kanari Network',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'About') {
        return <>❓ {title}</>
      }
      return <>👉 {title}</>
    }
  }
}

export default config
