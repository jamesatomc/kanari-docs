import React, { useState } from 'react'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { LogoWithChat } from './components/LogoWithChat'



const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Kanari Network Docs',
      additionalLinkTags: [
        {
          rel: 'icon',
          href: '../icon.png',
        },
      ],
    }
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://kanari.network" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>
  //       🎉 Check out the new features on Kanari Network →
  //     </a>
  //   )
  // },
  logo: (
    <LogoWithChat />
  ),
  project: {
    link: 'https://github.com/jamesatomc/kanari-docs/',
  },
  chat: {
    link: 'https://discord.gg/HrPXcfEa9r',
  },
  docsRepositoryBase: 'https://github.com/jamesatomc/kanari-docs/tree/main',

  // Custom footer
  footer: {
    component: () => null,
    text: () => null,
  },

  // Custom sidebar component
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
      return <> {title}</>
    }
  }
}

export default config