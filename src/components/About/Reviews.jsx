import "../../styles/About/Reviews.css";

import { useEffect, useState } from "react";

import {
	FaStar,
	FaChevronLeft,
	FaChevronRight,
	FaGoogle,
	// FaQuoteLeft,
} from "react-icons/fa";

import { reviews } from "../../data/Reviews";

function Reviews() {
	const [current, setCurrent] = useState(0);

	/* =========================================
	   AUTO SLIDER
	========================================= */

	useEffect(() => {
		if (reviews.length <= 1) return;

		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % reviews.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	/* =========================================
	   NEXT REVIEW
	========================================= */

	const nextReview = () => {
		setCurrent((prev) => (prev + 1) % reviews.length);
	};

	/* =========================================
	   PREVIOUS REVIEW
	========================================= */

	const previousReview = () => {
		setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	/* =========================================
	   SAFETY
	========================================= */

	if (!reviews || reviews.length === 0) {
		return null;
	}

	const review = reviews[current];

	return (
		<section className="reviews-section">
			<div className="reviews-container">
				{/* =====================================
				    HEADER
				===================================== */}

				<div className="reviews-header">
					<span className="reviews-tag">
						<FaGoogle />
						PATIENT REVIEWS
					</span>

					<h2>
						What Our
						<span> Patients Say</span>
					</h2>

					<p>
						We are grateful for the trust and support of our patients and
						healthcare community.
					</p>
				</div>

				{/* =====================================
				    GOOGLE SUMMARY
				===================================== */}

				{/* <div className="reviews-summary">
					<div className="google-logo">
						<FaGoogle />
					</div>

					<div className="summary-content">
						<div className="summary-rating">
							<strong>5.0</strong>

							<div className="summary-stars">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>

						<span>Based on patient reviews</span>
					</div>
				</div> */}

				{/* =====================================
				    REVIEW SLIDER
				===================================== */}

				<div className="reviews-slider">
					{/* PREVIOUS */}

					{reviews.length > 1 && (
						<button
							className="reviews-arrow reviews-prev"
							onClick={previousReview}
							aria-label="Previous review"
						>
							<FaChevronLeft />
						</button>
					)}

					{/* REVIEW CARD */}

					<div className="reviews-window">
						<div className="review-card" key={review.id}>
							{/* STARS */}

							<div className="review-stars">
								{Array.from({ length: review.rating }, (_, index) => (
									<FaStar key={index} />
								))}
							</div>

							{/* REVIEW */}

							<p className="review-text">"{review.review}"</p>

							{/* AUTHOR */}

							<div className="review-author">
								<div className="review-avatar">
									{review.name.charAt(0).toUpperCase()}
								</div>

								<div className="review-author-info">
									<h3>{review.name}</h3>

									<span>{review.date}</span>
								</div>
							</div>

							{/* GOOGLE */}

							<div className="review-source">
								<FaGoogle />
								<span>Google Review</span>
							</div>
						</div>
					</div>

					{/* NEXT */}

					{reviews.length > 1 && (
						<button
							className="reviews-arrow reviews-next"
							onClick={nextReview}
							aria-label="Next review"
						>
							<FaChevronRight />
						</button>
					)}
				</div>

				{/* =====================================
				    DOTS
				===================================== */}

				{reviews.length > 1 && (
					<div className="reviews-dots">
						{reviews.map((item, index) => (
							<button
								key={item.id}
								className={current === index ? "active" : ""}
								onClick={() => setCurrent(index)}
								aria-label={`Show review ${index + 1}`}
							/>
						))}
					</div>
				)}

				{/* =====================================
				    GOOGLE BUTTON
				===================================== */}

				<a
					href="https://www.google.com/search?q=Baunthiyal+Path+Labs+%26+Imaging+Centre"
					target="_blank"
					rel="noopener noreferrer"
					className="reviews-google-button"
				>
					<FaGoogle />
					View All Reviews on Google
					<FaChevronRight />
				</a>
			</div>
		</section>
	);
}

export default Reviews;
