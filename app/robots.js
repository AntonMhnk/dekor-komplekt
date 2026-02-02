export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/api/'],
      },
    ],
    sitemap: 'https://dekor-komplekt.ru/sitemap.xml',
  }
}
