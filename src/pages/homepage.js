import Parks from "../components/Parks/Parks";
import Exercises from "../components/Exercises/Exercises";

function Homepage() {
    return (
        <div>
            <h1>Parks</h1>
            <Parks />
            <h1>Exercises</h1>
            <Exercises />
        </div>
    );
}

export default Homepage;