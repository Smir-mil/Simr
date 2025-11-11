import { useState, useEffect, useRef } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/about");
    }, 300);
  };

  return (
    <div className="home-container">
      {/* Grid Background */}
      <div className="grid-background">
        <div className="grid-lines" />
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Spline Background */}
      <iframe
        src="https://my.spline.design/cloneronhoverlightning-NHFc47KkuhB6j8noifFxZN9t/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="spline-background"
        title="Interactive Background"
      />

      {/* Glass Navigation */}
      <nav className="glass-nav">
        <div className="nav-logo" data-testid="nav-logo">SIMR</div>
        <div className="nav-links">
          <button onClick={() => navigate("/about")} data-testid="nav-about" className="nav-link-btn">
            About
          </button>
          <button onClick={() => navigate("/contact")} data-testid="nav-contact" className="nav-link-btn">
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1 className="main-title" data-testid="main-title">
          AI Automation
          <br />
          Experts
        </h1>
        <p className="main-description" data-testid="main-description">
          We build intelligent automation systems that eliminate repetitive
          tasks, so your team can focus on what drives growth.
        </p>
        <button
          className={`glass-button ${isClicked ? 'clicked' : ''}`}
          onClick={handleButtonClick}
          data-testid="hello-there-button"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-container">
      {/* Grid Background */}
      <div className="grid-background">
        <div className="grid-lines" />
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Glass Navigation */}
      <nav className="glass-nav">
        <div className="nav-logo" onClick={() => navigate("/")} data-testid="nav-logo">
          SIMR
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/about")} data-testid="nav-about" className="nav-link-btn">
            About
          </button>
          <button onClick={() => navigate("/contact")} data-testid="nav-contact" className="nav-link-btn">
            Contact
          </button>
        </div>
      </nav>

      <div className="about-content">
        <section className="about-hero">
          <h1 className="about-main-title" data-testid="about-main-title">
            We automate the work
            <br />
            that drains your time.
          </h1>
        </section>

        <section className="about-intro-section">
          <div className="intro-text" data-testid="about-intro">
            <p className="intro-paragraph">
              At <span className="brand-highlight">SIMR</span>, we build intelligent automation systems that eliminate repetitive tasks — so your team can focus on what truly drives growth. From workflow automation to data processing and AI-powered integrations, we make automation seamless, scalable, and powerful.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <h2 className="section-heading" data-testid="mission-heading">Our Mission</h2>
          <p className="section-text" data-testid="mission-text">
            Our mission is simple: to give businesses back their most valuable resource — time.
          </p>
        </section>

        <section className="approach-section">
          <h2 className="section-heading" data-testid="approach-heading">Our Approach</h2>
          <p className="section-text" data-testid="approach-text">
            We combine cutting-edge AI tools with deep process understanding to design solutions that work for your operations, not against them. Whether you're looking to streamline lead management, automate reports, or integrate multiple platforms, we'll craft a custom automation that fits perfectly into your business.
          </p>
        </section>

        <section className="capabilities-showcase">
          <h2 className="section-heading" data-testid="capabilities-heading">What We Deliver</h2>
          <div className="capabilities-grid">
            <div className="capability-card" data-testid="capability-1">
              <h3 className="capability-title">Workflow Automation</h3>
              <p className="capability-desc">Eliminate manual processes and connect your tools seamlessly</p>
            </div>
            <div className="capability-card" data-testid="capability-2">
              <h3 className="capability-title">AI-Powered Solutions</h3>
              <p className="capability-desc">Leverage intelligent systems for data processing and decision-making</p>
            </div>
            <div className="capability-card" data-testid="capability-3">
              <h3 className="capability-title">Platform Integration</h3>
              <p className="capability-desc">Connect your entire tech stack for unified operations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Grid Background */}
      <div className="grid-background">
        <div className="grid-lines" />
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Glass Navigation */}
      <nav className="glass-nav">
        <div className="nav-logo" onClick={() => navigate("/")} data-testid="nav-logo">
          SIMR
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/about")} data-testid="nav-about" className="nav-link-btn">
            About
          </button>
          <button onClick={() => navigate("/contact")} data-testid="nav-contact" className="nav-link-btn">
            Contact
          </button>
        </div>
      </nav>

      <div className="contact-content">
        <section className="contact-hero">
          <h1 className="contact-main-title" data-testid="contact-title">
            Let's Build Something
            <br />
            Extraordinary
          </h1>
          <p className="contact-subtitle" data-testid="contact-subtitle">
            Ready to transform your business with AI automation? Let's talk.
          </p>
        </section>

        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              data-testid="contact-name-input"
              className="glass-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              data-testid="contact-email-input"
              className="glass-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              placeholder="Tell us about your automation needs..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              data-testid="contact-message-input"
              className="glass-input"
            />
          </div>

          <button
            type="submit"
            className="glass-submit-button"
            data-testid="contact-submit-button"
          >
            Send Message
          </button>

          {submitted && (
            <div className="success-message" data-testid="success-message">
              Thank you! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;