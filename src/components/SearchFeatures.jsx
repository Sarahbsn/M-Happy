import { useState } from "react";
import { Link } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Search from "./Search";
import Map from "./Map";
import {
	Header,
	HeaderLogo,
	HeaderTitle,
	LogoWrapper,
} from "../styles/StyledSearchFeatures";
import mhappy from "../assets/mhappy.png";

export default function SearchFeatures ({ handleLogout }) {
	const [address, setAddress] = useState("");
	const [addresses, setAddresses] = useState([]); // to add selected addresses on the list

const clearInputs = () => {
		setAddress("");
	};

	const handleChange = (value) => {
		setAddress(value);
	};


	const handleSelect = (address) => {
		if (addresses) {
			clearInputs()
			setAddresses(addresses);
		} else {
			setAddresses("")
		}
		let newAddress = {};
		geocodeByAddress(address)
			.then((results) => {
				newAddress = results[0];
				return getLatLng(newAddress);
			})
			.then(({ lat, lng }) => {
				newAddress = { ...newAddress, lat, lng };
				// console.log([...addresses, newAddress]);
				setAddresses([...addresses, newAddress]);
			})
			.catch((error) => console.error("Error", error));
	};

	const handlerRemoveAddressFromList = (place_id) => {
		const newAddresses = addresses.filter(
			(address) => address.place_id !== place_id
		);
		// console.log(newAddresses);
		setAddresses(newAddresses);
	};

	// console.log(addresses);

	return (
		<>
			<Header>
				<LogoWrapper>
					<Link to="/">
						<HeaderLogo src={mhappy} alt="logo" />
					</Link>
					<HeaderTitle>M'Happy</HeaderTitle>
				</LogoWrapper>

				<button style={{ width: "7rem" }} onClick={handleLogout}>
					Log out
				</button>
			</Header>
			<Search
				address={address}
				setAddress={setAddress}
				addresses={addresses}
				setAddresses={setAddresses}
				handleChange={handleChange}
				handleSelect={handleSelect}
				handlerRemoveAddressFromList={handlerRemoveAddressFromList}
			/>
			<Map
				address={address}
				setAddress={setAddress}
				addresses={addresses}
				setAddresses={setAddresses}
				handleChange={handleChange}
				handleSelect={handleSelect}
				handlerRemoveAddressFromList={handlerRemoveAddressFromList}
			/>
		</>
	);
};
