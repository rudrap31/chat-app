import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useSignup = () => {
  const [loading, setLoading] =  useState(false);
  const {authUser, setAuthUser} = useAuthContext();

  const signup = async({fullName, username, password, confirmPassword}) => {
    const success = handleInputErrors({fullName, username, password, confirmPassword});
    if (!success) return;

    setLoading(true);

    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, username, password, confirmPassword})
        })

        const data = await res.json();
        if (data.error){
            throw new Error(data.error)
        }
        //local storage
        localStorage.setItem("chat-user", JSON.stringify(data))
        //context
        setAuthUser(data);
        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };

  return { loading, signup}
};

export default useSignup


function handleInputErrors({fullName, username, password, confirmPassword}) {
    if(!fullName || !username || !password || !confirmPassword) {
        toast.error("Some of the fields are missing")
        return false;
    }

    if (password != confirmPassword) {
        toast.error("Passwords do not match")
    }


    if (password.length < 6){
        toast.error("Passwords must be at least 6 characters")
        return false
    }

    return true;
}