	import "../../styles/Our_Services/Tests.css";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

	import {
		FaFlask,
		FaMicroscope,
		FaXRay,
		FaHeartbeat,
		FaStethoscope,
		FaSearch,
		FaArrowRight,
		FaFilter,
		FaCheck,
		FaTimes,
		FaChevronLeft,
		FaChevronRight,
	} from "react-icons/fa";

	import tests from "../../data/tests.json";

	import TestDetails from "./TestDetails";

	/* =========================================================
	DEPARTMENT ICONS
	========================================================= */

	const departmentIcons = {
		Biochemistry: <FaFlask />,
		Hematology: <FaHeartbeat />,
		"Clinical Pathology": <FaStethoscope />,
		Microbiology: <FaMicroscope />,
		Immunology: <FaHeartbeat />,
		Histopathology: <FaMicroscope />,
		Radiology: <FaXRay />,
		Cardiology: <FaHeartbeat />,
		"Package Manager": <FaFlask />,
	};

	/* =========================================================
	DEPARTMENT ID
	========================================================= */

	const makeDepartmentId = (department) => {
		return department?.toLowerCase().trim().replace(/\s+/g, "-");
	};

	/* =========================================================
	TESTS PER PAGE
	========================================================= */

	const TESTS_PER_PAGE = 15;

	function Tests() {
		/* =====================================================
		STATES
		===================================================== */
		const [searchParams] = useSearchParams();
		// useEffect(() => {
		// 	const searchParam = searchParams.get("search");

		// 	if (searchParam) {
		// 		setSearchTerm(searchParam);
		// 		setCurrentPage(1);
		// 	}
		// }, [searchParams]);

		const departments = useMemo(() => {
				const uniqueDepartments = [
					...new Set(tests.map((test) => test.department).filter(Boolean)),
				];

				return uniqueDepartments.map((department) => ({
					id: makeDepartmentId(department),
					name: department,
					icon: departmentIcons[department] || <FaFlask />,
				}));
			}, []);


		const [selectedDepartments, setSelectedDepartments] = useState([]);

		const [searchTerm, setSearchTerm] = useState("");

		const [selectedTest, setSelectedTest] = useState(null);

		const [showSuggestions, setShowSuggestions] = useState(false);

		const [showFilter, setShowFilter] = useState(false);

		const [currentPage, setCurrentPage] = useState(1);
		const [showMobileFilter, setShowMobileFilter] = useState(false);

		useEffect(() => {
			const departmentParam = searchParams.get("departments");
			const searchParam = searchParams.get("search");

			// Search
			setSearchTerm(searchParam || "");

			// Departments
			if (departmentParam) {
				const requestedDepartments = departmentParam
					.split(",")
					.map((department) => makeDepartmentId(department))
					.filter(Boolean);

				const validDepartments = departments
					.filter((department) => requestedDepartments.includes(department.id))
					.map((department) => department.id);

				setSelectedDepartments(validDepartments);
			} else {
				setSelectedDepartments([]);
			}

			setCurrentPage(1);
		}, [searchParams, departments]);
		/* =====================================================
		CREATE DEPARTMENTS FROM JSON
		===================================================== */

		// const departments = useMemo(() => {
		// 	const uniqueDepartments = [
		// 		...new Set(tests.map((test) => test.department).filter(Boolean)),
		// 	];

		// 	return uniqueDepartments.map((department) => ({
		// 		id: makeDepartmentId(department),
		// 		name: department,
		// 		icon: departmentIcons[department] || <FaFlask />,
		// 	}));
		// }, []);

		/* =====================================================
		Add to the Cart
		===================================================== */

		const addToCart = (test) => {
			const existingCart = JSON.parse(localStorage.getItem("testCart")) || [];

			const alreadyAdded = existingCart.some((item) => item.id === test.id);

			if (alreadyAdded) {
				return;
			}

			const updatedCart = [
				...existingCart,
				{
					...test,
					quantity: 1,
				},
			];
			localStorage.setItem("testCart", JSON.stringify(updatedCart));
		};

		/* =====================================================
		FILTER TESTS
		===================================================== */

		const filteredTests = useMemo(() => {
			let result = [...tests];

			/* ---------------------------------------------
				MULTIPLE DEPARTMENT FILTER
				--------------------------------------------- */

			if (selectedDepartments.length > 0) {
				result = result.filter((test) =>
					selectedDepartments.includes(makeDepartmentId(test.department)),
				);
			}

			/* ---------------------------------------------
				SEARCH
				--------------------------------------------- */

			if (searchTerm.trim()) {
				const search = searchTerm.toLowerCase().trim();

				result = result.filter((test) => {
					const name = test.name?.toLowerCase() || "";

					const shortName = test.shortName?.toLowerCase() || "";

					const department = test.department?.toLowerCase() || "";

					const category = test.category?.toLowerCase() || "";

					return (
						name.includes(search) ||
						shortName.includes(search) ||
						department.includes(search) ||
						category.includes(search)
					);
				});
			}

			return result;
		}, [selectedDepartments, searchTerm]);

		/* =====================================================
		PAGINATION
		===================================================== */

		const totalPages = Math.ceil(filteredTests.length / TESTS_PER_PAGE);

		const paginatedTests = useMemo(() => {
			const startIndex = (currentPage - 1) * TESTS_PER_PAGE;

			const endIndex = startIndex + TESTS_PER_PAGE;

			return filteredTests.slice(startIndex, endIndex);
		}, [filteredTests, currentPage]);

		/* =====================================================
		RESET PAGE WHEN FILTER / SEARCH CHANGES
		===================================================== */

		useEffect(() => {
			setCurrentPage(1);
		}, [selectedDepartments, searchTerm]);

		/* =====================================================
		SEARCH SUGGESTIONS
		===================================================== */

		const suggestions = useMemo(() => {
			const search = searchTerm.trim().toLowerCase();

			if (!search) {
				return [];
			}

			let result = [...tests];

			/* Department filter */

			if (selectedDepartments.length > 0) {
				result = result.filter((test) =>
					selectedDepartments.includes(makeDepartmentId(test.department)),
				);
			}

			/* Search */

			result = result.filter((test) => {
				const name = test.name?.toLowerCase() || "";

				const shortName = test.shortName?.toLowerCase() || "";

				const department = test.department?.toLowerCase() || "";

				const category = test.category?.toLowerCase() || "";

				return (
					name.includes(search) ||
					shortName.includes(search) ||
					department.includes(search) ||
					category.includes(search)
				);
			});

			/* Ranking */

			result.sort((a, b) => {
				const aName = a.name?.toLowerCase() || "";

				const bName = b.name?.toLowerCase() || "";

				const aShort = a.shortName?.toLowerCase() || "";

				const bShort = b.shortName?.toLowerCase() || "";

				const getScore = (name, shortName) => {
					if (name.startsWith(search)) return 1;

					if (shortName.startsWith(search)) return 2;

					if (name.includes(search)) return 3;

					return 4;
				};

				return getScore(aName, aShort) - getScore(bName, bShort);
			});

			return result.slice(0, 6);
		}, [searchTerm, selectedDepartments]);

		/* =====================================================
		SEARCH CHANGE
		===================================================== */

		const handleSearchChange = (event) => {
			const value = event.target.value;

			setSearchTerm(value);

			setShowSuggestions(value.trim().length > 0);
		};

		/* =====================================================
		SEARCH FOCUS
		===================================================== */

		const handleSearchFocus = () => {
			if (searchTerm.trim()) {
				setShowSuggestions(true);
			}
		};

		/* =====================================================
		CLEAR SEARCH
		===================================================== */

		const handleClearSearch = () => {
			setSearchTerm("");

			setShowSuggestions(false);
		};

		/* =====================================================
		SUGGESTION CLICK
		===================================================== */

		const handleSuggestionClick = (test) => {
			setSearchTerm(test.shortName || test.name);

			setShowSuggestions(false);

			setSelectedTest(test);
		};

		/* =====================================================
		DEPARTMENT CHECKBOX
		===================================================== */

		const handleDepartmentChange = (departmentId) => {
			setSelectedDepartments((previous) => {
				if (previous.includes(departmentId)) {
					return previous.filter((id) => id !== departmentId);
				}

				return [...previous, departmentId];
			});
		};

		/* =====================================================
		CLEAR ALL FILTERS
		===================================================== */

		const clearFilters = () => {
			setSelectedDepartments([]);

			setCurrentPage(1);
		};

		/* =====================================================
		REMOVE SINGLE FILTER
		===================================================== */

		const removeDepartment = (departmentId) => {
			setSelectedDepartments((previous) =>
				previous.filter((id) => id !== departmentId),
			);
		};

		/* =====================================================
		PAGE CHANGE
		===================================================== */

		const goToPage = (page) => {
			if (page < 1 || page > totalPages) {
				return;
			}

			setCurrentPage(page);

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		};

		/* =====================================================
		PAGE NUMBERS
		===================================================== */

		const pageNumbers = useMemo(() => {
			const pages = [];

			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}

			return pages;
		}, [totalPages]);

		/* =====================================================
		VIEW TEST
		===================================================== */

		const handleViewTest = (test) => {
			setSelectedTest(test);
		};

		return (
			<section className="tests-section">
				<div className="tests-container">
					{/* =================================================
						HEADER
					================================================= */}
					<div className="tests-header">
						<span className="tests-tag">OUR DIAGNOSTIC TESTS</span>

						<h2>
							Find the Right <span>Diagnostic Test</span>
						</h2>

						<p>
							Explore our comprehensive range of pathology, radiology and
							diagnostic investigations.
						</p>
					</div>
					{/* =================================================
						SEARCH + FILTER
					================================================= */}
					<div className="tests-controls">
						{/* SEARCH */}

						<div className="tests-search-wrapper">
							<div className="tests-search">
								<FaSearch className="tests-search-icon" />

								<input
									type="text"
									placeholder="Search tests, e.g. CBC, LFT, Thyroid..."
									value={searchTerm}
									onChange={handleSearchChange}
									onFocus={handleSearchFocus}
									aria-label="Search diagnostic tests"
								/>

								{searchTerm && (
									<button
										type="button"
										className="tests-search-clear"
										onClick={handleClearSearch}
									>
										<FaTimes />
									</button>
								)}

								{/* =================================================
									SEARCH SUGGESTIONS
								================================================= */}

								{showSuggestions && (
									<div className="test-suggestions">
										{suggestions.length > 0 ? (
											<>
												<div className="test-suggestions-header">
													<span>Test Suggestions</span>

													<span>{suggestions.length} results</span>
												</div>

												{suggestions.map((test) => (
													<button
														type="button"
														className="test-suggestion"
														key={test.id}
														onClick={() => handleSuggestionClick(test)}
													>
														<div className="test-suggestion-icon">
															<FaFlask />
														</div>

														<div className="test-suggestion-content">
															<strong>{test.name}</strong>

															<div>
																{test.shortName && <span>{test.shortName}</span>}

																<span>{test.department}</span>

																{test.sampleType && (
																	<span>{test.sampleType}</span>
																)}
															</div>
														</div>

														<FaArrowRight className="test-suggestion-arrow" />
													</button>
												))}

												<div className="test-suggestions-footer">
													Showing top suggestions
												</div>
											</>
										) : (
											<div className="test-suggestions-empty">
												<FaFlask />

												<strong>No matching tests</strong>

												<span>
													Try CBC, LFT, KFT, Thyroid or another test name.
												</span>
											</div>
										)}
									</div>
								)}
							</div>
						</div>

						{/* =================================================
							FILTER BUTTON
						================================================= */}

						<div className="department-filter">
							<button
								type="button"
								className={
									selectedDepartments.length > 0
										? "filter-button active"
										: "filter-button"
								}
								onClick={() => setShowFilter((previous) => !previous)}
							>
								<FaFilter />

								<span>Department</span>

								{selectedDepartments.length > 0 && (
									<b>{selectedDepartments.length}</b>
								)}
							</button>

							{/* FILTER DROPDOWN */}

							{showFilter && (
								<div className="department-filter-menu">
									<div className="filter-menu-header">
										<strong>Filter by Department</strong>

										{selectedDepartments.length > 0 && (
											<button type="button" onClick={clearFilters}>
												Clear
											</button>
										)}
									</div>

									<div className="filter-options">
										{departments.map((department) => {
											const checked = selectedDepartments.includes(department.id);

											return (
												<label
													className={
														checked ? "filter-option selected" : "filter-option"
													}
													key={department.id}
												>
													<input
														type="checkbox"
														checked={checked}
														onChange={() => handleDepartmentChange(department.id)}
													/>

													<span className="filter-checkbox">
														{checked && <FaCheck />}
													</span>

													<span className="filter-option-icon">
														{department.icon}
													</span>

													<span className="filter-option-name">
														{department.name}
													</span>
												</label>
											);
										})}
									</div>

									<button
										type="button"
										className="filter-done-button"
										onClick={() => setShowFilter(false)}
									>
										Apply Filter
									</button>
								</div>
							)}
						</div>
					</div>
					{/* =================================================
						SELECTED FILTER CHIPS
					================================================= */}
					{selectedDepartments.length > 0 && (
						<div className="selected-filter-list">
							<span>Filters:</span>

							{selectedDepartments.map((departmentId) => {
								const department = departments.find(
									(item) => item.id === departmentId,
								);

								return (
									<button
										type="button"
										className="selected-filter-chip"
										key={departmentId}
										onClick={() => removeDepartment(departmentId)}
									>
										{department?.name}

										<FaTimes />
									</button>
								);
							})}

							<button
								type="button"
								className="clear-all-filters"
								onClick={clearFilters}
							>
								Clear All
							</button>
						</div>
					)}
					{/* =================================================
						RESULT INFORMATION
					================================================= */}
					<div className="tests-result-header">
						<div>
							<span>Showing</span>

							<strong>{filteredTests.length} Tests</strong>
						</div>

						<span className="page-information">
							Page {currentPage} of {totalPages || 1}
						</span>
					</div>
					{/* =================================================
						TEST CARDS
					================================================= */}
					{paginatedTests.length > 0 ? (
						<div className="tests-grid">
							{paginatedTests.map((test) => (
								<article
									className="test-card"
									key={test.id}
									onClick={() => handleViewTest(test)}
								>
									<div className="test-card-icon">
										<FaFlask />
									</div>

									<div className="test-card-content">
										<span className="test-card-department">
											{test.department}
										</span>

										<h3>{test.name}</h3>

										{test.shortName && (
											<span className="test-card-shortname">
												{test.shortName}
											</span>
										)}

										<div className="test-card-meta">
											<span>{test.sampleType}</span>

											<span>{test.tat}</span>
										</div>

										<div className="test-card-bottom">
											<strong>₹{test.price}</strong>

											<span>View Details →</span>
										</div>
									</div>
								</article>
							))}
						</div>
					) : (
						<div className="no-tests">
							<FaFlask />

							<h3>No tests found</h3>

							<p>
								Try searching with another test name or select another department.
							</p>
						</div>
					)}
					{/* =================================================
						PAGINATION
					================================================= */}
					{totalPages > 1 && (
						<div className="tests-pagination">
							<button
								type="button"
								className="pagination-nav"
								disabled={currentPage === 1}
								onClick={() => {
									setCurrentPage((page) => page - 1);

									window.scrollTo({
										top: 0,
										behavior: "smooth",
									});
								}}
							>
								← <span>Previous</span>
							</button>

							<div className="pagination-numbers">
								{currentPage > 3 && (
									<>
										<button
											type="button"
											className="pagination-number"
											onClick={() => setCurrentPage(1)}
										>
											1
										</button>

										<span className="pagination-dots">...</span>
									</>
								)}

								{Array.from({ length: totalPages }, (_, index) => index + 1)
									.filter((page) => {
										return (
											page === 1 ||
											page === totalPages ||
											Math.abs(page - currentPage) <= 2
										);
									})
									.map((page) => (
										<button
											key={page}
											type="button"
											className={`pagination-number ${
												currentPage === page ? "active" : ""
											}`}
											onClick={() => {
												setCurrentPage(page);

												window.scrollTo({
													top: 0,
													behavior: "smooth",
												});
											}}
										>
											{page}
										</button>
									))}

								{currentPage < totalPages - 2 && (
									<>
										<span className="pagination-dots">...</span>

										<button
											type="button"
											className="pagination-number"
											onClick={() => setCurrentPage(totalPages)}
										>
											{totalPages}
										</button>
									</>
								)}
							</div>

							<button
								type="button"
								className="pagination-nav"
								disabled={currentPage === totalPages}
								onClick={() => {
									setCurrentPage((page) => page + 1);

									window.scrollTo({
										top: 0,
										behavior: "smooth",
									});
								}}
							>
								<span>Next</span> →
							</button>
						</div>
					)}
					{/* =================================================
						TEST DETAILS
					================================================= */}
					{selectedTest && (
						<TestDetails
							test={selectedTest}
							onClose={() => setSelectedTest(null)}
						/>
					)}
				</div>
			</section>
		);
	}

	export default Tests;
