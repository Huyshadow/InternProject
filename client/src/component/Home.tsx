// import react from "@vitejs/plugin-react";
// import {useState} from "react";
import "../style/Home.css"
import DashBoard from "./DashBoard.tsx";
import User from "./User.tsx";
import Notification from "./Notification.tsx";

const Home = () => {
    return(
        <>
            <header className='header'>
                <h1 className='header-h1'>Manager System</h1>
                <h3 className='header-h3'>Welcome to Management Page</h3>
            </header>
            <section className='body'>
                <DashBoard/>
                <User/>
                <Notification/>
            </section>
        </>
    )
}

export default Home;