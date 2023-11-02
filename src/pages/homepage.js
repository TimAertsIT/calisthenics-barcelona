import Parks from "../components/Parks/Parks";
import Exercises from "../components/Exercises/Exercises";
import ParksMap from "../components/Parksmap/Parksmap";

function Homepage() {
    return (
        <div>
            <h1>Parks</h1>
            <Parks />
            <h1>Exercises</h1>
            <Exercises />
            <ParksMap />
        </div>
    );
}

export default Homepage;