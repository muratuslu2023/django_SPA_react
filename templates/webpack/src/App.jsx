import React, { lazy, useEffect,Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {setFavicon} from "./utils/favicon.js";

import favicon from "./img/favicon.ico";

const IndexPage = lazy(()=>(import("./Pages/IndexPage/IndexPage")));
const AboutPage = lazy(()=>(import("./Pages/AboutPage/AboutPage")));
const Layout = lazy(()=>(import("./Layout")))
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));

const App = () => {

    useEffect(() => {
        document.title = "My App"; // Set initial title
        setFavicon(favicon);
    }, []);

    return (
        <>
   <BrowserRouter>
        <Suspense fallback={<div>LOADING...</div>}>


            <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    </Route>
            </Routes>
        </Suspense>

    </BrowserRouter>
        </>
    )

};

export default App;