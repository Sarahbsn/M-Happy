import PlacesAutocomplete from "react-places-autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import {
	ListContainer,
	SearchBarContainer,
	MainContainer,
	ListTitle,
	ItemWrapper,
} from "../styles/StyledSearch";

export default function Search({
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
			<ul style={{ listStyleType: "none" }}>
				<ListTitle>Search History</ListTitle>
				<ListContainer>
					{addresses.map((address) => (
						<li>
							<ItemWrapper>
								{address.formatted_address}
								<DeleteIcon
									onClick={(e) =>
										handlerRemoveAddressFromList(address.place_id)
									}
								/>
							</ItemWrapper>
						</li>
					))}
				</ListContainer>
			</ul>
		</MainContainer>
	);
}
