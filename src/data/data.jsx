import avatar1 from "../assets/brown.jpg";
import avatar2 from "../assets/jane.png";
import icon1 from "../assets/why1.png";
import icon2 from "../assets/why2.png";
import icon3 from "../assets/why3.png";
import icon4 from "../assets/why4.png";



export const content = [
  {
    id: "home",
    label: "Home",
    color: true
  },
  {
    id: "about",
    label: "About",
    color: true

  },
  {
    id: "services",
    label: "Services",
    color: true

  },
  {
    id: "testimonials",
    label: "Testimonials",
    color: false

  },
  {
    id: "whyus",
    label: "Why Us",
    color: false

  },
  {
    id: "contact",
    label: "Contact Us",
    title: "Get in Touch",
    text: "Reach out to us anytime for collaboration.",
    color: false

  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "JANE BROWN",
    image: avatar1,
    rating: 5,
    text: "Their team showed a very high standard of work in a much faster time, than I expected. High level of professionalism.",
  },
  {
    id: 2,
    name: "JANE BROWN",
    image: avatar2,
    rating: 4,
    text: "Very fast delivery. Very satisfied with your work. I will definitely work with you in the future. Thank you.",
  },
  {
    id: 3,
    name: "JANE BROWN",
    image: avatar1,
    rating: 5,
    text: "Amazing communication and a very responsible team. Everything was done on time and with excellent quality.",
  },
  {
    id: 4,
    name: "JANE BROWN",
    image: avatar2,
    rating: 5,
    text: "Great service and excellent design sense. The final result was exactly what we were looking for.",
  },
];


export const whyUsData = [
  {
    id: 1,
    icon: icon1,
    title: "Best in Development of Digital Products",
  },
  {
    id: 2,
    icon: icon2,
    title: "Fast turnaround and Quality Coding",
  },
  {
    id: 3,
    icon: icon3,
    title: "Modern & Minimalistic Design Solutions",
  },
  {
    id: 4,
    icon: icon4,
    title: "24/7 Online support & Communication",
  },
];

import contact from "../assets/contact.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";



export const contactInfo = [
  {
    icon: contact,
    title: "Address",
    text: "Babayan 22",
    link: "https://www.google.com/maps/search/?api=1&query=Babayan+Street+22+Yerevan",
  },
  {
    icon: email,
    title: "E-mail",
    text: "martirosyannarek844@gmail.com",
    link: "https://mail.google.com/mail/u/1/#search/martirosyannarek844%40gmail.com",
  },
  {
    icon: phone,
    title: "Phone",
    text: "+37491939959",
    link: "tel:+37491939959",
  },
];

export const contactInputs = [
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
];