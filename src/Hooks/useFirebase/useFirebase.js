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
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // register
    const registerUser = (email, password, navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, password };
                setUser(newUser);
                navigate('/');
                
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // google login
    const signInGoogle = (location, navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser( result.user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    // observed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        })
            .finally(() => setIsLoading(false));
    }

    return{
        user,
        signInGoogle,
        registerUser,
        loginUser,
        logout,
        authError,
        isLoading
    }
};

export default useFirebase;