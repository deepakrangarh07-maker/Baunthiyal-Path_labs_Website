import { useState } from "react";
import {
	FaArrowRight,
	FaChevronLeft,
	FaChevronRight,
	FaFlask,
	FaHome,
} from "react-icons/fa";

import { healthPackages } from "../../data/healthPackages.js";
import "../../styles/Home/HomeHealthPackages.css";

function HomeHealthPackages() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const totalPackages = healthPackages.length;

	const nextSlide = () => {
		if (totalPackages <= 1) return;

		setCurrentIndex((prev) => (prev === totalPackages - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		if (totalPackages <= 1) return;

		setCurrentIndex((prev) => (prev === 0 ? totalPackages - 1 : prev - 1));
	};

	if (!healthPackages.length) {
		return null;
	}

	return (
		<section className="home-health-packages">
			<div className="home-health-packages-container">
				{/* ================= HEADER ================= */}

				<div className="home-health-packages-header">
					<div className="home-health-packages-heading">
						<div className="home-health-packages-label">
							<FaFlask />
							<span>HEALTH PACKAGES</span>
						</div>

						<h2>
							Complete health care,
							<span> made simple.</span>
						</h2>

						<p>
							Choose from our specially designed health packages for convenient
							and comprehensive diagnostic screening.
						</p>
					</div>

					<a href="/health-packages" className="home-health-packages-view-all">
						View All Packages
						<FaArrowRight />
					</a>
				</div>

				{/* ================= SLIDER ================= */}

				<div className="home-health-slider-wrapper">
					<button
						type="button"
						className="home-health-slider-arrow prev"
						onClick={prevSlide}
						disabled={totalPackages <= 1}
						aria-label="Previous package"
					>
						<FaChevronLeft />
					</button>

					<div className="home-health-slider">
						<div
							className="home-health-slider-track"
							style={{
								transform: `translateX(-${currentIndex * 100}%)`,
							}}
						>
							{healthPackages.map((pkg) => (
								<div className="home-health-slide" key={pkg.id}>
									<div className="home-health-card">
										{/* ================= CARD HEADER ================= */}

										<div className="home-health-card-header">
											<div className="home-health-card-icon">
												<FaFlask />
											</div>

											<div className="home-health-card-category">
												{pkg.category}
											</div>
										</div>

										{/* ================= TITLE ================= */}

										<div className="home-health-card-title">
											<span className="home-health-short-name">
												{pkg.shortName}
											</span>

											<h3>{pkg.name}</h3>
										</div>

										{/* ================= PACKAGE INFO ================= */}

										<div className="home-health-card-info">
											<div className="home-health-info-item">
												<span>Parameters</span>

												<strong>{pkg.parameterCount}</strong>
											</div>

											<div className="home-health-info-item">
												<span>Sample</span>

												<strong>{pkg.sampleType}</strong>
											</div>

											<div className="home-health-info-item">
												<span>Report</span>

												<strong>{pkg.tat}</strong>
											</div>
										</div>

										{/* ================= HOME COLLECTION ================= */}

										{pkg.homeCollection && (
											<div className="home-health-home-collection">
												<FaHome />

												<span>Home Sample Collection Available</span>
											</div>
										)}

										{/* ================= PARAMETERS PREVIEW ================= */}

										<div className="home-health-parameters">
											<span className="parameters-label">Includes</span>

											<div className="parameters-list">
												{pkg.parameters?.slice(0, 4).map((parameter, index) => (
													<span key={index}>{parameter}</span>
												))}

												{pkg.parameterCount > 4 && (
													<span className="more-parameters">
														+{pkg.parameterCount - 4} more
													</span>
												)}
											</div>
										</div>

										{/* ================= BOTTOM ================= */}

										<div className="home-health-card-bottom">
											<div className="home-health-price">
												<span>Package Price</span>

												<div>
													<strong>₹{pkg.price.toLocaleString("en-IN")}</strong>

													{pkg.originalPrice && (
														<del>
															₹{pkg.originalPrice.toLocaleString("en-IN")}
														</del>
													)}
												</div>
											</div>

											<a
												href={`/health_package/`}
												className="home-health-card-button"
											>
												View Package
												<FaArrowRight />
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						type="button"
						className="home-health-slider-arrow next"
						onClick={nextSlide}
						disabled={totalPackages <= 1}
						aria-label="Next package"
					>
						<FaChevronRight />
					</button>
				</div>

				{/* ================= DOTS ================= */}

				{totalPackages > 1 && (
					<div className="home-health-slider-dots">
						{healthPackages.map((_, index) => (
							<button
								type="button"
								key={index}
								className={index === currentIndex ? "active" : ""}
								onClick={() => setCurrentIndex(index)}
								aria-label={`Go to package ${index + 1}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default HomeHealthPackages;
