import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';

export const metadata = {
  title: 'Crevato — Digital Agency in Bengaluru | Web, App, UI/UX & Branding',
  description: 'We build digital products that grow your business. Web design, mobile apps, UI/UX & branding — everything your brand needs to stand out online. Based in Bengaluru, working worldwide.',
  keywords: 'web design Bengaluru, mobile app development India, UI/UX design, logo design, digital agency, website maintenance, social media management',
  openGraph: {
    title: 'Crevato — Digital Agency in Bengaluru',
    description: 'Web design, mobile apps, UI/UX & branding for growing businesses.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Crevato',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crevato — Digital Agency in Bengaluru',
    description: 'Web design, mobile apps, UI/UX & branding for growing businesses.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@400..700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
