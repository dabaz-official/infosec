import type { Metadata, Viewport } from 'next'
import { FC, ReactNode } from 'react'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import cn from 'clsx'

import './globals.css'
import './fonts.css'
import DabAZLogo from '@/components/icons/DabAZLogo'
import InfoSecLogo from '@/components/icons/InfoSecLogo'

export const viewport: Viewport = Head.viewport

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s | InfoSec'
  },
  description: '一个关于信息系统安全的在线文档，由 DabAZ 制作和撰写。',
  metadataBase: new URL('https://infosec.dabaz.me'),
  keywords: ['infosec', 'docs', 'dabaz', '信息系统安全', '信息安全', '在线文档'],
  generator: 'Next.js',
  applicationName: 'InfoSec',
  appleWebApp: {
    title: 'InfoSec'
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.svg',
        type: 'image/svg+xml'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-dark.svg',
        type: 'image/svg+xml'
      },
    ]
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://infosec.dabaz.me'
  }
}

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const navbar = (
    <Navbar
      logo={
        <InfoSecLogo
          height="20"
          className={cn(
            "[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]",
            "hover:[mask-position:100%] hover:[transition:mask-position_1s_ease]"
          )}
        />
      }
      projectLink="https://github.com/dabaz-official/infosec"
    />
  )
  const footer = (
    <Footer className="flex-col items-center md:items-start">
      <a
        className="x:focus-visible:nextra-focus flex items-center gap-2"
        target="_blank"
        rel="noreferrer"
        title="DabAZ Homepage (dabaz.me)"
        href="https://dabaz.me"
      >
        Powered by
        <DabAZLogo height="20" />
      </a>
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} DabAZ. 保留所有权利。
      </p>
    </Footer>
  )
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className="antialiased">
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/dabaz-official/infosec/tree/main/docs"
          editLink="在 GitHub 上编辑此页面 →"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
