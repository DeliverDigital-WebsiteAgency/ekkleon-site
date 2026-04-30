import { getSiteInfo, getHomepage, getServices, getProcessSteps } from '@/lib/wordpress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Vision from './components/Vision'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default async function Home() {
  const siteInfo = await getSiteInfo()
  const homepage = await getHomepage()
  const acf = homepage?.acf || {}
  const services = await getServices()
  const processSteps = await getProcessSteps()

  return (
    <main>
      <Nav siteName={siteInfo.name} />
      <Hero acf={acf} />
      <TrustBar />
      <Services services={services} />
      <Process steps={processSteps} />
      <About acf={acf} />
      <Vision />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}