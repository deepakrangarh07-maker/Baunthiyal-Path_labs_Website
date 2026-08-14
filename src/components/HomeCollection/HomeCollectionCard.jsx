import "./HomeCollection.css";

function HomeCollectionCard({ icon: Icon, title, description, button, color }) {
	return (
		<div className="home-card">
			<div className="home-card-icon" style={{ background: color }}>
				<Icon />
			</div>

			<div className="home-card-content">
				<h3>{title}</h3>

				<p>{description}</p>

				<button className="home-card-btn">
					{button}
					<span>→</span>
				</button>
			</div>
		</div>
	);
}

export default HomeCollectionCard;
