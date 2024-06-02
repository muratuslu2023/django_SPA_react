import React,{useEffect} from "react";
import question from "../../img/question.ico"
import { setFavicon } from "../../utils/favicon";

const AboutPage = () => {

    useEffect(()=>{
        document.title = "AboutPage";
        setFavicon(question);

    },[]);
    return (
        <>
            <div>
                <h1>HelloWorld!(About)</h1>
            </div>
        </>
    )
};

export default AboutPage;