import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const initialozeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initialozeAuthentication;