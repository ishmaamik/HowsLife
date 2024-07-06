import { useContext } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import { AccountContext } from "./context/AccountProvider";
import LoginSidebar from "./components/login/LoginSidebar";
import ChatSidebar from "./components/chat/modal/ChatSidebar";
import HomeSideBar from "./components/home/HomeSideBar";
import ExampleImage2 from './components/home/sky.png';  // Ensure correct path to your image

const Messenger = () => {
    const { account, login } = useContext(AccountContext);

    return (
        <Box overflow={"hidden"}>
            {login==='2'? 
            <ChatSidebar className="sidebar" zIndex="100" />
                
             : 
             <LoginSidebar className="sidebar" zIndex="3" />
             

            
            
        }
        </Box>
    );
}

export default Messenger;
