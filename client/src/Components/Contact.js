import React,{useState} from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import Result from './Result';



function Contact() {

  const[firstname,setFirstname]=useState("")
  const[lastname,setLastname]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMessage]=useState("")
  const[isSent ,setIsSent]=useState(false)

  const handleSubmit= (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ji1fajk', 'template_qw4gkjw', e.target, "user_JdMRQWpjtB3CuM8dRJkjN")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // const blog= {firstname,lastname,email,message}
    // console.log(blog)
    // fetch("http://localhost:5000/contactform", {
    //   method:"POST",
    //   headers: {"Content-Type": "application/json"},
    //   body:JSON.stringify(blog)
    // }).then(()=> {
    //     console.log("new added")
    // })
    setFirstname("")
    setLastname("")
    setEmail("")
    setMessage("")
    setIsSent(true)
  }

  setTimeout(()=>{
    setIsSent(false)
  },6000)

  console.log(isSent)

  return (
    <div className="signup-box" id="contact">
      <div className="signup-left"></div>
      <div className="signup-right">
      
      <form className="form" onSubmit={handleSubmit} >
      <h2 className="sign-up-text">Contact</h2>
       <label>First Name:</label>
      <input className="input-text" name="firstname" value= {firstname} type="text" placeholder="Please type your name" onChange= {(e) => setFirstname(e.target.value)}
        />

      <br></br>
      <label>Last Name:</label>
      <input className="input-text" value= {lastname} name="lastname" type="text" placeholder="Please type your last name"  onChange= {(e) => setLastname(e.target.value)}/>
    
        <label>Email:</label>
       <input className="input-text" value={email} type="text" name="email" placeholder="Please type your email"  onChange= {(e) => setEmail(e.target.value)}/>

      <label>Message:</label>
       <textarea type="text" value={message} className="field" name="message"   onChange= {(e) => setMessage(e.target.value)}></textarea>

       <div>{isSent ? <Result />:null}</div>
        
        <button className="contact-btn" >Send</button>
            
            <div className="social-media">
                <a  href='https://github.com/MelTermin' target="_blank" rel="noreferrer"> <AiFillGithub size={32} /></a> 
                <a href="https://www.linkedin.com/in/melissa-termin-2151b0b5/" target="_blank" rel="noreferrer"> <AiFillLinkedin size={32}/> </a>
                <a href="https://twitter.com/Meltermin" target="_blank" rel="noreferrer">  <AiFillTwitterCircle size={32}/></a>
                  
            </div>
          </form>
</div>
</div>

      
  
  )
}

export default Contact

