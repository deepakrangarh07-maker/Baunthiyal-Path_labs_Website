import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./HomeCollection.css";
import HomeCollectionCard from "./HomeCollectionCard";
import { homeCollectionData } from "./homeCollectionData";

function HomeCollection() {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) =>
			prev === homeCollectionData.length - 1 ? 0 : prev + 1,
		);
	};

	const prevSlide = () => {
		setCurrent((prev) =>
			prev === 0 ? homeCollectionData.length - 1 : prev - 1,
		);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="home-collection">
			<div className="home-heading">
				<span className="section-tag">HOME COLLECTION</span>

				<h2>Book Home Sample Collection</h2>

				<p>
					Fast, safe and reliable sample collection at your doorstep by
					experienced professionals.
				</p>
			</div>

			{/* Desktop */}

			<div className="home-grid">
				{homeCollectionData.map((item) => (
					<HomeCollectionCard key={item.id} {...item} />
				))}
			</div>

			{/* Mobile Slider */}

			<div className="home-slider">
				{/* <button className="slider-nav left" onClick={prevSlide}>
					<FaChevronLeft />
				</button> */}

				<HomeCollectionCard {...homeCollectionData[current]} />

				<button className="slider-nav right" onClick={nextSlide}>
					<FaChevronRight />
				</button>
			</div>

			<div className="home-dots">
				{homeCollectionData.map((_, index) => (
					<span
						key={index}
						onClick={() => setCurrent(index)}
						className={index === current ? "home-dot active" : "home-dot"}
					/>
				))}
			</div>

			<div className="home-btn-wrap">
				<button className="book-home-btn">Book Home Collection</button>
			</div>
		</section>
	);
}

export default HomeCollection;
