import { useContext } from "react";
import LoginSidebar from "./components/login/LoginSidebar"
import { AccountContext } from "./context/AccountProvider";
import { Box } from "@chakra-ui/react";
import ChatSidebar from "./components/chat/modal/ChatSidebar";


const Messenger=()=>
{
    const {account}= useContext(AccountContext);

    return(
        <Box 
        overflow={"hidden"} 
        >
        {account?
        <ChatSidebar className="sidebar" zIndex="3"/>
        :
        <LoginSidebar className="sidebar" zIndex="3"/>
        }
        </Box>
    )
}

export default Messenger;
