import Hero from "../components/Panels/Hero";

import WhyPartner from "../components/Panels/WhyPartner";
import PanelCategories from "../components/Panels/PanelCategories";
import PartnershipProcess from "../components/Panels/PartnershipProcess";
// import Stats from "../components/Panels/Stats";
// import FAQ from "../components/Panels/FAQ";
// import CTA from "../components/Panels/CTA";


function Panels() {
	return (
		<main className="panels-page">
			{/* Hero */}
			<Hero />
			<PanelCategories />
			<WhyPartner />
			<PartnershipProcess />
			{/* <TrustedPartners /> */}
			{/* <TrustedPartners />
			
			<PanelCategories />
			<PartnershipProcess />
			<Stats />
			<FAQ />
			<CTA /> */}
		</main>
	);
}

export default Panels;
