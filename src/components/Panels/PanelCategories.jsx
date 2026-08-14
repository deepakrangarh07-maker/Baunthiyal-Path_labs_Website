// src/components/Panels/PanelCategories.jsx

import { useState } from "react";
import { panelData } from "../../data/panelData";
import PanelModal from "./PanelModal";
import "../../styles/Panels/PanelCategories.css";

function PanelCategories() {
	const [selectedPanel, setSelectedPanel] = useState(null);

	return (
		<section className="pcat-section">
			<div className="container">
				<div className="pcat-heading">
					<span className="pcat-subtitle">PANEL CATEGORIES</span>

					<h2 className="pcat-title">Our Healthcare Partnerships</h2>

					<p className="pcat-description">
						Trusted diagnostic solutions for government, hospitals, insurance
						partners and educational institutions.
					</p>
				</div>

				<div className="pcat-grid">
					{panelData.map((panel) => {
						const Icon = panel.icon;

						return (
							<div
								className="pcat-card"
								key={panel.id}
								onClick={() => setSelectedPanel(panel)}
							>
								<div className="pcat-icon">
									<Icon />
								</div>

								<div className="pcat-content">
									<h3>{panel.title}</h3>

									<p>{panel.desc}</p>

									<button className="pcat-button" type="button">
										Learn More →
									</button>
								</div>
							</div>
						);
					})}
				</div>

				<PanelModal
					panel={selectedPanel}
					onClose={() => setSelectedPanel(null)}
				/>
			</div>
		</section>
	);
}

export default PanelCategories;
