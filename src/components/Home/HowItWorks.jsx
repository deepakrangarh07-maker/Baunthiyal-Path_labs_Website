import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
	FaClipboardCheck,
	FaVial,
	FaMicroscope,
	FaFileMedical,
	FaMobileAlt,
	FaDownload,
} from "react-icons/fa";

import "../../styles/Home/HowItWorks.css";

/* =========================================================
   STEP DATA
========================================================= */

const steps = [
	{
		id: 1,
		title: "Book Your Test",
		description: "Choose test or package and book online",
		icon: FaClipboardCheck,
	},

	{
		id: 2,
		title: "Sample Collection",
		description: "Visit lab or choose home collection",
		icon: FaVial,
	},

	{
		id: 3,
		title: "Testing & Analysis",
		description: "Advanced testing by expert professionals",
		icon: FaMicroscope,
	},

	{
		id: 4,
		title: "Get Reports",
		description: "Fast & accurate reports online",
		icon: FaFileMedical,
	},
];

/* =========================================================
   TIMING
========================================================= */

const STEP_ACTIVATION = 800;
const TRAVEL_TIME = 1200;
const POP_TIME = 600;
const PAUSE_TIME = 400;
const REPORT_TIME = 1800;
const HOLD_TIME = 2000;
const RESET_TIME = 1000;

/* =========================================================
   HOW IT WORKS
========================================================= */

function HowItWorks() {
	const [activeStep, setActiveStep] = useState(0);
	const [traveling, setTraveling] = useState(false);
	const [showReport, setShowReport] = useState(false);
	const [animationKey, setAnimationKey] = useState(0);

	useEffect(() => {
		let mounted = true;
		let timers = [];

		const wait = (time) =>
			new Promise((resolve) => {
				const timer = setTimeout(resolve, time);
				timers.push(timer);
			});

		const runAnimation = async () => {
			if (!mounted) return;

			/* -----------------------------------------
			   STEP 1
			----------------------------------------- */

			setActiveStep(0);
			setTraveling(false);
			setShowReport(false);

			await wait(STEP_ACTIVATION);

			/* -----------------------------------------
			   STEP 1 → STEP 2
			----------------------------------------- */

			if (!mounted) return;

			setTraveling(true);

			await wait(TRAVEL_TIME);

			if (!mounted) return;

			setActiveStep(1);
			setTraveling(false);

			await wait(POP_TIME + PAUSE_TIME);

			/* -----------------------------------------
			   STEP 2 → STEP 3
			----------------------------------------- */

			if (!mounted) return;

			setTraveling(true);

			await wait(TRAVEL_TIME);

			if (!mounted) return;

			setActiveStep(2);
			setTraveling(false);

			await wait(POP_TIME + PAUSE_TIME);

			/* -----------------------------------------
			   STEP 3 → STEP 4
			----------------------------------------- */

			if (!mounted) return;

			setTraveling(true);

			await wait(TRAVEL_TIME);

			if (!mounted) return;

			setActiveStep(3);
			setTraveling(false);

			await wait(POP_TIME);

			/* -----------------------------------------
			   MOBILE REPORT
			----------------------------------------- */

			if (!mounted) return;

			setShowReport(true);

			await wait(REPORT_TIME);

			/* -----------------------------------------
			   HOLD COMPLETED STATE
			----------------------------------------- */

			if (!mounted) return;

			await wait(HOLD_TIME);

			/* -----------------------------------------
			   SMOOTH RESET
			----------------------------------------- */

			if (!mounted) return;

			setShowReport(false);

			await wait(RESET_TIME);

			if (!mounted) return;

			setActiveStep(0);

			setAnimationKey((prev) => prev + 1);
		};

		runAnimation();

		return () => {
			mounted = false;

			timers.forEach(clearTimeout);
		};
	}, [animationKey]);

	return (
		<section className="how-it-works" aria-label="How it works">
			<div className="how-it-works-container">
				{/* =================================================
				    HEADER
				================================================= */}

				<div className="how-it-works-header">
					<span className="how-it-works-label">HOW IT WORKS</span>

					<h2>
						Simple Steps for
						<span> Better Health</span>
					</h2>

					<p>
						From booking your test to receiving your report, we make your
						diagnostic journey simple, convenient and reliable.
					</p>
				</div>

				{/* =================================================
				    TIMELINE
				================================================= */}

				<div className="how-it-works-timeline" key={animationKey}>
					{/* =================================================
					    SVG CONNECTION
					================================================= */}

					<div className="timeline-line">
						<svg
							viewBox="0 0 1000 10"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<defs>
								<linearGradient id="timelineGradient" x1="0%" x2="100%">
									<stop offset="0%" stopColor="#0b9bd7" />

									<stop offset="50%" stopColor="#12b8b0" />

									<stop offset="100%" stopColor="#0b9bd7" />
								</linearGradient>

								<filter
									id="timelineGlow"
									x="-100%"
									y="-100%"
									width="300%"
									height="300%"
								>
									<feGaussianBlur stdDeviation="5" result="blur" />

									<feMerge>
										<feMergeNode in="blur" />

										<feMergeNode in="SourceGraphic" />
									</feMerge>
								</filter>
							</defs>

							{/* Base line */}

							<line
								x1="0"
								y1="5"
								x2="1000"
								y2="5"
								className="timeline-base-line"
							/>

							{/* Active progress */}

							<motion.line
								x1="0"
								y1="5"
								x2="1000"
								y2="5"
								className="timeline-active-line"
								initial={{
									pathLength: 0,
								}}
								animate={{
									pathLength:
										activeStep === 0
											? 0
											: activeStep === 1
												? 0.33
												: activeStep === 2
													? 0.66
													: 1,
								}}
								transition={{
									duration: 0.5,
									ease: "easeOut",
								}}
							/>

							{/* Traveling light */}

							{traveling && (
								<motion.circle
									r="5"
									cy="5"
									className="timeline-travel-light"
									filter="url(#timelineGlow)"
									initial={{
										cx:
											activeStep === 0 ? "0" : activeStep === 1 ? "330" : "660",
									}}
									animate={{
										cx:
											activeStep === 0
												? "330"
												: activeStep === 1
													? "660"
													: "1000",
									}}
									transition={{
										duration: TRAVEL_TIME / 1000,
										ease: "easeInOut",
									}}
								/>
							)}
						</svg>
					</div>

					{/* =================================================
					    STEPS
					================================================= */}

					<div className="how-it-works-steps">
						{steps.map((step, index) => {
							const Icon = step.icon;

							const isActive = activeStep >= index;

							const isCurrent = activeStep === index;

							return (
								<motion.article
									key={step.id}
									className={`how-step ${isActive ? "is-active" : ""} ${
										isCurrent ? "is-current" : ""
									}`}
									animate={{
										opacity: isActive ? 1 : 0.62,
										scale: isCurrent ? 1.04 : 1,
									}}
									transition={{
										type: "spring",
										stiffness: 180,
										damping: 14,
									}}
								>
									{/* Step circle */}

									<motion.div
										className="how-step-circle"
										animate={{
											scale: isCurrent ? [1, 1.1, 1.04] : 1,
										}}
										transition={{
											duration: 0.6,
											ease: "easeOut",
										}}
									>
										{/* Ripple */}

										{isCurrent && (
											<>
												<motion.span
													className="step-ripple ripple-one"
													initial={{
														scale: 0.7,
														opacity: 0.7,
													}}
													animate={{
														scale: 1.7,
														opacity: 0,
													}}
													transition={{
														duration: 1.1,
														repeat: Infinity,
														ease: "easeOut",
													}}
												/>

												<motion.span
													className="step-ripple ripple-two"
													initial={{
														scale: 0.7,
														opacity: 0.6,
													}}
													animate={{
														scale: 1.9,
														opacity: 0,
													}}
													transition={{
														duration: 1.1,
														delay: 0.3,
														repeat: Infinity,
														ease: "easeOut",
													}}
												/>
											</>
										)}

										<div className="how-step-icon">
											<Icon />
										</div>

										<span className="step-number">0{step.id}</span>
									</motion.div>

									{/* Content */}

									<div className="how-step-content">
										<h3>{step.title}</h3>

										<p>{step.description}</p>
									</div>
								</motion.article>
							);
						})}
					</div>

					{/* =================================================
					    MOBILE REPORT
					================================================= */}

					<AnimatePresence>
						{showReport && (
							<motion.div
								className="mobile-report-animation"
								initial={{
									opacity: 0,
									y: 20,
									scale: 0.9,
								}}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
								}}
								exit={{
									opacity: 0,
									y: 10,
								}}
								transition={{
									duration: 0.6,
								}}
							>
								<div className="mobile-phone">
									<div className="phone-speaker" />

									<div className="phone-screen">
										<div className="phone-top">
											<span>Your Report</span>

											<FaFileMedical />
										</div>

										<motion.div
											className="report-document"
											initial={{
												y: 35,
												opacity: 0,
											}}
											animate={{
												y: 0,
												opacity: 1,
											}}
											transition={{
												delay: 0.3,
												duration: 0.7,
											}}
										>
											<div className="report-check">✓</div>

											<strong>Report Ready</strong>

											<span>Your diagnostic report is available.</span>

											<div className="report-lines">
												<i />
												<i />
												<i />
											</div>

											<button type="button">
												<FaDownload />
												Download Report
											</button>
										</motion.div>
									</div>
								</div>

								<div className="mobile-report-text">
									<span>DIGITAL REPORT</span>

									<strong>Your report is ready</strong>

									<p>Securely access your report online anytime.</p>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
