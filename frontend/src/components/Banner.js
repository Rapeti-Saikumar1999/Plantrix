import react from 'react';
import "./Banner.css";
import welcome from "../assets/welcome.png";
import { Navigate, useNavigate } from 'react-router-dom';
function Banner() {

    const Navigate = useNavigate();
    const  handleClick=(e)=>
    {
        e.preventDefault();
        Navigate("/login");
    }

    return (
        <div className="Banner">
            <div className="BannerContainer">
                <div className='BannerName' >
                <h1>Plantrix</h1>
            </div>
            <div className='BannerTitle' >
                <p>Simplify your workflow, amplify your productivity.</p>
            </div>
            <div className='BannerContent'>
                <p className='BannerText'>
                    Experience the world’s smartest task management system — trusted by over 1 million users across the globe.


                </p>
                <img src={welcome} alt="checkmark"  className='BannerImage'/>
            </div>

            <div className="BannerButton"><button onClick={handleClick}>Continue</button></div>
            </div>
            
        </div>
    )
}


export default Banner;