import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { theme } from './mui-theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveBox } from "./components/utils";
import Jobs from "./pages/Jobs.js";
import Workers from "./pages/Workers.js";
import React, { useContext, useState } from "react";
import SearchJobDetail from "./components/search/SearchJobDetail";
import SearchWorkerDetail from "./components/workers/SearchWorkerDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const GlobalData = React.createContext();
export const useGlobalDataContext = () => useContext(GlobalData);

function App() {

    const [ itemDetail, setItemDetail ] = useState({});
    const [ searchModal, setSearchModal] = useState(false);
    const [ pageName, setPageName ] = useState('jobs');
    const [ category, setCategory ] = useState('Any');

    const global = {
        itemDetail, setItemDetail,
        setSearchModal,
        pageName, setPageName,
        category, setCategory 
    }
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalData.Provider value={global}>
                <Router>
                    <Nav />
                    {(searchModal && pageName === "jobs") && <SearchJobDetail /> }
                    {(searchModal && pageName === "workers") && <SearchWorkerDetail /> }
                    <ResponsiveBox>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/workers" element={<Workers />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </ResponsiveBox>
                    <Footer />
                </Router>
            </GlobalData.Provider>
        </ThemeProvider>
    );
}

export default App;
