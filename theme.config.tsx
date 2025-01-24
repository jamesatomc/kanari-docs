import React, { useState } from 'react'

import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Kanari Network Docs',
      additionalLinkTags: [
        {
          rel: 'icon',
          href: 'https://kanari.network/kariicon1.png',
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
    <>
      <img src="https://kanari.network/kariicon1.png" alt="Kanari Network Logo" style={{ width: '40px', height: '40px' }} />
      <span style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: 500 }}>
        Kanari Network Docs
      </span>
    </>
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