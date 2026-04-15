import { whyUsData } from "../../data/data";
import "./whyus.css";

export default function WhyUs() {
  return (
    <section className="whyus" id="whyus">
      <div className="whyus-container">
        <div className="whyus-header">
          <h2>Why Us</h2>
        </div>

        <div className="whyus-grid">
          {whyUsData.map((item) => (
            <div className="whyus-card" key={item.id}>
              <div className="whyus-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}