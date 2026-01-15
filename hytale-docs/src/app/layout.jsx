import { Banner, Head } from 'nextra/components'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const banner = <Banner storageKey="hytale-docs-banner">Hytale Development Documentation 🎮</Banner>
const navbar = (
  <Navbar
    logo={<b>Hytale Dev Docs</b>}
    projectLink="https://github.com/corentingosselin/hytale-dev-doc"
  >
    <a
      href="https://www.paypal.com/donate/?hosted_button_id=RG7M76J5ZDFYW"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        backgroundColor: '#0070ba',
        color: 'white',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        marginRight: '8px'
      }}
    >
      Donate
    </a>
  </Navbar>
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
