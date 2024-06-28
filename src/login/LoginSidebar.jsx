import { Modal, Flex } from "@chakra-ui/react";
import { useState, useRef} from "react";
import { useOutsideClick } from "@chakra-ui/react";
import LoginModal from "./LoginModal";




const LoginSidebar=({className, zIndex})=>
{
    const sidebarRef = useRef(null);
    const [dropSize, changedropSize]= useState("100px");

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
                changedropSize("230px");
                setCurrentDropdown(targetDropdown);
            }, 10); // Small delay to allow the DOM to update
        } else {
            // No dropdown is open, or the open dropdown is being closed
            changedropSize("230px");
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
                    <Flex boxShadow={"0 4px 12px rgba(0, 0, 0, 0.4)"} position={"absolute"} zIndex={zIndex} ref={sidebarRef} className={className} boxShadow={"0 4px 12px rgba(0, 0, 0, 0.1)"} w="100%" h={"250px"} flexDir="row" justifyContent="space-between" maxW="100vw" transition="height 0.3s ease" backgroundColor="#FFC0CB">
                    <LoginModal/>
                    
                    </Flex>
        </>
    )
}

export default LoginSidebar;