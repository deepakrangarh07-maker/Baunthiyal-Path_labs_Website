import "./Home.css";
import HomeCollection from "../../components/Home/HomeCollection";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import VideoCard from "../../components/VideoCard/VideoCard";
import HomeHealthPackages from "../../components/Home/HomeHealthPackages";
import HowItWorks from "../../components/Home/HowItWorks";

function Home() {
	return (
		<main className="home-page">
			<div className="home-container">
				<section className="hero-section">
					<HeroSlider />

					<VideoCard
						videoId="UzUbxjfgtT4"
						channelName="baunthiyalpathlabs"
						caption="Take a Tour of Our Imaging Centre"
					/>
				</section>
			</div>

			<div>
				<section className="home-container">
					<HomeCollection />
				</section>
			</div>

			
				<HomeHealthPackages />
				<HowItWorks />

			{/* Future Sections */}

			{/* <div className="home-container">
				<section className="health-package-section">
					<HealthPackages />
				</section>
			</div>

			<div className="home-container">
				<section className="popular-test-section">
					<PopularTests />
				</section>
			</div>

			<div className="home-container">
				<section className="radiology-section">
					<RadiologyServices />
				</section>
			</div>

			<div className="home-container">
				<section className="why-us-section">
					<WhyChooseUs />
				</section>
			</div>

			<div className="home-container">
				<section className="testimonial-section">
					<Testimonials />
				</section>
			</div> */}
		</main>
	);
}

export default Home;
