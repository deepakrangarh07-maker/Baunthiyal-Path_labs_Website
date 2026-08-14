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
	return (
		<section className="whyPartner">
			<div className="container">
				<div className="section-title">
					<span>WHY CHOOSE US</span>
					<h2>Why Partner With Us?</h2>

					<p>
						Delivering trusted pathology and radiology services with technology,
						speed and dedicated healthcare support.
					</p>
				</div>

				{/* Desktop */}

				<div className="partner-grid">
					{cards.map((item, index) => (
						<div className="partner-card" key={index}>
							<div className="partner-icon">{item.icon}</div>

							<h3>{item.title}</h3>

							<p>{item.desc}</p>
						</div>
					))}
				</div>

				{/* Mobile */}

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
					>
						{cards.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="partner-card">
									<div className="partner-icon">{item.icon}</div>

									<h3>{item.title}</h3>

									<p>{item.desc}</p>
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
