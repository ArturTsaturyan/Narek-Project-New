import { useState, useRef } from "react";
import { testimonialsData } from "../../data/data";
import bg from "../../assets/background.jpg";

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = () => {
        setIndex((prev) =>
            prev + 2 >= testimonialsData.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? testimonialsData.length - 2 : prev - 1
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) next();
        if (diff < -50) prev();
    };

    const visible = [
        testimonialsData[index],
        testimonialsData[(index + 1) % testimonialsData.length],
    ];

    return (
        <section className="testimonials-wrapper" id="testimonials">

            {/* TITLE */}
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>

            {/* SLIDER */}
            <div
                className="testimonials"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img src={bg} className="bg" alt="" />

                <button className="arrow left" onClick={prev}>
                    ‹
                </button>

                <div className="cards">
                    {visible.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="top">
                                <img src={item.image} className="avatar" alt="" />

                                <div>
                                    <h3>{item.name}</h3>

                                    <div className="stars">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className={i < item.rating ? "active" : ""}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p>“{item.text}”</p>
                        </div>
                    ))}
                </div>

                <button className="arrow right" onClick={next}>
                    ›
                </button>
            </div>
        </section>
    );
}