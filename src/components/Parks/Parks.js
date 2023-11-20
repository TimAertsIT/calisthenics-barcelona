import { ParkName, ParkImage, Park, ParksContainer } from './Parks.styles';
import data from "../../data.json";

function Parks({ selectedPark, setSelectedPark }) {
    return (
        <div>
            {selectedPark ? (
                <div>
                    <h1>{selectedPark.name}</h1>
                    <img src={process.env.PUBLIC_URL + selectedPark.image} alt={selectedPark.name} style={{ width: "500px" }} />
                    <ul>
                        {selectedPark.equipment.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                        <p>More info can come here</p>
                    </ul>
                    <button onClick={() => setSelectedPark(null)}>
                        Close
                    </button>
                </div>
            ) : (
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
                            <button onClick={() => setSelectedPark(item)}>
                                Select this park
                            </button>
                        </Park>
                    ))}
                </ParksContainer>
            )}
        </div>
    );
}

export default Parks;




