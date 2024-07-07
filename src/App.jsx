import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import './App.css';  // Ensure this contains the correct path to your CSS file
import ExampleImage from './components/home/natural.png'
import ExampleImage2 from './components/home/sky.png'
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
import Messenger from "./Messenger";
GoogleOAuthProvider

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <GoogleOAuthProvider clientId='400821693766-j1rti1fq54tt9lksas34e7o43m7eddfd.apps.googleusercontent.com'>
        {/* <Flex w="100vw" h="100vh" overflow={"hidden"} position={"relative"}>
          
           
               

           
            <SideBar className="sidebar" zIndex="3" />

           
<Image  src={ExampleImage2}
                alt="Nature landscape"
                objectFit="cover"
                w="100vw"
                h="100vh"
                
                top="0"
                left="0"
                />

        </Flex> */}
        <AccountProvider>
        <Messenger/>
        </AccountProvider>
        </GoogleOAuthProvider>

</>
    );
}

export default App;
