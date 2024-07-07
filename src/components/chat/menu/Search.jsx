import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Icon, Input } from '@chakra-ui/react'

const Search=()=>
{
    return(
        <>
        <Flex ml={"66px"} mt={"56px"} pos={"absolute"} zIndex={20}>
        <Input _focusVisible={"none"} _hover={"none"} _focus={{ outline: "none", boxShadow: "none" }} outlineColor={"none"} backgroundColor={"hsl(45, 29%, 95%)"} pl={10} w={"370px"} h={"30px"}/>
        <Flex pos={"absolute"} zIndex={20} ml={"4px"} mt={"7px"}>
            <Icon fontSize={"small"} as={SearchIcon}/>
            
        </Flex>

       
        </Flex>
        </>
    )
}

export default Search;