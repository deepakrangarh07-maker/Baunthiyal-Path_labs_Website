import { useMemo, useState } from "react";
import { FaArrowRight, FaFlask, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import tests from "../../data/tests.json";

function SearchBar() {
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);

	const suggestions = useMemo(() => {
		const search = searchTerm.trim().toLowerCase();

		if (!search) {
			return [];
		}

		const result = tests.filter((test) => {
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
	}, [searchTerm]);

	const handleSearchChange = (event) => {
		const value = event.target.value;

		setSearchTerm(value);
		setShowSuggestions(value.trim().length > 0);
	};

	const handleClearSearch = () => {
		setSearchTerm("");
		setShowSuggestions(false);
	};

	const handleSuggestionClick = (test) => {
		navigate(
			`/our-services/tests?search=${encodeURIComponent(
				test.shortName || test.name,
			)}`,
		);
	};

	return (
		<div className="search-bar-wrapper">
			<div className="search-bar">
				<FaSearch className="search-icon" />

				<input
					type="text"
					placeholder="Search tests, packages, radiology..."
					value={searchTerm}
					onChange={handleSearchChange}
					onFocus={() => {
						if (searchTerm.trim()) {
							setShowSuggestions(true);
						}
					}}
				/>

				{searchTerm && (
					<button type="button" onClick={handleClearSearch}>
						<FaTimes />
					</button>
				)}

				{showSuggestions && (
					<div className="search-suggestions">
						{suggestions.length > 0 ? (
							<>
								<div className="search-suggestions-header">
									<span>Test Suggestions</span>
									<span>{suggestions.length} results</span>
								</div>

								{suggestions.map((test) => (
									<button
										type="button"
										key={test.id}
										className="search-suggestion"
										onClick={() => handleSuggestionClick(test)}
									>
										<div className="search-suggestion-icon">
											<FaFlask />
										</div>

										<div className="search-suggestion-content">
											<strong>{test.name}</strong>

											<div>
												{test.shortName && <span>{test.shortName}</span>}

												<span>{test.department}</span>

												{test.sampleType && <span>{test.sampleType}</span>}
											</div>
										</div>

										<FaArrowRight />
									</button>
								))}
							</>
						) : (
							<div className="search-suggestions-empty">
								<FaFlask />

								<strong>No matching tests</strong>

								<span>Try CBC, LFT, KFT, Thyroid or another test name.</span>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
