import { ParkName, ParkImage, Park, ParksContainer, ParkButton, DetailContainer, EquipmentList, EquipmentItem, DetailImage, CloseButton, DetailImagesRow, SmallDetailImage, Title, Description } from './Parks.styles';
import data from "../../data.json";

function Parks({ selectedPark, setSelectedPark }) {
    return (
        <div>
            {selectedPark ? (
                <DetailContainer>
                    <h1>{selectedPark.name}</h1>
                    <DetailImage src={process.env.PUBLIC_URL + selectedPark.image} alt={selectedPark.name} />
                    <EquipmentList>
                        {selectedPark.equipment.map((equip, index) => (
                            <EquipmentItem key={index}>{equip}</EquipmentItem>
                        ))}
                    </EquipmentList>
                    <DetailImagesRow>
                        <SmallDetailImage src={process.env.PUBLIC_URL + selectedPark.image2} alt={selectedPark.name} />
                        <SmallDetailImage src={process.env.PUBLIC_URL + selectedPark.image3} alt={selectedPark.name} />
                        <SmallDetailImage src={process.env.PUBLIC_URL + selectedPark.image4} alt={selectedPark.name} />
                    </DetailImagesRow>
                    <CloseButton onClick={() => setSelectedPark(null)}>
                        Close
                    </CloseButton>
                </DetailContainer>
            ) : (
                <div>
                    <Title>Parks</Title>
                    <Description> Select a park to view available equipment and to filter exercises that can be performed with the available equipment </Description>
                    <ParksContainer>
                        {data.map((item) => (
                            <Park key={item.id}>
                                <ParkName>{item.name}</ParkName>
                                <ParkImage src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                                <ParkButton onClick={() => setSelectedPark(item)}>
                                    Select
                                </ParkButton>
                            </Park>
                        ))}
                    </ParksContainer>
                </div>
            )}
        </div>
    );
}

export default Parks;







