// data/panelData.js

import { FaHospital, FaShieldAlt, FaSchool, FaBuilding } from "react-icons/fa";

export const panelData = [
	{
		id: "government",
		title: "Government Panels",
		icon: FaBuilding,
		desc: "CGHS, ECHS & State Government diagnostic services.",
		list: ["CGHS (Radio + Path)", "ECHS (SOON)"],
	},

	{
		id: "hospital",
		title: "Hospital Panels",
		icon: FaHospital,
		desc: "Referral pathology and radiology partnership support.",
		list: [
			"Baunthiyal Nursing Home",
			"Dwarika Clinic",
			"Sanjay Orthopedic & Maternity Centre",
			"Garg Clinic",
			"Sanjul Memorail",
		],
	},

	{
		id: "tpa",
		title: "Insurance / TPA",
		icon: FaShieldAlt,
		desc: "Pre-policy and medical examination services.",
		list: [
			"Bajaj Finserv",
			"Care Health",
			"Visit Health",
		],
	},

	{
		id: "school",
		title: "School Health Programs",
		icon: FaSchool,
		desc: "Annual student health screening and wellness programs.",
		list: [
			"Doon International School",
			"Welham Girls School",
			"Neowise Children",
		],
	},
];
