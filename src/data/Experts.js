/* =========================================================
   DOCTORS DATA

   Add future doctors inside this array.

   canBookAppointment:
   true  = Book Appointment button appears
   false = No appointment button
========================================================= */

import Yogendra from "../assets/about/DrYogendraSingh.jpg";
import Shavi from "../assets/about/DrShaviNagpal.jpeg";
import Arjun from "../assets/about/arjun.webp";
import Yashika from "../assets/about/DrMajYashikaBhatia.jpeg";
import Sujay from "../assets/about/DrSujayKumarDas.jpeg";

/* =========================================================
   DOCTORS
========================================================= */

export const doctors = [
	/* =====================================================
	   DOCTOR 1
	===================================================== */

	{
		id: 1,

		image: Yashika,

		name: "Dr. (Maj) Yashika Bhatia",

		designation: "Pathologist",

		experience: "12+ Years Experience",

		qualification: "MBBS, MD Path - Pathology",

		specialization:
			"Clinical Pathology, Laboratory Medicine & Diagnostic Services",

		description:
			"Dr. Yashika Bhatia is an experienced pathologist committed to providing accurate and reliable diagnostic services with a patient-focused approach.",

		canBookAppointment: false,
	},

	/* =====================================================
	   DOCTOR 2
	===================================================== */

	{
		id: 2,

		image: Arjun,

		name: "Dr. Arjun Lal Poptani",

		designation: "Radiologist",

		experience: "14+ Years Experience",

		qualification: "MBBS, DNB - Radiology",

		specialization: "Diagnostic Radiology & Medical Imaging",

		description:
			"Dr. Arjun Lal Poptani is an experienced radiologist providing diagnostic imaging services and helping clinicians make informed healthcare decisions.",

		canBookAppointment: true,
	},

	/* =====================================================
	   DOCTOR 3
	===================================================== */

	{
		id: 3,

		image: Sujay,

		name: "Dr. Sujay Kumar Das",

		designation: "Radiologist",

		experience: "8+ Years Experience",

		qualification: "MBBS, MD - Radiology",

		specialization: "Diagnostic Radiology & Imaging Services",

		description:
			"Dr. Sujay Kumar Das is a healthcare professional focused on providing quality diagnostic imaging services with an emphasis on accurate reporting and patient-centered care.",

		canBookAppointment: true,
	},

	/* =====================================================
	   DOCTOR 4
	===================================================== */

	{
		id: 4,

		image: Yogendra,

		name: "Dr. Yogendra Singh",

		designation: "Cardiologist",

		experience: "8+ Years Experience",

		qualification: "MBBS, MD - Cardiology",

		specialization: "Cardiology & Cardiovascular Diagnostic Services",

		description:
			"Dr. Yogendra Singh is a healthcare professional focused on quality cardiac diagnostic services and patient-centered care.",

		canBookAppointment: true,
	},

	/* =====================================================
	   DOCTOR 5
	===================================================== */

	{
		id: 5,

		image: Shavi,

		name: "Dr. Shavi Nagpal",

		designation: "Consultant Microbiologist",

		experience: "8+ Years Experience",

		qualification: "MBBS, MD - Microbiology",

		specialization: "Clinical Microbiology & Laboratory Diagnostic Services",

		description:
			"Dr. Shavi Nagpal is a consultant microbiologist focused on reliable laboratory investigations, microbiological diagnosis and quality patient care.",

		canBookAppointment: false,
	},
];