import About from "./_components/About";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Partners from "./_components/Partners";
import Projects from "./_components/Projects";
import Shelters from "./_components/Shelters";
import SupportUs from "./_components/SupportUs";
import Team from "./_components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Shelters />
      <Team />
      <SupportUs />
      <Partners />
      <Footer />
    </>
  );
}
