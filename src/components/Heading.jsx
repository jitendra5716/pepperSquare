import style from "../styles/heading.module.css";

const Heading = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <img src="https://www.dbcdharmapuri.edu.in/common/uploads/ckeditor/1686033135_IMG_20221118_124238.jpg"/>
            <div className={style.innerDiv}>
                <h2>
                Our events gallery
                </h2>
                <p>Events at DBTR are filled with joyous occasions,  cultural <br /> gatherings, and learning opportunities that bring us all together.</p>
            </div>
        </div>
        
        </>
    )
};

export default Heading;