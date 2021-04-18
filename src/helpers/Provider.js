import React ,{useState , createContext} from 'react'

export const    Loading = createContext();

export default function ProviderL({children}){
    const [loading, setLoading] = useState(false);
    return (
        <Loading.Provider value={{loading,setLoading}}>
            {children}
        </Loading.Provider>
    )
}