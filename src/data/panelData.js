// data/panelData.js

import {
	FaHospital,
	FaShieldAlt,
	FaSchool,
	FaBuilding,
	FaBriefcaseMedical,
} from "react-icons/fa";

// export const panelData = [
// 	{
// 		id: "government",
// 		title: "Government Panels",
// 		icon: FaBuilding,
// 		desc: "CGHS, ECHS & State Government diagnostic services.",
// 		list: ["CGHS (Radio + Path)", "ECHS (SOON)"],
// 	},

// 	{
// 		id: "hospital",
// 		title: "Hospital Panels",
// 		icon: FaHospital,
// 		desc: "Referral pathology and radiology partnership support.",
// 		list: [
// 			"Baunthiyal Nursing Home",
// 			"Dwarika Clinic",
// 			"Sanjay Orthopedic & Maternity Centre",
// 			"Garg Clinic",
// 			"Sanjul Memorail",
// 		],
// 	},

// 	{
// 		id: "tpa",
// 		title: "Insurance / TPA",
// 		icon: FaShieldAlt,
// 		desc: "Pre-policy and medical examination services.",
// 		list: [
// 			"Bajaj Finserv",
// 			"Care Health",
// 			"Visit Health",
// 		],
// 	},

// 	{
// 		id: "school",
// 		title: "School Health Programs",
// 		icon: FaSchool,
// 		desc: "Annual student health screening and wellness programs.",
// 		list: [
// 			"Doon International School",
// 			"Welham Girls School",
// 			"Neowise Children",
// 		],
// 	},
// ];

export const panelData = [
	{
		id: 1,
		title: "Government Panels",
		desc: "Reliable diagnostic services for government beneficiaries.",
		icon: FaBuilding,
		list: [
			"CGHS Empanelment",
			"CAPF Empanelment",
		],
	},

	{
		id: 2,
		title: "Corporate Partnerships",
		desc: "Diagnostic solutions for corporate organizations.",
		icon: FaBriefcaseMedical,
		list: [
			"Corporate Health Checkups",
			"Employee Health Screening",
			"Home Sample Collection",
			"Digital Reports",
		],
	},

	{
		id: 3,
		title: "Hospital Partnerships",
		desc: "Reliable diagnostic support for hospitals.",
		icon: FaHospital,
		list: [
			"Dwarika Clinics",
			"Ultrasound Services",
			"Sample Collection",
			"Fast Reporting",
		],
	},

	{
		id: 4,
		title: "Insurance & TPA",
		desc: "Diagnostic services supporting insurance and TPA partners.",
		icon: FaShieldAlt,
		list: [
			"Insurance Diagnostics",
			"TPA Support",
			"Pathology Testing",
			"Reliable Reports",
		],
	},
];
