import './Checkout.css'
import './CheckoutMobile.css'
import{CiLocationOn} from 'react-icons/ci'
import{BiTimeFive} from 'react-icons/bi'
import{BsCalendarDate} from 'react-icons/bs'
import LogoC from "../../assets/LogoC.png"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Checkout = () =>{
    const [data, setData] = useState()
    const { id } = useParams()

    const url = `https://creativents-on-boarding.onrender.com/api/events/${id}`
   useEffect(()=>{
    axios.get(url)
    .then(res=>{
        console.log(res.data.data);
        setData(res.data.data)
    })
    .catch(err=>{
        console.log(err)
    })
   },[])
//    console.log(data);

    return(
        <>
        {
            !data? <h1>Loading</h1>:
            <div className="checkoutcontainer">

            <div className="checkoutholder">

                <div className="checkoutlogo">
                <div className="checkoutimage">
                <img src={LogoC} alt=""/>
                <h2>reactivent</h2>
                </div>
                </div>

                <div className='checkouteventimage'>
                    <div className='imagecheckout'>
                        <img src={data.eventImages[0]} alt="" />
                    </div>
                {/* <div className='commentsection'>
                            <div className='todolistcomment'>
                                <div className='userprofile'></div>
                                <input className='comment' type="text" />
                                <button className='send'>Send</button>
                            </div>
                            <div className='dropdown'></div>
                        </div> */}
                </div>
                    
                    <p>The Curve Africa Final Project HackAthon Presentation</p>
                    <div className="checkouteventdetails">
                        <div className='checkoutvenue'>
                            <div className='checkoutdetails'>
                                <BsCalendarDate/>
                                <p>Friday, 11 August</p>
                            </div>
                            <div className='checkoutdetails'>
                                <BiTimeFive/>
                                <p>11:00 AM</p>
                            </div>
                            <div className='checkoutdetails'>
                                <CiLocationOn/>
                                <p>153 muyibi Street Olodi Apapa</p>
                            </div>
                        </div>
                        <div className='checkoutticket'>
                            <h2>Ticket Details</h2>

                            <div className='allticket'>
                                <h2>Ticket Quantity</h2>
                                <div className='chooseticket'>
                                    <button className='buttonticket'>+</button>
                                    <h5>0</h5>
                                    <button className='buttonticket'>-</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkoutdescription-checkout">
                        <div className="checkoutdescription">
                            <h1>Description</h1>
                            <p>The Hackathon Farewell Day is a fun and collaborative event where all members of the software program come together for a final hurrah. It's an opportunity to look back at the milestones we’ ve achieved, the challenges we overcame, and the memories we created during the program's lifetime.</p>
                        </div>

                       

                        <button className='booknow'>Book now</button>

                    </div>
            </div>
        </div>
        }
        </>
    )
}

export default Checkout
