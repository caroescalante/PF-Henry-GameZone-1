import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileUser = () => {

    const {user, isAuthenticated} = useAuth0();

    return (
        // <div>
        // {JSON.stringify(user)}
        // </div>
        isAuthenticated && (

            
            <div> 
                
                <img src={user.picture} />
                <h2> {user.given_name} </h2>
                <h4>{user.family_name}</h4>
                <h4>{user.email}</h4>

            </div>
        )
    )
};

export default ProfileUser;