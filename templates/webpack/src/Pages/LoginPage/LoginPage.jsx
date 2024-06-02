import React from "react";
import { setCookies } from "../../utils/cookies";

const LoginPage = () => {

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const isOK = true;
        if (isOK) {
            setCookies("session_id","123456789",10);
            console.log("The cookie has been setted successfully!");
        }
    };


    return (
        <>
            <div>
                <form onSubmit={formSubmitHandler}>
                    <input type="text" />
                    <input type="password" name=""/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )

};

export default LoginPage;