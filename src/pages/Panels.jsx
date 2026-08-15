import Hero from "../components/Panels/Hero";
import WhyPartner from "../components/Panels/WhyPartner";
import PanelCategories from "../components/Panels/PanelCategories";
import PartnershipProcess from "../components/Panels/PartnershipProcess";


function Panels() {
	return (
		<main className="panels-page">
			<Hero />
			<PanelCategories />
			<WhyPartner />
			<PartnershipProcess />
		</main>
	);
}

export default Panels;
