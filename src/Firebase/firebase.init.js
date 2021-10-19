import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const firebaseAuthentication = ()=>{
    return initializeApp(firebaseConfig);
};

export default firebaseAuthentication ;