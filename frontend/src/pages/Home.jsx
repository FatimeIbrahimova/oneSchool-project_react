import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import './style.css'

const Home = () => {
  const [state,setState]=useState({firstName:"",lastName:"",subject:"",email:"",message:""})

  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const addData=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/users",state)
    console.log("salam")
    setState("")
  }
  return (
    <>
        <div className="hero">
      <div className="hero-img">
        <img
          src="https://preview.colorlib.com/theme/oneschool/images/hero_1.jpg"
          alt="img"
        />
      </div>
      <div className="hero-desc">
        <div className="hero-desc_left">
          <h1>Learn From The Expert</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.
          </p>
          <button className="hero-btn">Admission Now</button>
        </div>
        <div className="hero-desc_right">
          <div className='form'>
          <div className='sign'>
            <div><h2>Sign Up</h2></div>
            <form>
                <input type="text" placeholder="Email Address"/>
                <input type="number" placeholder="Password"/>
                <input type="number" placeholder="Re-Type Password"/>
            </form>
            <button className='sign-btn'>Sign Up</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='second-sec'>
      <div className='courses'>
         <h1>Courses</h1>
      </div>
      <div className='second-sec_cards'>
        <div className='card'>
         <div className="card-img">
          <img src="https://preview.colorlib.com/theme/oneschool/images/img_2.jpg" alt="img"/>
         </div>
         <div className='price'>
          <span>$99</span>
         </div>
         <div className='card-desc'>
           <span>4 lessons / 12 week</span>
           <p style={{color:"#7971ea"}}>JS Programming Language</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos?</p>
           <hr style={{color:"gray"}}/>
           <span>2,193 students</span>
         </div>
        </div>
        <div className='card'>
         <div className="card-img">
          <img src="https://preview.colorlib.com/theme/oneschool/images/img_5.jpg" alt="img"/>
         </div>
         <div className='price'>
          <span>$20</span>
         </div>
         <div className='card-desc'>
           <span>4 lessons / 12 week</span>
           <p style={{color:"#7971ea"}}>Logo Design Course</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos?</p>
           <hr style={{color:"gray"}}/>
           <span>2,193 students</span>
         </div>
        </div>
        <div className='card'>
         <div className="card-img">
          <img src="https://preview.colorlib.com/theme/oneschool/images/img_3.jpg" alt="img"/>
         </div>
         <div className='price'>
          <span>$99</span>
         </div>
         <div className='card-desc'>
           <span>4 lessons / 12 week</span>
           <p style={{color:"#7971ea"}}>Study Law of Physics</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos?</p>
           <hr style={{color:"gray"}}/>
           <span style={{marginBottom:10}}>2,193 students</span>
         </div>
        </div>
      </div>
    </div>
    <div className='third-sec'>
        <h1>Our Programs</h1>
         <p style={{width:600}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut &nbsp;neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;repudiandae in quas quibusdam ullam, illum sed veniam!</p>
    </div>
    <div className='fourth-sec'>
       <div className='fourth-sec_left'>
        <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="img"/>
       </div>
       <div className='fourth-sec_right'>
          <h2>We Are Excellent In Education</h2>
          <p style={{color:"#808080"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <p style={{color:"#7971ea"}}>22,931 Yearly Graduates</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-building-columns"></i></div>
            <p style={{color:"#7971ea"}}>150 Universities Worldwide</p>
          </div>
       </div>
    </div>
    <div className='fifth-sec'>
    <div className='fourth-sec_right'>
          <h2>Strive for Excellent</h2>
          <p style={{color:"#808080"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <p style={{color:"#7971ea"}}>22,931 Yearly Graduates</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-building-columns"></i></div>
            <p style={{color:"#7971ea"}}>150 Universities Worldwide</p>
          </div>
       </div>
    <div className='fourth-sec_left'>
        <img src="	https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="img"/>
       </div>
    </div>
    <div className='sixth-sec'>
       <div className='fourth-sec_left'>
        <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teacher.svg" alt="img"/>
       </div>
       <div className='fourth-sec_right'>
          <h2>Education is life</h2>
          <p style={{color:"#808080"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <p style={{color:"#7971ea"}}>22,931 Yearly Graduates</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className='graduate-icon'><i class="fa-solid fa-building-columns"></i></div>
            <p style={{color:"#7971ea"}}>150 Universities Worldwide</p>
          </div>
       </div>
    </div>
    <div className='seventh-sec'>
        <h1>Our Teachers</h1>
        <div className='seventh-sec_desc'>
        <p style={{width:600}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut &nbsp;neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        </div>
    </div>
    <div className='eighth-sec'>
      <div className='eighth-sec_card'>
         <div className='card_img'>
            <img src="	https://preview.colorlib.com/theme/oneschool/images/person_1.jpg" alt="img"/>
            <div>
            <h3>Benjamin Stone</h3>
            <p style={{color:"#adb5bd"}}>Physics Teacher</p>
            </div>
            <p style={{width:200,color:"#808080",marginBottom:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
         </div>
      </div>
      <div className='eighth-sec_card'>
         <div className='card_img'>
            <img src="	https://preview.colorlib.com/theme/oneschool/images/person_2.jpg" alt="img"/>
            <div>
            <h3>Benjamin Stone</h3>
            <p style={{color:"#adb5bd"}}>Physics Teacher</p>
            </div>
            <p style={{width:200,color:"#808080",marginBottom:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
         </div>
      </div>
      <div className='eighth-sec_card'>
         <div className='card_img'>
            <img src="	https://preview.colorlib.com/theme/oneschool/images/person_3.jpg" alt="img"/>
            <div>
            <h3>Benjamin Stone</h3>
            <p style={{color:"#adb5bd"}}>Physics Teacher</p>
            </div>
            <p style={{width:200,color:"#808080",marginBottom:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
         </div>
      </div>
    </div>
    <div className='ninth-sec'>
      <div className='ninth-sec_desc'>
      <div className='parallax'>
      <div className='ninth-sec_img' style={{display:"flex",justifyContent:"center"}}>
        <img  src="https://preview.colorlib.com/theme/oneschool/images/person_4.jpg" alt="img"/>
      </div>
        <h3 style={{display:"flex",justifyContent:"center",color:"white"}}>Jerome Jensen</h3>
        <blockquote>
            <p style={{display:"flex",justifyContent:"center",color:"white"}}>“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda ”</p>
        </blockquote>
      </div>
     
      </div>
    </div>
    <div className='eleventh-sec'>
       <div className='eleventh-sec_desc'>
        <h1>Message Us</h1>
        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
       </div>
       <form style={{width:450}}>
        <input type="text" placeholder='first name' name="firstName" onChange={(e)=>handleChange(e)}/>
        <input type="text" placeholder='last name' name="lastName" onChange={(e)=>handleChange(e)}/>
        <input type="text" placeholder='subject' name="subject" onChange={(e)=>handleChange(e)}/><br/>
       <input type="text" placeholder='email' name="email" onChange={(e)=>handleChange(e)}/><br/>
       <textarea placeholder='Write your message here' name="message" onChange={(e)=>handleChange(e)}/><br/>
       <button className='send-btn' onClick={addData}>Send Message</button>
       </form>
       <form>
       
       </form>
    </div>
    </>
  )
}

export default Home