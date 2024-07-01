import Sidebar from "./MenuSidebar/Sidebar"
import { Flex, Box } from "@chakra-ui/react";
import TopBar from "./MenuTopbar/components/TopBar";
import Search from "./Search";
import Conversation from "./MenuConvo/Conversation";



const Menu=()=>
{
    return(
        <>
        <Flex>
        <Flex>
        <Sidebar/>
        
        <TopBar className={"sidebar"}/>
        <Search/>
        <Conversation/>
        
        </Flex>
        
        </Flex>
        
        </>
    )
}
export default Menu;