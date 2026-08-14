// heroSlides.js

import familyHero from "./images/family-hero.png";
import ctHero from "./images/ct-hero.png";
import xrayHero from "./images/xray-hero.png";
import pathologyHero from "./images/pathology-hero.png";
import ultrasoundHero from "./images/ultrasound-hero.png";
import homeCollectionHero from "./images/home-collection.png";

export const heroSlides = [
	{
		id: 1,

		background: familyHero,

		// tag: "FULL BODY HEALTH PACKAGE",

		title: "Know your health,\ninside out",

		subtitle: "68 Parameters • One Visit",

		desc: "Comprehensive health screening covering diabetes, thyroid, liver function, kidney function, lipid profile and more.",

		primaryBtn: {
			text: "View Health Packages",
			link: "/health-packages",
		},

		secondaryBtn: {
			text: "Book on WhatsApp",
			link: "https://wa.me/919999999999",
		},
	},

	{
		id: 2,

		background: ctHero,

		tag: "CT SCAN",

		title: "Advanced CT Scan\nwith Fast Reporting",

		subtitle: "Low Radiation • High Accuracy",

		desc: "High-resolution CT imaging performed by experienced radiologists with quick and accurate reports.",

		primaryBtn: {
			text: "Book CT Scan",
			link: "/ct-scan",
		},

		secondaryBtn: {
			text: "Call Now",
			link: "tel:+919999999999",
		},
	},

	{
		id: 3,

		background: xrayHero,

		tag: "DIGITAL X-RAY",

		title: "Digital X-Ray\nfor Better Diagnosis",

		subtitle: "Safe • Quick • Reliable",

		desc: "Modern digital X-ray services providing sharp images and faster diagnosis for every patient.",

		primaryBtn: {
			text: "Book X-Ray",
			link: "/xray",
		},

		secondaryBtn: {
			text: "Know More",
			link: "/radiology",
		},
	},

	{
		id: 4,

		background: pathologyHero,

		tag: "PATHOLOGY",

		title: "Accurate Lab Results\nYou Can Trust",

		subtitle: "NABL Standard Testing",

		desc: "Comprehensive pathology testing with modern automated analyzers and expert pathologists.",

		primaryBtn: {
			text: "View Tests",
			link: "/tests",
		},

		secondaryBtn: {
			text: "Book Test",
			link: "/book-test",
		},
	},

	{
		id: 5,

		background: ultrasoundHero,

		tag: "ULTRASOUND",

		title: "Advanced Ultrasound\nfor Every Need",

		subtitle: "Experienced Sonologists",

		desc: "Pregnancy scans, abdomen scans, Doppler studies and complete ultrasound services under one roof.",

		primaryBtn: {
			text: "Book Ultrasound",
			link: "/ultrasound",
		},

		secondaryBtn: {
			text: "View Services",
			link: "/radiology",
		},
	},

	{
		id: 6,

		background: homeCollectionHero,

		tag: "HOME SAMPLE COLLECTION",

		title: "Lab Testing\nAt Your Doorstep",

		subtitle: "Comfort • Safety • Convenience",

		desc: "Book home sample collection online and receive accurate reports digitally without visiting the laboratory.",

		primaryBtn: {
			text: "Book Home Collection",
			link: "/home-collection",
		},

		secondaryBtn: {
			text: "Contact Us",
			link: "/contact",
		},
	},
];
