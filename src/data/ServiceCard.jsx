function ServiceCard({ icon, title, tests, description }) {
	return (
		<div className="service-card">
			<div className="service-icon">{icon}</div>

			<h3>{title}</h3>

			<span>{tests}</span>

			<p>{description}</p>

			<button>View More →</button>
		</div>
	);
}

export default ServiceCard;
