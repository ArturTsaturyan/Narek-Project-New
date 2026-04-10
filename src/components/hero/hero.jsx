import "../../App.css";
import heroImg from "../../assets/Hero.png";

export default function Hero() {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          We convert your ideas
          <br />
          into live successful
          <br />
          projects!
        </h1>

        <p>
          Every step done by our team has the ability to shape a new tomorrow!
          We believe that trust should be the foundation of every cooperation.
        </p>

        <button className="hero-btn" onClick={handleClick}>
          Contact Us
        </button>
      </div>

      <div className="hero-right">
        <div className="hero-bg"></div>
        <img src={heroImg} alt="hero" className="hero-img" />
      </div>
    </section>
  );
}