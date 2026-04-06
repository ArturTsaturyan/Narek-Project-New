import { useEffect, useState } from "react";
import { content } from "./data/data";
import "./App.css";
import Logo from "./abou.png";
import Hero from "./components/hero/hero";


export default function App() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      content.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="" />
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
                  className={`menu-item ${active === item.id ? "active" : ""} ${item.color ? "" : "white"}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Hero />
      {content.map((section) => (
        <section
          id={section.id}
          key={section.id}
          className={`section ${section.color ? "" : ""}`}
        >
          <h1>{section.title}</h1>
          <p>{section.text}</p>
        </section>
      ))}
    </div>
  );
}