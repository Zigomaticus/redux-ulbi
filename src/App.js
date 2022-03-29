import { useDispatch, useSelector } from "react-redux";
// Css
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  console.log(cash);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <button>Add cash</button>
        <button>Get cash</button>
      </div>
    </div>
  );
}

export default App;
