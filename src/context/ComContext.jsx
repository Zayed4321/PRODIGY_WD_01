import { createContext, useContext, useState } from "react";

const MyComContext = createContext();

const ComWrapper = ({ children }) => {

    const [comName, setComName] = useState("Containers Near Me");

    return (
        <MyComContext.Provider value={[comName, setComName]} >
            {children}
        </MyComContext.Provider>
    )
};

// To use this context api data everywhere very easily we need to do the following 

const useCom = () => useContext(MyComContext)

export { useCom, ComWrapper };