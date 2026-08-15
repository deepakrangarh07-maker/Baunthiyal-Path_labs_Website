import { useEffect, useRef, useState } from "react";

import "../../styles/Panels/WhyPartner.css";

import {
	FaFileMedical,
	FaMotorcycle,
	FaVials,
	FaAward,
	FaTags,
	FaHeadset,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const cards = [
	{
		icon: <FaFileMedical />,
		title: "Fast Reports",
		desc: "Quick turnaround time with accurate reports.",
	},
	{
		icon: <FaMotorcycle />,
		title: "Home Collection",
		desc: "Safe & convenient sample collection.",
	},
	{
		icon: <FaVials />,
		title: "1000+ Tests",
		desc: "Wide range of pathology & radiology tests.",
	},
	{
		icon: <FaAward />,
		title: "NABL Certified",
		desc: "Trusted quality & international standards.",
		highlight: true,
	},
	{
		icon: <FaTags />,
		title: "Special Pricing",
		desc: "Exclusive discounts for partners.",
	},
	{
		icon: <FaHeadset />,
		title: "Dedicated Support",
		desc: "Priority relationship manager support.",
	},
];

function WhyPartner() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				if (entry.isIntersecting) {
					setIsVisible(true);

					// Animation only needs to trigger once.
					observer.unobserve(section);
				}
			},
			{
				threshold: 0.15,
				rootMargin: "0px 0px -50px 0px",
			},
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`whyPartner ${isVisible ? "is-visible" : ""}`}
		>
			<div className="container">
				{/* =====================================================
				    SECTION HEADING
				===================================================== */}

				<div className="section-title">
						<span>WHY CHOOSE US</span>

					<h2>Why Partner With Us?</h2>

					<p>
						Delivering trusted pathology and radiology services with technology,
						speed and dedicated healthcare support.
					</p>
				</div>

				{/* =====================================================
				    DESKTOP / TABLET
				===================================================== */}

				<div className="partner-grid">
					{cards.map((item, index) => (
						<div
							className={`partner-card ${
								item.highlight ? "partner-card-highlight" : ""
							}`}
							key={index}
							style={{
								"--card-delay": `${index * 0.09}s`,
							}}
						>
							<div className="partner-card-inner">
								<div className="partner-icon">{item.icon}</div>

								<h3>{item.title}</h3>

								<p>{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				{/* =====================================================
				    MOBILE
				===================================================== */}

				<div className="partner-mobile">
					<Swiper
						modules={[Autoplay]}
						slidesPerView={1.2}
						spaceBetween={15}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						className="partner-swiper"
					>
						{cards.map((item, index) => (
							<SwiperSlide key={index}>
								<div
									className={`partner-card ${
										item.highlight ? "partner-card-highlight" : ""
									}`}
									style={{
										"--card-delay": `${index * 0.09}s`,
									}}
								>
									<div className="partner-card-inner">
										<div className="partner-icon">{item.icon}</div>

										<h3>{item.title}</h3>

										<p>{item.desc}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default WhyPartner;
