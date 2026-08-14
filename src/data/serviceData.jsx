import {
	FaFlask,
	FaTint,
	FaMicroscope,
	FaBacteria,
	FaDna,
	FaVial,
	FaXRay,
	FaHeartbeat,
} from "react-icons/fa";

const services = [
	{
		id: 1,
		icon: <FaFlask />,
		title: "Biochemistry",
		tests: "45+ Tests",
		description: "Blood Sugar, LFT, KFT, Lipid Profile",
	},
	{
		id: 2,
		icon: <FaTint />,
		title: "Hematology",
		tests: "30+ Tests",
		description: "CBC, ESR, Blood Group, Platelet Count",
	},
	{
		id: 3,
		icon: <FaMicroscope />,
		title: "Clinical Pathology",
		tests: "20+ Tests",
		description: "Urine, Stool & Body Fluid Analysis",
	},
	{
		id: 4,
		icon: <FaBacteria />,
		title: "Microbiology",
		tests: "25+ Tests",
		description: "Culture & Sensitivity Tests",
	},
	{
		id: 5,
		icon: <FaDna />,
		title: "Immunology",
		tests: "15+ Tests",
		description: "Hormone & Immunity Testing",
	},
	{
		id: 6,
		icon: <FaVial />,
		title: "Histopathology",
		tests: "18+ Tests",
		description: "Biopsy & Tissue Examination",
	},
	{
		id: 7,
		icon: <FaXRay />,
		title: "Radiology",
		tests: "X-Ray / USG",
		description: "Digital Imaging Services",
	},
	{
		id: 8,
		icon: <FaHeartbeat />,
		title: "Cardiology",
		tests: "ECG",
		description: "Heart Diagnostic Services",
	},
];

export default services;
