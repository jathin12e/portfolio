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
                    <p style={{color:"gray"}}> I am a motivated and detail-oriented Computer Science graduate with a strong foundation in web development and programming.<br /> I 
am passionate about leveraging my technical skills to develop efficient and user-friendly applications. <br />I am seeking an opportunity to 
contribute to a dynamic organization while growing professionally.</p>
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