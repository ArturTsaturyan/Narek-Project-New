import "./FOOTER.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top-line">
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#services">Our Services</a>
                        <a href="#whyus">Why Us</a>
                        <a href="#contact">Contact Us</a>
                    </div>

                    <div className="footer-socials">
                        <a href="https://www.facebook.com/share/1DoUZ8NWDW/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/nar_222_2?igsh=YmdyZXRqeDl0dHdv&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/narek-martirosyan-24986b3a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom-line">
                    <p>© 2023 OverSea Solutions All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}