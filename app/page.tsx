import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Support from "@/components/Support";
import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Office/>
      <Services />
      <Support />
      <FAQ />
      <Footer />
    </>
  );
}
