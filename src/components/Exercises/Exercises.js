import exercises from '../../exercises.json';
import { ExerciseName, ExerciseImage, Exercise, ExercisesContainer } from './Exercises.styles';

function Exercises() {
    return (
        <ExercisesContainer>
            {exercises.map((item) => (
                <Exercise key={item.id}>
                    <ExerciseName>{item.name}</ExerciseName>
                    <ExerciseImage src={item.image} alt={item.name} />
                    <p>Trains: {item.trains.join(', ')}</p>
                    <p>Equipment: {item.equipment.join(', ')}</p>
                </Exercise>
            ))}
        </ExercisesContainer>
    );
}

export default Exercises;