export default function sitemap() {
  const baseUrl = 'https://crevato.in';

  const routes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
