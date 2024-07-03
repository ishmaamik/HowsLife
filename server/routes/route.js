
import express from "express"
import { addUser, getUser } from "../controller/user-controller.js";
import {addConvo, getConvo} from "../controller/conversation-controller.js";
import { newMessage, getMessages } from "../controller/message-controller.js";


const route= express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', addConvo);
route.post('/conversation/get', getConvo);

route.post('/message/add', newMessage );
route.get('/message/get/:id', getMessages); //:id is variable for different convo ids

export default route;