const WP_API = 'https://cms.ekkleon.com/wp-json/wp/v2'
const REVALIDATE = 30

async function safeFetch(url, fallback) {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE } })
    if (!res.ok) return fallback
    return await res.json()
  } catch {
    return fallback
  }
}

export async function getPages() {
  return safeFetch(`${WP_API}/pages?_embed`, [])
}

export async function getPageBySlug(slug) {
  const pages = await safeFetch(`${WP_API}/pages?slug=${slug}&_embed`, [])
  return pages[0]
}

export async function getPosts() {
  return safeFetch(`${WP_API}/posts?_embed`, [])
}

export async function getSiteInfo() {
  return safeFetch('https://cms.ekkleon.com/wp-json', {})
}

export async function getHomepage() {
  const pages = await safeFetch(`${WP_API}/pages?slug=home&acf_format=standard&_fields=acf,title,modified`, [])
  return pages[0]
}

export async function getServices() {
  return safeFetch(`${WP_API}/service?acf_format=standard&_fields=id,slug,title,content,acf,modified`, [])
}

export async function getServiceBySlug(slug) {
  const services = await safeFetch(`${WP_API}/service?slug=${slug}&acf_format=standard&_fields=id,slug,title,content,acf,modified`, [])
  return services[0]
}

export async function getProcessSteps() {
  return safeFetch(`${WP_API}/process_step?_fields=title,content`, [])
}
