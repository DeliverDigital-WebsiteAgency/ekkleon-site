const WP_API = 'https://cms.ekkleon.com/wp-json/wp/v2'

export async function getPages() {
  const res = await fetch(`${WP_API}/pages?_embed`)
  if (!res.ok) throw new Error('Failed to fetch pages')
  return res.json()
}

export async function getPageBySlug(slug) {
  const res = await fetch(`${WP_API}/pages?slug=${slug}&_embed`)
  const pages = await res.json()
  return pages[0]
}

export async function getPosts() {
  const res = await fetch(`${WP_API}/posts?_embed`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function getSiteInfo() {
  const res = await fetch(`https://staging2.ekkleon.com/wp-json`)
  if (!res.ok) throw new Error('Failed to fetch site info')
  return res.json()
}

export async function getHomepage() {
  const res = await fetch(`${WP_API}/pages?slug=home&acf_format=standard&_fields=acf,title`)
  if (!res.ok) throw new Error('Failed to fetch homepage')
  const pages = await res.json()
  return pages[0]
}

export async function getServices() {
  const res = await fetch(`${WP_API}/service?acf_format=standard&_fields=title,content,acf`)
  if (!res.ok) throw new Error('Failed to fetch services')
  return res.json()
}

export async function getProcessSteps() {
  const res = await fetch(`${WP_API}/process_step?_fields=title,content`)
  if (!res.ok) throw new Error('Failed to fetch process steps')
  return res.json()
}