import { useEffect, useState } from "react";
import firebaseInitialize from './../../Pages/Login/Firebase/firebase.init';
import { getAuth,
     signInWithPopup, 
     GoogleAuthProvider, 
     signInWithEmailAndPassword, 
     onAuthStateChanged,
     createUserWithEmailAndPassword,
     signOut
    } from "firebase/auth";

firebaseInitialize()
const useFirebase = () => {

    const [user, setUser]=useState('');
    const [authError, setAuthError] = useState('');


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // register
    const registerUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, password };
                setUser(newUser);
                
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
    }

    // login
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    // google login
    const signInGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
        }).catch((error) => {
            setAuthError(error.message);
        })
    }

    // observed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        })
            
    }

    return{
        user,
        signInGoogle,
        registerUser,
        loginUser,
        logout
    }
};

export default useFirebase;