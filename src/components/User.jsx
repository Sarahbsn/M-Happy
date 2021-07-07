import React, { useState } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Search from "./Search";
import Map from "./Map";

const User = ({ handleLogout }) => {
	const [address, setAddress] = useState("");
	const [addresses, setAddresses] = useState([]); // to add selected addresses on the list

	const handleChange = (value) => {
		setAddress(value);
	};

	const handleSelect = (address) => {
		setAddress(address);
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
			<div className="hero">
				<h2>Welcome</h2>
				<button onClick={handleLogout}>Log out</button>
			</div>
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

export default User;

// We need to create the states in this component but also in Map component
