import { ParkName, ParkImage, Park, ParksContainer } from './Parks.styles';
import data from "../../data.json";

function Parks() {
    return (
        <ParksContainer>
            {data.map((item) => (
                <Park key={item.id}>
                    <ParkName>{item.name}</ParkName>
                    <ParkImage src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                    <ul>
                        {item.equipment.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                    </ul>
                </Park>
            ))}
        </ParksContainer>
    );
}

export default Parks;
