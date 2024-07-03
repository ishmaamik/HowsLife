import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Icon, Input } from '@chakra-ui/react'

const Search=({setText})=>
{
    return(
        <>
        <Flex ml={"66px"} mt={"56px"} pos={"absolute"} zIndex={20}>
        <Input placeholder='Search or start a new chat' _focusVisible={"none"} _hover={"none"} _focus={{ outline: "none", boxShadow: "none" }} outlineColor={"none"} backgroundColor={"hsl(45, 29%, 95%)"} pl={10} w={"390px"} h={"30px"} onChange={(e)=>setText(e.target.value)}/>
        <Flex pos={"absolute"} zIndex={20} ml={"4px"} mt={"7px"}>
            <Icon fontSize={"small"} as={SearchIcon}/>
            
        </Flex>

       
        </Flex>
        </>
    )
}

export default Search;