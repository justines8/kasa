import "./App.css";
import { data } from "./Components/data/data.js";
import Offers from "./Components/Offers/Offers.js";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Offers offers={data}/>
    </div>
  );
}

export default App;
