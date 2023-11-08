import style from "../styles/main.module.css";
import Event from "./Event";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInitialData } from "../redux/eventReducer";
import { eventSelector } from "../redux/eventReducer";
import { useEffect } from "react";
import { filterEvents } from "../redux/eventReducer";
import { NavLink } from "react-router-dom";

const Main = ()=>{

    const dispatch = useDispatch();
    const {events,loading} = useSelector(eventSelector);

    useEffect(()=>{
        dispatch(getInitialData());
    },[])

    const handleAll = (e)=>{
        e.preventDefault();
        dispatch(getInitialData());
    }
    const handlePlantation = (e)=>{
        e.preventDefault();
        dispatch(filterEvents("Plantation day"));
    }

    // console.log(events);
    return(
        <>
       
        <div className={style.outerDiv}>
            <div className={style.mainHeader}>
                <ul>
                    <li><button onClick={handleAll} > All </button></li>
                    <li><button onClick={handlePlantation}  value="plantation day"> Plantation day </button></li>
                    <li><button onClick={()=>{dispatch(filterEvents("Annual day"))}} value="Annual Day"> Annual Day </button></li>
                    <li><button onClick={()=>{dispatch(filterEvents("Sports day"))}} value="Sports Day"> Sports Day </button></li>
                    <li><button onClick={()=>{dispatch(filterEvents("NCC (National cadet corps)"))}} value="NCC (National cadet corps)"> NCC (National cadet corps) </button></li>
                    <li><button onClick={()=>{dispatch(filterEvents("Science exhibition"))}} value="Science labs"> Science labs  </button></li>
                    <li><button onClick={()=>{dispatch(filterEvents("Alumni association"))}} value="Alumni association"> Alumni association </button></li>
                    <li><button onClickCapture={()=>{dispatch(filterEvents("Cleanliness drive"))}} value="Cleanliness drive"> Cleanliness drive </button></li>
                </ul>
            </div>
            <div className={style.listDiv}>
            {/* {
            loading && 
            <h1 style={{textAlign:"center"}}>
                Loading.....
            </h1>
        } */}
        {
           events && events.data &&  events.data.map((evnt,i)=>(
                <Event key={i} evnt={evnt}/>
            ))
        }
            </div>
            <div className={style.btnDiv}>
            <button className={style.btn}>
                View More
            </button>
            </div>
            
        </div>
        
        </>
    )
};

export default Main;