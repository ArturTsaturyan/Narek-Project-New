import { useState } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { contactInputs, contactInfo } from "../../data/data";
import contact from "../../assets/contact.png";
import "./contact.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]+$/, "Enter a valid phone number")
    .min(7, "Phone number is too short")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

const initialValues = {
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);

    try {
      await schema.validateAt(name, nextValues);
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
      setSending(true);

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      );

      setSubmitted(true);
      setValues(initialValues);
    } catch (err) {
      if (err.name === "ValidationError") {
        const newErrors = {};
        err.inner.forEach((item) => {
          newErrors[item.path] = item.message;
        });
        setErrors(newErrors);
      } else {
        alert("Message was not sent. Check EmailJS settings.");
      }
    } finally {
      setSending(false);
    }
  };

  const isValid =
    Object.values(values).every((v) => String(v).trim() !== "") &&
    Object.values(errors).every((e) => !e);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-title-wrap">
        <h2 className="contact-title">Contact Us</h2>
      </div>

      <div className="contact-main">
        <div className="contact-map">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Yerevan/babayan/22&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="contact-form-box" onSubmit={handleSubmit}>
          <h3>Leave Your Message</h3>

          {contactInputs.map((item) => (
            <div className="contact-field" key={item.name}>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={values[item.name] || ""}
                onChange={handleChange}
                className={`${errors[item.name] ? "error" : ""} ${values[item.name] ? "filled" : ""
                  }`}
              />
              {errors[item.name] && (
                <span className="field-error">{errors[item.name]}</span>
              )}
            </div>
          ))}

          <div className="contact-field">
            <textarea
              name="message"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              className={`${errors.message ? "error" : ""} ${values.message ? "filled" : ""
                }`}
            />
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid || sending}
            className="contact-submit"
          >
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="contact-info-bar">
        {contactInfo.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="contact-info-item"
            target={item.title === "Address" ? "_blank" : undefined}
            rel={item.title === "Address" ? "noreferrer" : undefined}
          >
            <div className="contact-info-icon">
              <img src={item.icon} alt={item.title} />
            </div>

            <div className="contact-info-text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </a>
        ))}
      </div>

      {submitted && (
        <div
          className="contact-modal-overlay"
          onClick={() => setSubmitted(false)}
        >
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Submitted Successfully</h3>
            <p>Your details have been sent to email.</p>
            <button onClick={() => setSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}