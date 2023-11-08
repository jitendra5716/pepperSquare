import { Outlet } from "react-router-dom";
import style from "../styles/home.module.css";
import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";

const Home = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <Heading />
            <Main />
        </div>
        <Footer />
        </>
    )
};

export default Home;