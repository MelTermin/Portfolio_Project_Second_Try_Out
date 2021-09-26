import React, {useEffect, useRef} from 'react'
import { BiArrowToRight}  from 'react-icons/bi';
import { init } from 'ityped'
import Mel from '../images/Mel_pic.jpeg'

function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Developer", "Experienced with PostgresSQL, React, Node.js, & Javascript"]
    });
  }, []);

  return (
      <div>
          <div className="wrapper">
            <div className="about-left">
              <h1>Hi There, I'm <span className="text-profile" >Melissa </span></h1>
              <br/>
              <h2><span className="text-ref" ref= {textRef}> </span></h2>
              <br/>

              <div className="text-wrapper">
                <p>I am a newly graduate from Developers Institute's Fullstack Javascript program. I am passionate about building <strong> usable </strong>and <strong > visually captivating website. </strong></p>
                <br/>
                <p>My journey in Israel started in 2016 when I made aliyah from Istanbul, Turkey.</p>
                <br/>
                <p>I will love to hear from you whether about a job opportunity or just a chat. Feel free to get in touch with me.</p>
              </div>

              <br/>
              <br/>
            
            </div>
        
         <div className="imge-wrapper-right">
           <img src= {Mel} alt="pic" className="pic"></img>
             
           <div className="about-btn-wrapper">
                <a className="cv" rel="noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vQw1N-3ezzF2zhYvhTtJF8fOdS0vMkMn8gknucs40WR5RKnWfpt7hs_gIZuHkB5l0QsIkZ6Ck4fMrVq/pub" target="_blank">View CV</a>
                 <a className="portfolio-btn" href="/portfolio" ><BiArrowToRight size= {14}/> Portfolio</a>
               </div>
         </div>
       
       </div>
    </div>
  )
}

export default About
