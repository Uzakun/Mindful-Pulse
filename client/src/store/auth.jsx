import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");



    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }


    let isLoggedIn = !!token;
    console.log("Is Logged In",isLoggedIn)


    //tackling Logout funtionallity
    const LogoutUser = () => {
         setToken("");
         return localStorage.removeItem("token");
    }


    //JWT AUTHENTICATION => to get the currently loggedIn user Data

    const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`,
                }

            })


            if(response.ok){
                const data = await response.json();
                console.log("user data", data.userData)
                setUser(data.userData);
                setServices(data.data);
            }

        } catch (error) {

            console.log("Error Fetching user data");
        }
    }


     //to fetch the services data from the database

    const getServices = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            }) 
            
            if(response.ok){
                const data = await response.json()
                console.log(data.data);
                setServices(data.data);
            }
        } catch (error) {
            console.log(`Services Frontend Error ${error}`);
        }
    }



    useEffect(() => {
        //to fetch the services data from the database
        getServices();
        userAuthentication();
    }, [])



    return (<AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services }}>
        {children}
    </AuthContext.Provider>)
}



export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside the Provider")
    }
    return authContextValue;
}