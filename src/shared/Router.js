import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Add from "../components/Add/add";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/add" element={<Add />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
