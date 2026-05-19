import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';

export const metadata = {
  title: 'Crevato — Premium Ecommerce & Fintech UX Design Agency',
  description: 'Crevato is a premium digital product design studio powered by AVAQON. We design high-conversion ecommerce interfaces, secure fintech apps, and enterprise SaaS platforms.',
  keywords: 'ecommerce product design agency india, ecommerce ux agency india, fintech ux agency india, saas product design agency, enterprise ux consultancy, ux design studio bengaluru, ai product ux design, angular product design, flutter product design',
  openGraph: {
    title: 'Crevato — Premium Ecommerce & Fintech UX Design Agency',
    description: 'We design high-conversion ecommerce interfaces, secure fintech apps, and enterprise SaaS platforms.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Crevato',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crevato — Premium Ecommerce & Fintech UX Design Agency',
    description: 'We design high-conversion ecommerce interfaces, secure fintech apps, and enterprise SaaS platforms.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              'name': 'Crevato',
              'image': 'https://crevato.in/logo.png',
              'url': 'https://crevato.in',
              'telephone': '+917019440153',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'no 43, KR puram',
                'addressLocality': 'Bengaluru',
                'postalCode': '560049',
                'addressCountry': 'IN'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 12.9716,
                'longitude': 77.5946
              },
              'openingHoursSpecification': {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                'opens': '09:00',
                'closes': '21:00'
              },
              'sameAs': [
                'https://www.linkedin.com/company/122154262/',
                'https://instagram.com/crevato',
                'https://behance.net/crevato'
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
