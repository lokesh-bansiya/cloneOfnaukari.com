import React, {useReducer} from "react";
import reducer  from "./reducer";


export const AuthContext = React.createContext();

const initState = {
  isLoading: false,
  isAuth: false,
  token:"",
  isError: false,
};

const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
      <AuthContext.Provider value={{ state,dispatch }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContextProvider;
