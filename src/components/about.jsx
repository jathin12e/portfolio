import React from 'react'
import './about.css'

const about = () => {
  return (
    <div className='background'>
        <center>
            <p>Get to Know More</p>
            <h1>About Me</h1>
        </center>
        <div className='about'>
            <div className='contenta1'>
                <img src='https://res.cloudinary.com/dgzuiurhr/image/upload/v1677358663/Screenshot_2022-12-11-15-37-03-33_1c337646f29875672b5a61192b9010f9_npiy75.jpg' className='image1'/>
                <div>
                    <p style={{color:"gray"}}>Recent Computer Science graduate with a strong foundation in web development.<br/>
                     Proficient in HTML, CSS, JavaScript, and React.js, demonstrated through multiple web projects.<br /> Seeking a challenging role in web development to leverage technical skills and expand expertise in backend technologies</p>
                    <div>
                        <h2 style={{textDecorationLine:"underline"}}>Education</h2>
                        <p>2020 - 2024</p>
                        <h4>B.E - Computer Science And Engineering in Vel Tech Multi Tech</h4>
                        <p>2018 - 2020</p>
                        <h4>MPC in Narayana Inter College</h4>
                        <p>2017 - 2018</p>
                        <h4>SSC - Jnana Jyothi Vidhya Mandhir</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about