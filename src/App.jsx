import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Panels from "./pages/Panels";
import Contact from "./pages/ContactUs";
import For_Patients from "./pages/For_Patients";
import Our_Services from "./pages/Our_Services";
import Health_Package from "./pages/Health_Package";
import Tests from "./components/OurServices/Tests";
import Gallery from "./pages/Gallery";
import Cart from "./pages/CartPage";
import OnlineBooking from "./pages/OnlineBooking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/TermsConditions";
import StatutoryCompliance from "./pages/StatutoryCompliance";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />

				<Route path="about" element={<About />} />
				<Route path="for_patients" element={<For_Patients />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="health_package" element={<Health_Package />} />
				<Route path="our_services" element={<Our_Services />} />
				<Route path="/our-services/tests" element={<Tests />} />
				<Route path="panels" element={<Panels />} />
				<Route path="careers" element={<Careers />} />
				<Route path="contact" element={<Contact />} />
				<Route path="cart" element={<Cart />} />
				<Route path="online-booking" element={<OnlineBooking />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-conditions" element={<Terms />} />
				<Route path="/statutory-compliance" element={<StatutoryCompliance />} />
			</Route>
		</Routes>
	);
}

export default App;
