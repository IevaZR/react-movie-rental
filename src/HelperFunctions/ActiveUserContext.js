import { createContext, useState } from "react";

export const ActiveUserContext = createContext()

export const ActiveUserProvider = ({children}) => {
    const [activeUser, setActiveUser] = useState(false)

    return (
        <ActiveUserContext.Provider value={{activeUser, setActiveUser}}>
            {children}
        </ActiveUserContext.Provider>
    )
}