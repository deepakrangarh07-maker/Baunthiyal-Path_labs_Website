/*
=========================================================
HEALTH PACKAGES DATA

Add / edit packages here.

price        = offer price
originalPrice = actual package price
canBook      = whether booking is available
=========================================================
*/

export const healthPackages = [
	{
  id:1,

  name:"Fever Profile with LFT",

  shortName:"FL",

  category:"Fever & Infection",

  price:1400,

  originalPrice:5000,

  parameterCount:25,

  sampleType:"Blood Sample",

  tat:"Same Day",

  homeCollection:true,

  parameters:[
    "Complete Blood Count",
    "Hemoglobin",
    "Platelet Count",
    "ESR",
    "CRP",
    "SGOT",
    "SGPT",
    "Total Bilirubin",
    "Direct Bilirubin",
    "Indirect Bilirubin",
    "Albumin",
    "Globulin",
    "Creatinine",
    "Urea",
    "Blood Sugar",
    "Sodium",
    "Potassium",
    "Calcium",
    "Vitamin D",
    "Vitamin B12",
    "Iron",
    "Ferritin",
    "Urine Routine",
    "Urine Microscopy",
    "Liver Function Test"
  ]
},

	// {
	// 	id: 2,
	// 	name: "PCOD Advance Profile",
	// 	shortName: "PA",
	// 	category: "Women Health",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"Comprehensive health profile designed to support evaluation of hormonal and metabolic parameters associated with PCOD.",

	// 	includes: [
	// 		"Thyroid Profile",
	// 		"FSH",
	// 		"LH",
	// 		"Prolactin",
	// 		"Testosterone",
	// 		"Blood Sugar",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 3,
	// 	name: "Annual Health + Iron",
	// 	shortName: "AHIU",
	// 	category: "Full Body",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood & Urine",
	// 	tat: "Same Day",

	// 	description:
	// 		"A comprehensive annual health package covering essential blood, urine, iron and general wellness parameters.",

	// 	includes: [
	// 		"Complete Blood Count",
	// 		"Iron Profile",
	// 		"Liver Function Test",
	// 		"Kidney Function Test",
	// 		"Thyroid Profile",
	// 		"Urine Routine",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 4,
	// 	name: "Comprehensive Full Body Checkup",
	// 	shortName: "CFBC",
	// 	category: "Full Body",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood & Urine",
	// 	tat: "Same Day",

	// 	description:
	// 		"Complete preventive health screening package covering major health parameters for routine wellness monitoring.",

	// 	includes: [
	// 		"Complete Blood Count",
	// 		"Liver Function Test",
	// 		"Kidney Function Test",
	// 		"Lipid Profile",
	// 		"Thyroid Profile",
	// 		"Blood Sugar",
	// 		"Urine Routine",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 5,
	// 	name: "Diabetes Care Package",
	// 	shortName: "DCP",
	// 	category: "Diabetes",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"A focused diabetes screening package designed to monitor important blood sugar and metabolic parameters.",

	// 	includes: [
	// 		"Fasting Blood Sugar",
	// 		"Post Meal Blood Sugar",
	// 		"HbA1c",
	// 		"Lipid Profile",
	// 		"Kidney Function Test",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 6,
	// 	name: "Heart Health Checkup",
	// 	shortName: "HHC",
	// 	category: "Heart",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"A preventive cardiac health screening package covering important cholesterol and metabolic parameters.",

	// 	includes: [
	// 		"Lipid Profile",
	// 		"Blood Sugar",
	// 		"Kidney Function Test",
	// 		"Complete Blood Count",
	// 		"Thyroid Profile",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 7,
	// 	name: "Thyroid Complete Profile",
	// 	shortName: "TCP",
	// 	category: "Thyroid",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"Complete thyroid screening package designed to evaluate thyroid hormone levels.",

	// 	includes: ["TSH", "T3", "T4", "Free T3", "Free T4"],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 8,
	// 	name: "Senior Citizen Health Package",
	// 	shortName: "SCHP",
	// 	category: "Senior Citizen",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood & Urine",
	// 	tat: "Same Day",

	// 	description:
	// 		"A preventive health package designed for senior citizens with a focus on essential wellness parameters.",

	// 	includes: [
	// 		"Complete Blood Count",
	// 		"Liver Function Test",
	// 		"Kidney Function Test",
	// 		"Lipid Profile",
	// 		"Thyroid Profile",
	// 		"Blood Sugar",
	// 		"Urine Routine",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 9,
	// 	name: "Women's Wellness Package",
	// 	shortName: "WWP",
	// 	category: "Women",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"A preventive women's wellness package covering important general and hormonal health parameters.",

	// 	includes: [
	// 		"Complete Blood Count",
	// 		"Thyroid Profile",
	// 		"Iron Profile",
	// 		"Vitamin D",
	// 		"Vitamin B12",
	// 		"Blood Sugar",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },

	// {
	// 	id: 10,
	// 	name: "Vitamin & Nutrition Profile",
	// 	shortName: "VNP",
	// 	category: "Nutrition",
	// 	department: "Package Manager",

	// 	price: 1400,
	// 	originalPrice: 5000,

	// 	sampleType: "Blood Sample",
	// 	tat: "Same Day",

	// 	description:
	// 		"A nutritional screening package designed to assess important vitamin and mineral-related parameters.",

	// 	includes: [
	// 		"Vitamin D",
	// 		"Vitamin B12",
	// 		"Iron Profile",
	// 		"Calcium",
	// 		"Magnesium",
	// 	],

	// 	homeCollection: true,
	// 	canBook: true,
	// },
];


