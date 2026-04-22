import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  ExtraServices,
  Billing,
  CardDeal,
  Showcase,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import Marquee from "./components/Marquee";
import Process from "./components/Process";
import Contact from "./components/Contact";

/* Centered container — tighter padding */
const Container = ({ children, className = "" }) => (
  <div className={`max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

const App = () => (
  <div className="w-full overflow-hidden relative" style={{ background: "var(--bg)" }}>
    {/* Fixed full-width Navbar */}
    <div className="fixed top-0 left-0 right-0 z-50" style={{ background: "var(--nav-bg)" }}>
      <Container>
        <Navbar />
      </Container>
    </div>

    {/* Hero */}
    <div className="pt-[100px] grid-bg">
      <Container>
        <Hero />
      </Container>
    </div>

    {/* Stats */}
    <Container>
      <Stats />
    </Container>

    {/* Marquee — full-width */}
    <Marquee />

    <Container>
      <Business />
    </Container>

    <Container>
      <Process />
    </Container>

    <Container>
      <Showcase />
    </Container>

    <Container>
      <ExtraServices />
    </Container>

    <Container>
      <Billing />
    </Container>

    <Container>
      <CardDeal />
    </Container>

    <Container>
      <Testimonials />
      <Clients />
    </Container>

    <Container>
      <CTA />
    </Container>

    {/* Contact — full-width */}
    <Contact />

    {/* Footer — colored bg */}
    <div style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--footer-border)" }}>
      <Container>
        <Footer />
      </Container>
    </div>
  </div>
);

export default App;
