import "../../styles/Panels/PartnershipProcess.css";

import { processData } from "../../data/processData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function PartnershipProcess() {
	return (
		<section className="pp-section">
			<div className="container">
				<div className="pp-heading">
					{/* <span>HOW IT WORKS</span> */}

					<h2>Partnership Process</h2>

					<p>Join hands with Baunthiyal Path Labs in a few simple steps.</p>
				</div>

				{/* Desktop */}

				<div className="pp-desktop">
					{processData.map((item, index) => {
						const Icon = item.icon;

						return (
							<div className="pp-step" key={item.id}>
								<div className="pp-icon">
									<Icon />
								</div>

								<span className="pp-number">{item.id}</span>

								<h4>{item.title}</h4>

								<p>{item.desc}</p>

								{index !== processData.length - 1 && (
									<div className="pp-line"></div>
								)}
							</div>
						);
					})}
				</div>

				{/* Mobile */}

				<div className="pp-mobile">
					<Swiper
						modules={[Autoplay]}
						slidesPerView={1.2}
						centeredSlides={true}
						spaceBetween={15}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
					>
						{processData.map((item) => {
							const Icon = item.icon;

							return (
								<SwiperSlide key={item.id}>
									<div className="pp-step">
										<div className="pp-icon">
											<Icon />
										</div>

										<span className="pp-number">{item.id}</span>

										<h4>{item.title}</h4>

										<p>{item.desc}</p>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="pp-contact">
					<a href="mailto:care@baunthiyallabs.com" className="pp-btn">
						📧 Email Us
					</a>

					<p>care@baunthiyallabs.com</p>
				</div>
			</div>
		</section>
	);
}

export default PartnershipProcess;
