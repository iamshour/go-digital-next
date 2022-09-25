import img1 from "@images/services/service-1.svg"
import img2 from "@images/services/service-2.svg"
import img3 from "@images/services/service-3.svg"
import img4 from "@images/services/service-4.svg"
import img5 from "@images/services/service-5.svg"
import img6 from "@images/services/service-6.png"
import img7 from "@images/services/service-7.svg"
import img8 from "@images/services/service-8.svg"
import img9 from "@images/services/service-9.svg"
// FIRST PROJ
import Proj1A from "@images/proj-1/img-1.png"
import Proj1B from "@images/proj-1/img-2.png"
import Proj1C from "@images/proj-1/img-3.png"
import Proj1D from "@images/proj-1/img-4.png"
import Proj1E from "@images/proj-1/img-5.png"
import Proj1F from "@images/proj-1/img-6.png"
import Proj1G from "@images/proj-1/img-7.png"
import Proj1H from "@images/proj-1/img-8.png"
// SECOND
import Proj2A from "@images/proj-2/img-1.png"
import Proj2B from "../images/proj-2/img-2.jpg"
import Proj2C from "@images/proj-2/img-3.jpg"
import Proj2D from "@images/proj-2/img-4.png"
import Proj2E from "@images/proj-2/img-5.jpg"
import Proj2F from "@images/proj-2/img-6.png"
// THIRD
import Proj3A from "@images/proj-3/img-1.jpg"
import Proj3B from "@images/proj-3/img-2.jpg"
import Proj3C from "@images/proj-3/img-3.jpg"
import Proj3D from "@images/proj-3/img-4.jpg"
import Proj3E from "@images/proj-3/img-5.jpg"
import Proj3F from "@images/proj-3/img-6.jpg"
// FOURTH
import Proj4A from "@images/proj-4/img-1.png"
import Proj4B from "@images/proj-4/img-2.png"
import Proj4C from "@images/proj-4/img-3.png"
// FIFTH
import Proj5A from "@images/proj-5/img-1.png"
import Proj5B from "@images/proj-5/img-2.png"
import Proj5C from "@images/proj-5/img-3.png"
// SIXTH
import Proj6A from "@images/proj-6/img-1.png"
import Proj6B from "@images/proj-6/img-2.png"
import Proj6C from "@images/proj-6/img-3.png"
// 7TH
import Proj7A from "@images/proj-7/img-1.jpg"
import Proj7B from "@images/proj-7/img-2.jpg"
import Proj7C from "@images/proj-7/img-3.jpg"
// 8TH
import Proj8A from "@images/proj-8/img-1.jpg"
import Proj8B from "@images/proj-8/img-2.jpg"
import Proj8C from "@images/proj-8/img-3.jpg"

const topServices = [
	{ src: img1, text: "Identifying & evaluating target audience", alt: "Targeting Service" },
	{ src: img2, text: "Creating an effective Social Media Strategy", alt: "Social Media Strategy" },
	{ src: img3, text: "Creating data-driven paid social campaigns", alt: "social campaigns" },
	{
		src: img4,
		text: "Creating high-performing up-to-date content",
		alt: "high-performing up-to-date content",
	},
	{ src: img5, text: "Posting scheduled, organic, engaing content", alt: "Regular content posts" },
	{ src: img6, text: "Tracking & optimizing engagement + PPC rates", alt: "Tracking rates" },
]

const bottomServices = [
	{ src: img7, text: "Day-to-day accounts management & support", alt: "accounts management" },
	{ src: img8, text: "Developing brand awareness", alt: "brand awareness" },
	{ src: img9, text: "Completing market & competitior analysis", alt: "competitior analysis" },
]

const dropOptions = ["instagram", "facebook", "billboards", "package", "other"]

const topProjects = [
	{
		info: "Mocassin Store IG Campaign",
		alt: "Mocassin Store social media Images",
		interval: 3000,
		idx: 1,
		images: [
			{ src: Proj1A, alt: "proj 1 a" },
			{ src: Proj1B, alt: "proj 1 b" },
			{ src: Proj1C, alt: "proj 1 c" },
			{ src: Proj1D, alt: "proj 1 d" },
			{ src: Proj1E, alt: "proj 1 e" },
			{ src: Proj1F, alt: "proj 1 f" },
			{ src: Proj1G, alt: "proj 1 g" },
			{ src: Proj1H, alt: "proj 1 h" },
		],
	},
	{
		info: "Al-Nabelsi Snack IG Campaign",
		alt: "Al-Nabelsi Snack menu Images",
		interval: 4300,
		idx: 2,
		images: [
			{ src: Proj2A, alt: "proj a" },
			{ src: Proj2B, alt: "proj dwa" },
			{ src: Proj2C, alt: "proj agd" },
			{ src: Proj2D, alt: "proj avcb" },
			{ src: Proj2E, alt: "proj athtr" },
			{ src: Proj2F, alt: "proj aeq" },
		],
	},
	{
		info: "Family Dental Care, Dr. Fouani",
		alt: "Family Dental Care Images",
		interval: 1200,
		idx: 3,
		images: [
			{ src: Proj3A, alt: "proj a" },
			{ src: Proj3B, alt: "proj dc" },
			{ src: Proj3C, alt: "proj as" },
			{ src: Proj3D, alt: "proj xv" },
			{ src: Proj3E, alt: "proj sd" },
			{ src: Proj3F, alt: "proj dsv" },
		],
	},
	{
		info: "Lazio - Shushi & Italian Cuisine",
		alt: "Lazio restaurant Images",
		interval: 1400,
		idx: 4,
		images: [
			{ src: Proj4A, alt: "proj ghn" },
			{ src: Proj4B, alt: "proj hmg" },
			{ src: Proj4C, alt: "proj esf" },
		],
	},
]
const bottomProjects = [
	{
		info: "Diva Med Center IG ad campaign",
		alt: "Diva Medical Center marketing Images",
		interval: 3200,
		idx: 5,
		images: [
			{ src: Proj5A, alt: "proj a" },
			{ src: Proj5B, alt: "proj b" },
			{ src: Proj5C, alt: "proj c" },
		],
	},
	{
		info: "HIC, The best certified courses!",
		alt: "HIC Images",
		interval: 2980,
		idx: 6,
		images: [
			{ src: Proj6A, alt: "proj a" },
			{ src: Proj6B, alt: "proj b" },
			{ src: Proj6C, alt: "proj c" },
		],
	},
	{
		info: "Nutri Fit - Run by Jinan Trad",
		alt: "Nutri Fit social media Images",
		interval: 4400,
		idx: 7,
		images: [
			{ src: Proj7A, alt: "proj a" },
			{ src: Proj7B, alt: "proj b" },
			{ src: Proj7C, alt: "proj c" },
		],
	},
	{
		info: "Optimal: Functional & affordable",
		alt: "Optimal marketing Images",
		interval: 36500,
		idx: 8,
		images: [
			{ src: Proj8A, alt: "proj a" },
			{ src: Proj8B, alt: "proj b" },
			{ src: Proj8C, alt: "proj c" },
		],
	},
]

export { topServices, bottomServices, dropOptions, topProjects, bottomProjects }
