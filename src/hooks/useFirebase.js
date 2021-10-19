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

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    };

    const githubSignin = () => {
        const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
    };

    const emailPasswordCreate = (email, password, name) => {

        if(password.length < 6){
            setError('Password Must be 6 Characters length.')
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
                updateProfileName(name)
                setUser(result.user)
            })
            .catch(error =>{
                setError(error.message)
            })
        

        
        console.log(email,password);

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
        console.log("hellow",email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError('')

            })
            .catch((error) => {
                setError(error.message);
            });
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