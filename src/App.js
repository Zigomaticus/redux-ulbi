import { useDispatch, useSelector } from "react-redux";
// Index
// import { ADD_CASH, GET_CASH } from "./index";
// Css
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({
      type: "ADD_CASH",
      payload: cash,
    });
  };

  const getCash = (cash) => {
    dispatch({
      type: "GET_CASH",
      payload: cash,
    });
  };

  return (
    <div className="App">
      <div className="cash">{cash}</div>
      <div className="buttons">
        <button
          onClick={() => addCash(Number(prompt()))}
          type="button"
          className="btn btn-primary"
        >
          Add cash
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          type="button"
          className="btn btn-primary"
        >
          Get cash
        </button>
      </div>
    </div>
  );
}

export default App;
