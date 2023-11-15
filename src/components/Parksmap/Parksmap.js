import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import data from "../../data.json";
import { ParkImage } from '../Parks/Parks.styles';
import 'leaflet/dist/leaflet.css';

function InvalidateSizeComponent() {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, [map]);

    return null;
}

function ParksMap() {
    return (
        <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: "500px", width: "500px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((park, index) => (
                <Marker key={index} position={[park.lat, park.lng]}>
                    <Popup>
                        {park.name}
                        <ParkImage src={process.env.PUBLIC_URL + park.image} alt={park.name} />
                    </Popup>
                </Marker>
            ))}
            <InvalidateSizeComponent />
        </MapContainer>
    );
}

export default ParksMap;


