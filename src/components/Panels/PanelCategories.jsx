import { useState } from "react";
import { FaArrowRight, FaRotateLeft } from "react-icons/fa6";

import { panelData } from "../../data/panelData";
import "../../styles/Panels/PanelCategories.css";

function PanelCategories() {
	const [flippedCard, setFlippedCard] = useState(null);

	const handleFlip = (id) => {
		setFlippedCard((current) => (current === id ? null : id));
	};

	const handleKeyDown = (event, id) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleFlip(id);
		}
	};

	return (
		<section className="pcat-section">
			<div className="container">
				{/* ================= HEADING ================= */}

				<div className="pcat-heading">
					{/* <span className="pcat-subtitle">PANEL CATEGORIES</span> */}

					<h2 className="pcat-title">
						Our Healthcare <span>Partnerships</span>
					</h2>

					<p className="pcat-description">
						Trusted diagnostic solutions for government, hospitals, insurance
						partners and educational institutions.
					</p>
				</div>

				{/* ================= CARDS ================= */}

				<div className="pcat-grid">
					{panelData.map((panel) => {
						const Icon = panel.icon;
						const isFlipped = flippedCard === panel.id;

						return (
							<div
								className={`pcat-card-wrapper ${isFlipped ? "is-flipped" : ""}`}
								key={panel.id}
								tabIndex={0}
								role="button"
								aria-label={`${isFlipped ? "Close" : "View"} ${panel.title}`}
								onClick={() => handleFlip(panel.id)}
								onKeyDown={(event) => handleKeyDown(event, panel.id)}
							>
								<div className="pcat-card-inner">
									{/* =================================================
										FRONT
									================================================= */}

									<div className="pcat-card pcat-card-front">
										<div className="pcat-card-number">
											{String(panelData.indexOf(panel) + 1).padStart(2, "0")}
										</div>

										<div className="pcat-icon">
											<Icon />
										</div>

										<div className="pcat-content">
											<h3>{panel.title}</h3>

											<p>{panel.desc}</p>

											<div className="pcat-learn">
												<span>View Details</span>

												<span className="pcat-arrow">
													<FaArrowRight />
												</span>
											</div>
										</div>

										<div className="pcat-card-glow"></div>
									</div>

									{/* =================================================
										BACK
									================================================= */}

									<div className="pcat-card pcat-card-back">
										<div className="pcat-back-top">
											<div className="pcat-back-icon">
												<Icon />
											</div>

											<button
												type="button"
												className="pcat-close"
												onClick={(event) => {
													event.stopPropagation();
													setFlippedCard(null);
												}}
												aria-label="Close panel details"
											>
												<FaRotateLeft />
											</button>
										</div>

										<div className="pcat-back-content">
											{/* <span className="pcat-back-label">PARTNERSHIP</span> */}

											<h4>{panel.title}</h4>

											{/* <p>{panel.desc}</p> */}

											<div className="pcat-divider"></div>

											<ul className="pcat-list">
												{panel.list?.map((item, index) => (
													<li key={index}>
														<span className="pcat-check">✓</span>

														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="pcat-back-footer">
											{/* <span>Baunthiyal Path Labs</span> */}

											{/* <span className="pcat-back-arrow">
												<FaArrowRight />
											</span> */}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default PanelCategories;
