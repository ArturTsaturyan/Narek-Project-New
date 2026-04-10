import "../../App.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon-box">🎨</div>
          <h3>UI/UX Design</h3>
          <ul>
            <li>• Website UI/UX design</li>
            <li>• UI/UX Design Wireframe</li>
            <li>• Logo Design</li>
            <li>• Email-Templates Design</li>
            <li>• Web-App UI/UX design</li>
            <li>• App UI/UX Design Prototype</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon-box">💻</div>
          <h3>Development</h3>
          <ul>
            <li>• Custom Website Development</li>
            <li>• e-Commerce Development</li>
            <li>• CRM Development</li>
            <li>• CMS Development</li>
            <li>• Website App Development</li>
            <li>• Saas based app Development</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon-box">📊</div>
          <h3>SEO Optimization</h3>
          <ul>
            <li>• Keyword Research & Strategy</li>
            <li>• Link Building</li>
            <li>• Technical SEO</li>
            <li>• Local SEO</li>
            <li>• On-page SEO</li>
            <li>• Off-page SEO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}