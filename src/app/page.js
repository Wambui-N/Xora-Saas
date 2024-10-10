import { Download, Faq, Features, Footer, Header, Hero, Pricing, Testimonials } from "@/Components"

export default function Home() {
  return(
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
   </main>
  )
}