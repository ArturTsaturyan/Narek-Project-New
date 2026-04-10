import "../../App.css";
import WhoWereAre from "./WhoWereAre.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-img">
          <img src={WhoWereAre} alt="Who We Are" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            OverSea Solutions is a leading web design and software development
            company with a big pool of software developers accessible for
            dedicated, fixed-cost projects.
          </p>

          <p>
            We provide only high quality services with an individual approach to
            each project. Projects created by us work and bring pleasant
            benefits to your business.
          </p>

          <p>
            We consult, design, and implement proactive web, mobile, and custom
            software solutions that drive innovation and generate digital
            success!
          </p>
        </div>
      </div>
    </section>
  );
}