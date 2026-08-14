import { useState, useEffect } from "react";
import { heroSlides } from "./heroSlides";
import "./HeroSlider.css";

function HeroSlider() {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);

	const slide = heroSlides[current];

	const changeSlide = (nextIndex) => {
		if (nextIndex === current) return;

		setFade(false);

		setTimeout(() => {
			setCurrent(nextIndex);
			setFade(true);
		}, 350);
	};

	const goPrev = () => {
		const prev = current === 0 ? heroSlides.length - 1 : current - 1;

		changeSlide(prev);
	};

	const goNext = () => {
		const next = current === heroSlides.length - 1 ? 0 : current + 1;

		changeSlide(next);
	};

	useEffect(() => {
		const timer = setTimeout(goNext, 5000);

		return () => clearTimeout(timer);
	}, [current]);

	return (
		<div
			className="hero-slider"
			style={{
				backgroundImage: `
					linear-gradient(
						90deg,
						rgba(255,255,255,.90) 0%,
						rgba(255,255,255,.75) 45%,
						rgba(255,255,255,.15) 100%
					),
					url(${slide.background})
				`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			{/* Left Arrow */}
			<button
				className="slider-arrow left"
				onClick={goPrev}
				aria-label="Previous Slide"
			>
				‹
			</button>

			{/* Left Content */}
			<div className={`slider-content ${fade ? "fade-in" : "fade-out"}`}>
				<span className="slider-tag">{slide.tag}</span>

				<h1 className="slider-title">{slide.title}</h1>

				{slide.subtitle && (
					<h2
						style={{
							marginBottom: "12px",
							color: "var(--color-accent)",
							fontWeight: "700",
						}}
					>
						{slide.subtitle}
					</h2>
				)}

				<p className="slider-desc">{slide.desc}</p>

				{slide.primaryBtn && (
					<a href={slide.primaryBtn.link} className="slider-btn">
						{slide.primaryBtn.text} →
					</a>
				)}

				{slide.links?.length > 0 && (
					<div className="slider-links">
						{slide.links.map((link) => (
							<span key={link}>{link} →</span>
						))}
					</div>
				)}
			</div>

			{/* Right Image */}
			<div className={`slider-image-wrap ${fade ? "fade-in" : "fade-out"}`}>
				<div className="slider-glow"></div>

				<img
					src={slide.image}
					alt={slide.tag}
					className="slider-image"
					loading="eager"
					decoding="async"
				/>
			</div>

			{/* Right Arrow */}
			<button
				className="slider-arrow right"
				onClick={goNext}
				aria-label="Next Slide"
			>
				›
			</button>

			{/* Dots */}
			<div className="slider-dots">
				{heroSlides.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === current ? "active" : ""}`}
						onClick={() => changeSlide(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default HeroSlider;
