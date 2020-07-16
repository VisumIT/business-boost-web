import React from "react";
import Context from "./Context";
import usestorage from '../../services/useStorage'

const storeProvider = ({children}) => {
    const [token, setToken] = usestorage('token')


    return (
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >        
            {children}
        </Context.Provider>
    )
}


export default storeProvider;