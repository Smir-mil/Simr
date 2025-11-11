import { useState, useEffect, useRef } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/about");
    }, 300);
  };

  return (
    <div className="home-container">
      <iframe
        src="https://my.spline.design/cloneronhoverlightning-NHFc47KkuhB6j8noifFxZN9t/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="spline-background"
        title="Interactive Background"
      />
      <div className="home-content">
        <h1 className="main-title" data-testid="main-title">
          AI Automation Experts
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
          Hello There!
        </button>
      </div>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  const [animationStep, setAnimationStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && animationStep === 0) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => observer.disconnect();
  }, [animationStep]);

  const startAnimation = () => {
    const steps = [
      { step: 1, delay: 500 },
      { step: 2, delay: 2000 },
      { step: 3, delay: 3500 },
      { step: 4, delay: 5000 },
      { step: 5, delay: 6500 },
      { step: 6, delay: 8000 },
      { step: 7, delay: 9500 },
    ];

    steps.forEach(({ step, delay }) => {
      setTimeout(() => setAnimationStep(step), delay);
    });

    setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, 10000);
  };

  const bookedDates = [
    new Date(2025, 0, 3),
    new Date(2025, 0, 7),
    new Date(2025, 0, 12),
    new Date(2025, 0, 18),
  ];

  const isDateBooked = (date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="about-container">
      <nav className="nav-bar">
        <div className="logo" onClick={() => navigate("/")}>
          AI Automation Experts
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/about")} data-testid="nav-about">
            About
          </button>
          <button onClick={() => navigate("/contact")} data-testid="nav-contact">
            Contact
          </button>
        </div>
      </nav>

      <section className="about-section intro-section">
        <h2 className="section-title" data-testid="about-intro-title">
          What We Do
        </h2>
        <p className="section-text" data-testid="about-intro-text">
          We specialize in creating custom AI automation solutions that
          transform how businesses operate. From intelligent chatbots that
          handle customer inquiries 24/7 to automated workflow systems that
          eliminate manual data entry, our solutions are designed to save time
          and reduce operational costs.
        </p>
      </section>

      <section className="about-section capabilities-section">
        <h2 className="section-title" data-testid="capabilities-title">
          Our Impact
        </h2>
        <div className="capabilities-grid">
          <div className="capability-card" data-testid="capability-hours">
            <div className="capability-number">1,200+</div>
            <div className="capability-label">Hours Saved Monthly</div>
          </div>
          <div className="capability-card" data-testid="capability-tasks">
            <div className="capability-number">85%</div>
            <div className="capability-label">Task Automation Rate</div>
          </div>
          <div className="capability-card" data-testid="capability-clients">
            <div className="capability-number">50+</div>
            <div className="capability-label">Happy Clients</div>
          </div>
        </div>
      </section>

      <section className="about-section demo-section" ref={animationRef}>
        <h2 className="section-title" data-testid="demo-title">
          See AI Automation in Action
        </h2>
        <div className="demo-container" data-testid="demo-container">
          <div className="chat-interface">
            {animationStep >= 1 && (
              <div className="message customer-message fade-in" data-testid="message-1">
                <div className="message-bubble">How much is this?</div>
              </div>
            )}
            {animationStep >= 2 && (
              <div className="message assistant-message fade-in" data-testid="message-2">
                <div className="message-bubble">₹ 2,499</div>
              </div>
            )}
            {animationStep >= 3 && (
              <div className="message customer-message fade-in" data-testid="message-3">
                <div className="message-bubble">
                  Can you tell me the location? Maybe schedule an appointment?
                </div>
              </div>
            )}
            {animationStep >= 4 && (
              <div className="message assistant-message fade-in" data-testid="message-4">
                <div className="message-bubble">
                  Sure! Please select a date from the calendar below:
                </div>
              </div>
            )}
            {animationStep >= 5 && (
              <div className="calendar-container fade-in" data-testid="calendar-container">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    if (date && !isDateBooked(date)) {
                      setSelectedDate(date);
                      setAnimationStep(6);
                    }
                  }}
                  disabled={(date) => isDateBooked(date) || date < new Date()}
                  className="demo-calendar"
                  defaultMonth={new Date(2025, 0, 1)}
                />
              </div>
            )}
            {animationStep >= 6 && selectedDate && (
              <div className="message assistant-message fade-in" data-testid="message-5">
                <div className="message-bubble">
                  Sure, Your Appointment is Scheduled for{" "}
                  {selectedDate.getDate()} January and Other details will be sent
                  to your Mail!
                </div>
              </div>
            )}
          </div>
          {showPopup && (
            <div className="success-popup" data-testid="success-popup">
              <div className="popup-content">
                <div className="popup-text">Get Fast, Get Faster</div>
              </div>
            </div>
          )}
        </div>
      </section>
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
      <nav className="nav-bar">
        <div className="logo" onClick={() => navigate("/")}>
          AI Automation Experts
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/about")} data-testid="nav-about">
            About
          </button>
          <button onClick={() => navigate("/contact")} data-testid="nav-contact">
            Contact
          </button>
        </div>
      </nav>

      <section className="contact-section">
        <h2 className="section-title" data-testid="contact-title">
          Get in Touch
        </h2>
        <p className="contact-subtitle" data-testid="contact-subtitle">
          Ready to transform your business with AI automation? Let's talk.
        </p>

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
            />
          </div>

          <Button
            type="submit"
            className="submit-button"
            data-testid="contact-submit-button"
          >
            Send Message
          </Button>

          {submitted && (
            <div className="success-message" data-testid="success-message">
              Thank you! We'll get back to you soon.
            </div>
          )}
        </form>
      </section>
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