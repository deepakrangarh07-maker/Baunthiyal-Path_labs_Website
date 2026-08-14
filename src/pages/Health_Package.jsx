import { useState } from "react";
import { FaFlask, FaArrowRight, FaCalendarCheck, FaHome } from "react-icons/fa";
import { healthPackages } from "../data/healthPackages";
import PackageBookingModal from "../components/Health_Package/PackageBookingModal";
import "../styles/Our_Services/Health_Package.css";


function HealthPackages() {
	const [selectedPackage, setSelectedPackage] = useState(null);

	const categories = [
		"All",
		"Full Body",
		"Women",
		"Senior Citizen",
		"Diabetes",
		"Heart",
		"Thyroid",
		"Nutrition",
	];

	const [activeCategory, setActiveCategory] = useState("All");

	const filteredPackages =
		activeCategory === "All"
			? healthPackages
			: healthPackages.filter((item) => item.category === activeCategory);

	/* =========================================
	   OPEN PACKAGE DETAILS
	========================================= */

	const openPackageDetails = (item) => {
		setSelectedPackage(item);
	};

	/* =========================================
	   CLOSE MODAL
	========================================= */

	const closePackageDetails = () => {
		setSelectedPackage(null);
	};

	return (
		<section className="health-packages-section">
			<div className="health-packages-container">
				{/* =========================================
				    HEADER
				========================================= */}

				<div className="health-packages-header">
					<span className="health-packages-tag">
						<FaFlask />
						HEALTH PACKAGES
					</span>

					<h2>
						Popular Health
						<span> Packages</span>
					</h2>

					<p>
						Comprehensive health checkups designed to help you monitor your
						health with confidence.
					</p>
				</div>

				{/* =========================================
				    CATEGORY FILTER
				========================================= */}

				<div className="health-category-filter">
					{categories.map((category) => (
						<button
							key={category}
							className={activeCategory === category ? "active" : ""}
							onClick={() => setActiveCategory(category)}
						>
							{category}
						</button>
					))}
				</div>

				{/* =========================================
				    PACKAGE GRID
				========================================= */}

				<div className="health-packages-grid">
					{filteredPackages.map((item) => {
						const saving = item.originalPrice - item.price;

						return (
							<div
								className="health-package-card"
								key={item.id}
								/* CLICK ANYWHERE ON CARD */
								onClick={() => openPackageDetails(item)}
								role="button"
								tabIndex={0}
								onKeyDown={(event) => {
									if (event.key === "Enter" || event.key === " ") {
										event.preventDefault();
										openPackageDetails(item);
									}
								}}
							>
								{/* =================================
								    ICON
								================================= */}

								<div className="package-icon">
									<FaFlask />
								</div>

								{/* =================================
								    CATEGORY
								================================= */}

								<span className="package-category">{item.category}</span>

								{/* =================================
								    TITLE
								================================= */}

								<h3>{item.name}</h3>

								<span className="package-short-name" >Home Collection</span>

								{/* =================================
								    DIVIDER
								================================= */}

								<div className="package-divider"></div>

								{/* =================================
								    META
								================================= */}

								<div className="package-meta">
									<span>
										<FaFlask />
										{item.parameterCount}+ Parameters
									</span>

									<span>
										<FaCalendarCheck />
										{item.tat}
									</span>
								</div>

								{/* =================================
								    PRICE
								================================= */}

								<div className="package-price-area">
									<div>
										<del>₹{item.originalPrice}</del>

										<strong>₹{item.price}</strong>
									</div>

									<span className="package-saving">Save ₹{saving}</span>
								</div>

								{/* =================================
								    BUTTONS
								================================= */}

								<div className="package-card-buttons">
									<button
										className="package-details-btn"
										onClick={(event) => {
											event.stopPropagation();
											openPackageDetails(item);
										}}
									>
										View Details
										<FaArrowRight />
									</button>

									<button
										className="package-book-btn"
										onClick={(event) => {
											event.stopPropagation();
											openPackageDetails(item);
										}}
									>
										<FaCalendarCheck />
										Book Now
									</button>
								</div>

								{/* =================================
								    HOME COLLECTION
								================================= */}

								{item.homeCollection && (
									<div className="package-home">
										<FaHome />
										Home Collection Available
									</div>
								)}

								{/* =================================
								    CLICK HINT
								================================= */}

								<span className="package-card-hint">
									Click to view package details
								</span>
							</div>
						);
					})}
				</div>
			</div>

			{/* =========================================
			    PACKAGE DETAILS MODAL
			========================================= */}

			{selectedPackage && (
				<PackageBookingModal
					packageData={selectedPackage}
					onClose={closePackageDetails}
				/>
			)}
		</section>
	);
}

export default HealthPackages;
