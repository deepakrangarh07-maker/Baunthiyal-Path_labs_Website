
import HeroSection from "../components/About/HeroSection";
import WhoWeAre from "../components/About/WhoWeAre";
import Founder from "../components/About/Founder";
import Departments from "../components/About/Departments";
import Reviews from "../components/About/Reviews";
import Experts from "../components/About/Experts";


function About() {
	return (
		<main className="about-page">
			<HeroSection />
			<WhoWeAre />
			<Founder />
			<Experts />
			<Departments />
			<Reviews />
		</main>
	);
}

export default About;
