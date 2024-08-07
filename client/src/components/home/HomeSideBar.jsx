import { Flex, Button, Image} from "@chakra-ui/react";
import { useState, useRef, useContext} from "react";
import {FiHome, FiCalendar, FiSettings, FiLogIn } from "react-icons/fi"
import { useOutsideClick } from "@chakra-ui/react";
import { AccountContext } from "../../context/AccountProvider";
import ExampleImage from "./howslife.png";
import HomeNavItem from "./HomeNavItem";


const HomeSideBar=({className, zIndex})=>{
    const sidebarRef = useRef(null);
    const [dropSize, changedropSize]= useState("100px");
    const [isAnimating, setIsAnimating] = useState(false);
    const {login, setLogin}=useContext(AccountContext)

    const [currentDropdown, setCurrentDropdown] = useState(null);

    const changeDrop = (targetDropdown) => {
        setIsAnimating(true);
        if (currentDropdown === targetDropdown) {
            // If the same button is pressed again, toggle the dropdown
            changedropSize("100px");
            setCurrentDropdown(null); // Resetting the current dropdown state
        } else if (currentDropdown && currentDropdown !== targetDropdown) {
            // If a different dropdown button is pressed
            changedropSize("100px"); // First, close the current dropdown
            setTimeout(() => {
                // Immediately open the new dropdown
                changedropSize("100px");
                setCurrentDropdown(targetDropdown);
            }, 10); // Small delay to allow the DOM to update
        } else {
            // No dropdown is open, or the open dropdown is being closed
            changedropSize("100px");
            setCurrentDropdown(targetDropdown);
        }
    };

    const changeBack=()=>
    {
        if(dropSize==="230px")
        {
            changedropSize("100px");
            setCurrentDropdown(null);
        }
    }
    
    const LogIn=()=>
    {
        console.log(login);
            setLogin('1');
            console.log(login);
            console.log(login);
    }
    
    
    useOutsideClick({
        ref: sidebarRef,
        handler: () => {
            if (dropSize === "230px") {  // Only attempt to close if the dropdown is open
                setIsAnimating(true);  // Initiate closing animation
                setTimeout(() => {
                    changedropSize("100px");
                    setCurrentDropdown(null);
                    setIsAnimating(false);  // End animation state after dropdown is closed
                }, 10);  // Small delay to ensure state update is registered
            }
        }
    });
    
    
    

    return(
        
        <>
        <Flex position={"absolute"} zIndex={zIndex} ref={sidebarRef} className={className} boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"} w="100%" h={dropSize} flexDir="row" justifyContent="space-between" maxW="100vw" transition="height 0.3s ease" backgroundColor="#FFC0CB">
        
         <Flex
        flex={1}
                p="0%"
                flexDir="row"
                alignItems={"flex-start"}
                as="nav"
                mt={0}
                ml={4}
                zIndex={10}
                
            >
         
         <Image  height={"150px"} mt={1} mr={200} ml={20} src={ExampleImage}/>
                <HomeNavItem flexGrow={1}  icon={FiHome } title="Features" mr={20} onClick={()=>{changeDrop("features") }}  />
                <Button mr={40} onClick={()=>{changeBack(), LogIn()}} leftIcon={<FiLogIn color="#787878"/>}  iconSpacing={"18px"} variant={"text"} fontSize={"17px"} outline={"none"} w={152} h={8} mt={"38px"} boxShadow="none" _focus={{ outline: "none", boxShadow: "none" }}>Login</Button>

        </Flex> 

        <Flex p={"0%"} flexDir={"row"} w={"100%"} alignItems={"flex-start"} mb={45} >

        
        </Flex>

       







<Flex position="absolute"  zIndex={"5"}>

</Flex>
            
            </Flex>
        </>
    )
}
//w="100vw" h="100vh"
export default HomeSideBar;