import { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [ userData, setUserData ] = useState(null);


    const values = {
        userData,
        setUserData
    }

    return (
        <UserDataContext.Provider value={ values }>
            { children }
        </UserDataContext.Provider>
    )
}