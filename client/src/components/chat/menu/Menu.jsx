import Sidebar from "./MenuSidebar/Sidebar"
import { Flex, Box } from "@chakra-ui/react";
import TopBar from "./MenuTopbar/components/TopBar";
import Search from "./Search";
import Conversation from "./MenuConvo/Conversation";
import { useState } from "react";



const Menu=()=>
{
    const[text, setText]= useState('');
    return(
        <>
        <Flex>
        <Flex>
        <Sidebar/>
        
        <TopBar className={"sidebar"}/>
        <Search setText={setText}/>
        <Conversation text={text}/>
        
        </Flex>
        
        </Flex>
        
        </>
    )
}
export default Menu;