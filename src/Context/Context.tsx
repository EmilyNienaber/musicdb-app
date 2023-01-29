import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducer";

export const Context = createContext<any>({
	state: initialState,
	dispatch: () => null,
});

export const Store = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};
