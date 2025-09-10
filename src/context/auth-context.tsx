import { createContext, useContext, useState } from "react"

interface contextProps {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const context = createContext<contextProps>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})
const AuthContext = ({children} : {
    children: React.ReactNode
}) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    
  return (
    <context.Provider
        value={{isLoggedIn, setIsLoggedIn}}
    >
        {children}
    </context.Provider>
  )
}

export const useAuthProvider = () => {
    const Context = useContext(context);
    if(!Context){
        throw new Error('use auth context cannot be used outside of auth context provider');
    }
    return Context;
}


export default AuthContext