
import axios from 'axios';
const url='http://localhost:8000';

export const addUser= async(data)=>
{
    try{
       await axios.post(`${url}/add`, data);
    }
    catch(error)
    {
        console.log("error while posting API", error.message);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const setConversation = async (data) => {
    try {
        let response= await axios.post(`${url}/conversation/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation= async(data)=>{
    try{
        let response= await axios.post(`${url}/conversation/get`, data);
        return response.data;
    }
    catch(error){
        console.log('Error while getting conversation api', error.message);
    }
}

export const addMessage=async(data)=>{
    try{
        let response= await axios.post(`${url}/message/add`, data);
        return response.data;
    }
    catch(error){
        console.log('Error while sending message', error.message);
    }
}

export const getMessage=async(id)=>{
    try{
        let response= await axios.post(`${url}/message/get/${id}`);
        return response.data;
    }
    catch(error){
        console.log('Error while getting messages', error);
    }

}