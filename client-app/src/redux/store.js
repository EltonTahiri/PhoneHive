import { createStore, combineReducers } from "redux";

const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const login = (token) => {
  localStorage.setItem("token", token);

  return {
    type: LOGIN,
    token,
  };
};

const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
export { login, logout };
