import React from 'react'
import './project.css'

const project = () => {
  return (
    <div className='bg'>
      <center>
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </center>
      <div className='project1'>

        <div style={{ textAlign: "center" }} className='project'>
          <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716137599/download_5_rsi5qk.png" className='image2' />
          <h3>Food Munch</h3>
          <div className='overlay'>
            <a href='https://jathinfoodmunch.ccbp.tech/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
          </div>
          <p className='description'>Developed a dynamic restaurant website with food showcase, ordering, and payment features.<br />Technologies: HTML, CSS, Bootstrap</p>
        </div>

        <div style={{ textAlign: "center" }} className='project'>
          <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1746204015/Screenshot_2025-05-02_220839_eso5ot.png" className='image2' />
          <h3>Extract Text from PDF and Image</h3>
          <div className='overlay'>
            <a href='https://cee7-2405-201-c02a-f107-2089-e689-e034-dd6b.ngrok-free.app/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
          </div>
          <p className='description'>AI app using GPT-4 and OCR to extract and query text from PDFs and images.<br />Technologies: Python, OpenCV, PyMuPDF, Tesseract</p>
        </div>

        <div style={{ textAlign: "center" }} className='content1'>
          <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716137600/Screenshot_2024-05-19_222156_kphfhn.png" className='image2' />
          <h3>Cognitut</h3>
          <div className='overlay'>
            <a href='https://cognitut-rahul-inx.streamlit.app/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
          </div>
          <p className='description'>Chatbot for academic queries with NLP-based responses.<br />Technologies: Python</p>
        </div>

        <div style={{ textAlign: "center" }} className='content1'>
          <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1735821577/istockphoto-1925414052-170667a_so10f2.webp" className='image2' />
          <h3>Pet World</h3>
          <div className='overlay'>
            <a href='https://petworld-1.onrender.com/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
          </div>
          <p className='description'>Pet adoption e-commerce platform with detailed listings and transactions.<br />Technologies: React.js, SQLite, Firebase, Express.js</p>
        </div>

      </div>
    </div>
  )
}

export default project
