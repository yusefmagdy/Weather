import React, { Children, createContext } from 'react';
import { useState } from 'react';




export const USerContext=createContext(null);


const UserProvider = () => {
    const[weatherD,setWeatherD]=useState({})
    
    return ( <USerContext.Provider value={{weatherD,setWeatherD}} >
        {Children}






    </USerContext.Provider>);
}
 
export default UserProvider;