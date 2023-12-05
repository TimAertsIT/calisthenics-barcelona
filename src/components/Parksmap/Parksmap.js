import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import data from "../../data.json";
import { ParkImage } from '../Parks/Parks.styles';
import { MapWrapper, StyledPopup, StyledParkImage, ParkName } from './Parksmap.styles';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';




function InvalidateSizeComponent() {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, [map]);

    return null;
}

function ParksMap() {

    const gymIcon = icon({
        iconUrl: 'https://www.nicepng.com/ourpic/u2w7i1t4e6y3w7e6_calisthenics-muscle-workout-messages-sticker-0-muscle/',
        iconSize: [38, 95],
    });

    return (
        <MapWrapper>
            <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=5E0DUhDUa9mBbNUQvx8c"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {data.map((park, index) => (
                    <Marker key={index} position={[park.lat, park.lng]} icon={gymIcon}>
                        <StyledPopup>
                            <ParkName>{park.name}</ParkName>
                            <StyledParkImage src={process.env.PUBLIC_URL + park.image} alt={park.name} />
                        </StyledPopup>
                    </Marker>
                ))}
                <InvalidateSizeComponent />
            </MapContainer>
        </MapWrapper>
    );
};

export default ParksMap;







