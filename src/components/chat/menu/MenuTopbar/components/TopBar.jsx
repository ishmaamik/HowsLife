import { Flex} from "@chakra-ui/react";
import TopNavItem from "./TopNavItem";


const TopBar=({className})=>{
    
    
    

    return(
        
        <>
        <Flex className={className} pos={"relative"}  w={"450px"} h={"50px"} flexDir={"row"} justifyContent={"space-between"}  maxW="100vw" transition="height 0.3s ease" overflowX={'hidden'} overflowY={"hidden"} backgroundColor={"#fff"}>
        
         <Flex
        flex={1}
                p="0%"
                flexDir="row"
                alignItems={"flex-start"}
                as="nav"
                mt={-4}
                ml={-1}
                
            >
         
                
         <TopNavItem navSize={"10px"} title="Chats" mr={64} />

         {/* <Link as={ChatIcon} boxSize={6} color="gray.500" mt={"30.5px"} mr={10}/> */}
         {/* <MoreVert/> */}
         {/* <Link as={HamburgerIcon} boxSize={6} color="gray.500" mt={"30.5px"} mr={12}/> */}

     
        </Flex> 

        <Flex p={"0%"} flexDir={"row"} w={"100%"} alignItems={"flex-start"} mb={45} >

       

        </Flex>

       </Flex>


        </>
    )
}

export default TopBar;