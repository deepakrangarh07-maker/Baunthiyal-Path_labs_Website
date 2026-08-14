// src/components/Panels/PanelModal.jsx

import "../../styles/Panels/PanelModal.css";

function PanelModal({ panel, onClose }) {
	if (!panel) return null;

	return (
		<div className="pmodal-overlay" onClick={onClose}>
			<div className="pmodal-container" onClick={(e) => e.stopPropagation()}>
				<div className="pmodal-header">
					<h3 className="pmodal-title">{panel.title}</h3>

					<button className="pmodal-close" onClick={onClose}>
						✕
					</button>
				</div>

				<div className="pmodal-body">
					<ul className="pmodal-list">
						{panel.list.map((item, index) => (
							<li key={index} className="pmodal-item">
								✔ {item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PanelModal;
