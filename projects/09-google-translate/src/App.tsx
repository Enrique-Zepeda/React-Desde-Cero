import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducer } from "react";
import { type State } from "./assets/types";
// 1. Create a initial state for the reducer
const initialState: State = {
  //reducer initial state
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};
// 2. Create a reducer function
const reducer = (state: State, action) => {
  const { type, payload } = action;
  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }
  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: payload,
    };
  }
  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: "",
    };
  }
  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: payload,
    };
  }
  return state;
};

function App() {
  // 3. Use useReducer hook to use the reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  );
}

export default App;
