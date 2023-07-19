import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { CookiesProvider } from 'react-cookie';

const Router = () => {
    return (
        <CookiesProvider> 
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/*" element={<Main />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </CookiesProvider> 
    );
};

export default Router;
