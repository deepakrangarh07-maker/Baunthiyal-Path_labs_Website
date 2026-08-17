import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import tests from "../data/tests.json";
import TestDetails from "../components/OurServices/TestDetails";

const Trail = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTest, setSelectedTest] = useState(null);
	const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDepartments, setSelectedDepartments] = useState([]);


		

	

		const [showFilter, setShowFilter] = useState(false);

		const [currentPage, setCurrentPage] = useState(1);
		const [showMobileFilter, setShowMobileFilter] = useState(false);

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

	return (
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
                                </div>
        
	);
};;

export default Trail;
