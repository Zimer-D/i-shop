import { SetStateAction, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./Pages/Cart";
import MainPage from "./Pages/MainPage/MainPage";


const Layout = () => {
    const [searchWords, setSearchWords] = useState<string>('')
 
    return (
        <>
            <Header setSearchWords={setSearchWords} searchWords={searchWords} />
            <Routes>
                <Route path='/' element={<MainPage searchTerm={searchWords} />} />
                {/* <Route path='/basket' element={<Cart />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;