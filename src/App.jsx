import { useEffect, useState } from "react";
import { content } from "./data/data";
import "./App.css";
import Logo from "./abou.png";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import About from "./components/about/about";
import Testimonials from "./components/testimnonials/testimonials";

export default function App() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      content.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 140;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.id;
          }
        }
      });

      setActive(current);
      setShowScrollTop(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const extraSections = content.filter(
    (item) =>
      item.id !== "home" &&
      item.id !== "about" &&
      item.id !== "services"
  );

  return (
    <div className="app">
      <header>
        <nav className="nav">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <button className="burger" onClick={() => setOpen(true)}>
            ☰
          </button>

          <div className={`menu ${open ? "open" : ""}`}>
            <div className="menu-header">
              <button className="close" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            <div className="kk">
              <ul>
                {content.map((item) => (
                  <li
                    key={item.id}
                    className={`menu-item ${active === item.id ? "active" : ""} ${item.color ? "" : "white"
                      }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Hero />
      <About />
      <Services />
      <Testimonials/>

      {extraSections.map((section) => (
        <section id={section.id} key={section.id} className="extra-section">
          <div className="extra-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </section>
      ))}

      <button
        className={`scroll-top ${showScrollTop ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}