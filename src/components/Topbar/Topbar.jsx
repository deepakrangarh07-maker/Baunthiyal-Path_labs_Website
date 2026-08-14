import "./Topbar.css";

import Logo from "../../assets/Logo_baunthiyal.svg";
import NABL from "../../assets/nabl.png";
import NABH from "../../assets/nabh.png";
import ISO from "../../assets/ISO_9001-2015.svg";

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
			</div>

			<div className="topbar-right">
				<input
					type="text"
					placeholder="Search Tests, Health Packages, Radiology Tests"
				/>
				<button className="search-btn">Search</button>
			</div>
		</header>
	);
}

export default Topbar;
