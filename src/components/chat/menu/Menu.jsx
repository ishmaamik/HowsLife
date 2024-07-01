import Sidebar from "./MenuSidebar/Sidebar"
import { Flex } from "@chakra-ui/react";
import TopBar from "./MenuTopbar/components/TopBar";
import Search from "./Search";



const Menu=()=>
{
    return(
        <>
        <Flex>
        <Flex>
        <Sidebar/>
        <TopBar className={"sidebar"}/>
        <Search/>
        </Flex>
        
        </Flex>
        
        </>
    )
}
export default Menu;