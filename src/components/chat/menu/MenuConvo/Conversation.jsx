import { Box, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUsers } from "../../../../service/api";
import OneConvo from "./OneConvo";
import user from "../../../../../../server/model/User";
import { AccountContext } from "../../../../context/AccountProvider";
import { useContext } from "react";


const Conversation=()=>
{
    const[users, setUsers]=useState([]);
    const {account}= useContext(AccountContext);

    useEffect(()=>
{
    const fetchData= async()=>
    {
        let response= await getUsers();
        setUsers(response);
    }
    fetchData()
}, [])
return(
    <>
    <Box pos={"absolute"} zIndex={100} mt={100} ml={20}>
    {
       users && users.map((user, index) => (
        user.sub !== account.sub && 
            <>
                <OneConvo user={user} />
                <Divider p={2} opacity={0.6}/>
            </>
    ))
    }
     
    </Box>
   
    </>
)
}

export default Conversation;