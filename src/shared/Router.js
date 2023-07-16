import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/*" element={<Main />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
