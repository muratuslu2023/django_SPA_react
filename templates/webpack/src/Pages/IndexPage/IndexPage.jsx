import React, { useEffect } from "react";
import {} from "react";
import "./IndexPage.css";
import favicon from "../../img/favicon.ico"
import { setFavicon } from "../../utils/favicon";

const IndexPage = () => {

    useEffect(()=>{
        document.title = "HomePage";
        setFavicon(favicon);    
    },[]);


    return (
        <>
            <div>
                <h1 className="col">HelloWorld!(Index)</h1>
            </div>
        </>
    )
};

export default IndexPage;