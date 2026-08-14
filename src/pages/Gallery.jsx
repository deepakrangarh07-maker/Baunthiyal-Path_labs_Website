
import React, { useState } from "react";
import "../styles/Gallery.css"

import lab1 from "../assets/gallery/lab-1.jpg";
import lab2 from "../assets/gallery/lab-2.jpg";
import lab3 from "../assets/gallery/lab-3.jpg";
import lab4 from "../assets/gallery/lab-4.jpg";
import lab5 from "../assets/gallery/lab-5.jpg";
import lab6 from "../assets/gallery/lab-6.jpg";
import team1 from "../assets/gallery/team/team-1.jpg";
import team2 from "../assets/gallery/team/team-2.jpg";
import team3 from "../assets/gallery/team/team-3.jpg";

import { FaSearchPlus, FaTimes } from "react-icons/fa";

const galleryData = [
	{
		id: 1,
		image: lab1,
		title: "Advanced Laboratory",
		description: "lorem 1adlkfhasdklasdffhadkhak",
		category: "Laboratory",
	},
	{
		id: 2,
		image: lab2,
		title: "Diagnostic Services",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Laboratory",
	},
	{
		id: 3,
		image: lab3,
		title: "Modern Equipment",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Equipment",
	},
	{
		id: 4,
		image: lab4,
		title: "Pathology Laboratory",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Laboratory",
	},
	{
		id: 5,
		image: lab5,
		title: "Imaging Centre",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Radiology",
	},
	{
		id: 6,
		image: lab6,
		title: "camp 2026",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Camp",
	},
	{
		id: 7,
		image: team1,
		title: "Healthcare Team 2026",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Team",
	},
	{
		id: 8,
		image: team2,
		title: "Healthcare Team 2021",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Team",
	},
	{
		id: 9,
		image: team3,
		title: "Healthcare Team 2021",
		description: "lorem 1adlkfhasdklfhadkhak",
		category: "Team",
	},
];

const categories = [
    "All",
	"Camp",
    "Laboratory",
    "Radiology",
    "Equipment",
    "Team",
	
];

function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages =
        activeCategory === "All"
            ? galleryData
            : galleryData.filter(
                  (item) => item.category === activeCategory
              );

    return (
			<main className="gallery-page">
				{/* =========================
                HERO
            ========================= */}

				<section className="gallery-hero">
					<div className="gallery-hero-content">
						<span className="gallery-tag">OUR GALLERY</span>

						<h1>
							Inside <span>Baunthiyal Path Labs</span>
						</h1>

						<p>
							Explore our laboratories, advanced diagnostic equipment, imaging
							facilities and dedicated healthcare team.
						</p>
					</div>
				</section>

				{/* =========================
                GALLERY SECTION
            ========================= */}

				<section className="gallery-section">
					<div className="gallery-heading">
						<span>OUR CENTRE</span>

						<h2>
							Explore Our <strong>Facilities</strong>
						</h2>

						<p>
							A closer look at our diagnostic facilities, technology and
							healthcare environment.
						</p>
					</div>

					{/* =========================
                    FILTER BUTTONS
                ========================= */}

					<div className="gallery-filters">
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

					{/* =========================
                    IMAGE GRID
                ========================= */}

					<div className="gallery-grid">
						{filteredImages.map((item) => (
							<article
								className="gallery-card"
								key={item.id}
								onClick={() => setSelectedImage(item)}
							>
								<div className="gallery-image">
									<img src={item.image} alt={item.title} />

									<div className="gallery-overlay">
										<div className="gallery-zoom">
											<FaSearchPlus />
										</div>

										<div>
											<small>{item.category}</small>

											<h3>{item.title}</h3>
											<p>{item.description}</p>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* =========================
                IMAGE POPUP
            ========================= */}

				{selectedImage && (
					<div className="gallery-modal" onClick={() => setSelectedImage(null)}>
						<button
							className="gallery-close"
							onClick={() => setSelectedImage(null)}
						>
							<FaTimes />
						</button>

						<div
							className="gallery-modal-content"
							onClick={(e) => e.stopPropagation()}
						>
							<img src={selectedImage.image} alt={selectedImage.title} />

							<div className="gallery-modal-info">
								<span>{selectedImage.category}</span>

								<h3>{selectedImage.title}</h3>
								<p>{selectedImage.description}</p>
							</div>
						</div>
					</div>
				)}
			</main>
		);
}

export default Gallery;