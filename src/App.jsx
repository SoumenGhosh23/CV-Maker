import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const App = (() => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

            </BrowserRouter>
            <Footer />

        </>

    )
})
export default App;