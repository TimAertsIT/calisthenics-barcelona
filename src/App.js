import data from "./data.json";

function App() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={process.env.PUBLIC_URL + item.image} alt={item.name} height="50px" />
          <ul>
            {item.equipment.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
