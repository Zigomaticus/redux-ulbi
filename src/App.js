import { useDispatch, useSelector } from "react-redux";
// Index
// import { ADD_CASH, GET_CASH } from "./index";
// Store
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
// Css
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

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

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
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
        <button
          onClick={() => addCustomer(prompt())}
          type="button"
          className="btn btn-primary"
        >
          Add customer
        </button>
        {/* <button
          onClick={() => wow(Number(prompt()))}
          type="button"
          className="btn btn-primary"
        >
          Get cash
        </button> */}
      </div>
      {customers.length > 0 ? (
        <div className="customers">
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div className="customers">Customers are not defined</div>
      )}
    </div>
  );
}

export default App;
