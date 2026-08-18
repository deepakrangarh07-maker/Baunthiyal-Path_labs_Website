import "./Topbar.css";
import SearchBar from "./SearchBar";
import Logo from "../../assets/Logo_baunthiyal.svg";
import NABL from "../../assets/nabl.png";
import NABH from "../../assets/nabh.png";
import ISO from "../../assets/ISO_9001-2015.svg";
import {
	FaBars,
	FaCartShopping,
	FaPhone,
	FaWhatsapp,
	FaXmark,
} from "react-icons/fa6";
function Topbar() {
	return (
		<header className="topbar">
			<div className="topbar-left">
				<img src={Logo} alt="Baunthiyal Path Labs" className="logo" />

				<div className="certificates">
					<img src={NABL} alt="NABL" />
					<img src={NABH} alt="NABH" />
					<img src={ISO} alt="ISO 9001" />
				</div>

				<div className="topbar-actions">
					<a
						href="tel:+919557069086"
						className="contact-action call-action"
						aria-label="Call Baunthiyal Path Labs"
					>
						<span className="contact-icon">
							<FaPhone />
						</span>

						<span className="contact-content">
							<small>Call Us</small>
							<strong>9557069086</strong>
						</span>
					</a>

					<a
						href="https://wa.me/919557069086"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-action whatsapp-action"
						aria-label="Chat with Baunthiyal Path Labs on WhatsApp"
					>
						<span className="contact-icon">
							<span className="whatsapp-symbol"><FaWhatsapp/></span>
						</span>

						<span className="contact-content">
							<small>WhatsApp</small>
							<strong>Chat With Us</strong>
						</span>
					</a>
				</div>

				<SearchBar />
			</div>
		</header>
	);
}

export default Topbar;
