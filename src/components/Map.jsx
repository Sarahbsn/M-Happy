import React from "react";
import "../styles/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({
	address,
	setAddress,
	addresses,
	setAddresses,
	handleChange,
	handleSelect,
	handlerRemoveAddressFromList,
}) {
	return (
		<div className="leaflet-container">
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{addresses.map(({ formatted_address, lat, lng }) => (
					<Marker position={[lat, lng]}>
						<Popup>{formatted_address}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}
