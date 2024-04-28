import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    

    console.log(user)
    // create account 

    const createAccount = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update Profile 

    const userProfileUpdate = (name,image) =>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL:image})
    }

    //  Login 

    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign in with google 
    const signInWithPop =(provider)=>{
        return signInWithPopup(auth,provider)
    }

    // on auth state change 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
            
        });
        return ()=>{
            unSubscribe()
        }
     },[])

    //  Log Out 

    const LogOut = ()=>{
        return signOut(auth)
    }

    // all tourists spots

    const [touristsSpots,setTouristsSpots] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5000/tourists')
        .then(res=>res.json())
        .then(data=>{
            
            setTouristsSpots(data)
        })
        .catch()
    },[])
    
    


    const authInfo = {
        user,
        createAccount,
        logInUser,
        signInWithPop,
        loading,
        LogOut,
        userProfileUpdate,
        setUser,
        touristsSpots
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
