import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
  //     <a href="https://kanari.network" target="_blank">
  //       🎉 https://kanari.network →
  //     </a>
  //   )
  // },
  logo: (
    <>
      <img src="../icon.png" alt="Kanari Network Logo" style={{ width: '40px', height: '40px' }} />
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
    text: (
      <span className="text-sm text-white sm:text-center dark:text-gray-400">
        © 2024{' '}
        <a href="https://kanari.network" className="hover:underline">
          Kanari Network™
        </a>
        . All Rights Reserved.
      </span>
    )
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
