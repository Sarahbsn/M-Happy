import React from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import {
	ListContainer,
	SearchBarContainer,
	MainContainer,
} from "../styles/StyledSearch";

function Search({
	address,
	setAddress,
	addresses,
	setAddresses,
	handleChange,
	handleSelect,
	handlerRemoveAddressFromList,
}) {
	return (
		<MainContainer>
			<PlacesAutocomplete
				value={address}
				onChange={handleChange}
				onSelect={handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<SearchBarContainer>
						<TextField
							id="outlined-basic"
							label="Want to seach a city?"
							variant="outlined"
							{...getInputProps({
								placeholder: "Search Places ...",
							})}
						/>
						<div>
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion) => {
								// console.log(suggestions);
								const style = suggestion.active
									? { backgroundColor: "#cccccc", cursor: "pointer" }
									: { backgroundColor: "#ffffff", cursor: "pointer" };
								return (
									<div {...getSuggestionItemProps(suggestion, { style })}>
										{suggestion.description}
									</div>
								);
							})}
						</div>
					</SearchBarContainer>
				)}
			</PlacesAutocomplete>
			<ul>
				<ListContainer>
					<h3>Search History</h3>
					{addresses.map((address) => (
						<li>
							<div>
								{address.formatted_address}
								<DeleteIcon
									onClick={(e) =>
										handlerRemoveAddressFromList(address.place_id)
									}
								/>
							</div>
						</li>
					))}
				</ListContainer>
			</ul>
		</MainContainer>
	);
}

export default Search;
