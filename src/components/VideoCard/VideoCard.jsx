import "./VideoCard.css";




function VideoCard({ videoId, channelName, caption }) {
	return (
		<div className="video-card">
			<div className="video-player">
				<iframe
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0`}
					title={caption}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>

			<div className="video-info">
				<span className="live-badge">▶ Video Tour</span>

				<h3>{caption}</h3>

				<p>Official YouTube Channel</p>

				<a
					href={`https://youtube.com/@${channelName}`}
					target="_blank"
					rel="noreferrer"
					className="visit-channel"
				>
					Visit Channel →
				</a>
			</div>
		</div>
	);
}

export default VideoCard;
