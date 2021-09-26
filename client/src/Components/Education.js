import React from 'react'
import educationDetails from '../EducationDetails'

function Education() {
  return (
    <div>
      <h1 className="education-title">Education</h1>
      <div class="timeline-section">
          {
        educationDetails.map((item) => {
          return (//dont forget to return it Melissa!!//
           
            <div  key= {item.id}class="timeline-items">
            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
             <div className="timeline-content">
               <h3>{item.education_place}</h3>
               <p>{item.details}</p>
             </div>
          </div>
        </div> )
        })
      }
       

          
        </div>
    </div>
  )
}

export default Education
