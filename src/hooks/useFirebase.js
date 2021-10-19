import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import firebaseAuthentication from '../Firebase/firebase.init';


firebaseAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});

    const [error, setError] = useState('');

    const auth = getAuth();


    const googleSingin = () => {

        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            
    };

    const githubSignin = () => {
        const githubProvider = new GithubAuthProvider();

        return signInWithPopup(auth, githubProvider)
        
        
            
    };

    const emailPasswordCreate = (email, password, name) => {

        if(password.length < 6){
            setError('Password Must be 6 Characters length.')
        }


        return createUserWithEmailAndPassword(auth, email, password)
            
        

        
        // console.log(email,password);

    };



    const updateProfileName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .catch(error =>{
                setError(error.message)
            })
    };


    const emailPasswordSignin = (email, password) => {
        // console.log("hellow",email, password);
        return signInWithEmailAndPassword(auth, email, password)
           
    };

    // observeer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser("")
            })
    }



    return {
        user,
        setUser,
        error,
        googleSingin,
        githubSignin,
        emailPasswordCreate,
        updateProfileName,
        emailPasswordSignin,
        logout
    };
};

export default useFirebase;