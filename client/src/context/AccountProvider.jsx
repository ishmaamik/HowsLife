import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
export const AccountContext= createContext(null);

const AccountProvider=({children})=>
{
    const [account, setAccount]= useState();
    const [person, setPerson]= useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])
    return(
        <>
        <AccountContext.Provider value={{
            account, setAccount, person, setPerson, activeUsers, setActiveUsers, socket
        }}>
            {children}
        </AccountContext.Provider>
        </>
    )
}

export default AccountProvider;