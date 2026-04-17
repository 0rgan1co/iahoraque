import type { Metadata } from 'next'
import OrganizationSD from '@/components/structured-data/OrganizationSD'
import ServiceSD from '@/components/structured-data/ServiceSD'
import FaqSD from '@/components/structured-data/FaqSD'
import HowToSD from '@/components/structured-data/HowToSD'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const SITE_URL = 'https://0rgan1co.github.io/iahoraque'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'IAhora qué — Espacios para decidir',
  description:
    'La pregunta que se hacen los CEOs y Founders cuando miran la IA y no saben por dónde empezar. Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia.',
  keywords: [
    'IAhora qué',
    'IA para CEOs',
    'IA para founders',
    'grupos de aprendizaje entre pares',
    'adopción de IA',
    'transformación con IA',
    'comunidad de práctica IA',
    'experimentar con IA',
  ],
  authors: [{ name: 'IAhora qué' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'IAhora qué',
    title: 'IAhora qué — Espacios para decidir',
    description:
      'Compartir para mejorar. Espacios seguros para CEOs y Founders que quieren pasar de las ideas a las acciones con IA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IAhora qué — Espacios para decidir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IAhora qué — Espacios para decidir',
    description:
      'Compartir para mejorar. Espacios seguros para CEOs y Founders que quieren pasar de las ideas a las acciones con IA.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <OrganizationSD />
        <ServiceSD />
        <FaqSD />
        <HowToSD />
        {children}
      </body>
    </html>
  )
}
