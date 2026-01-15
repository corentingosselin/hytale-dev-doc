import { Banner, Head } from 'nextra/components'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const banner = <Banner storageKey="hytale-docs-banner">Hytale Development Documentation 🎮</Banner>
const navbar = (
  <Navbar
    logo={<b>Hytale Dev Docs</b>}
    projectLink="https://github.com/yourusername/hytale-docs"
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Hytale Community Documentation</Footer>

export const metadata = {
  title: {
    template: '%s – Hytale Dev Docs',
    default: 'Hytale Dev Docs'
  },
  description: 'Community-driven Hytale development documentation'
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/yourusername/hytale-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
