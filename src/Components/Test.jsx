import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
import '../App.css';
import avatar from './avatar.jpg'
import Pdf from "react-to-pdf";
export default function Footer(){
    const navStyle = {
        background:'black',
        color:'white'
        
      };
    const [{
        firstName="First",
        lastName="Last",
        profession="Full Stack Developer",
        city="Faridabad",
        state="Haryana",
        zip="121001",
        email="manishswami.dev@gmail.com",
        phone="+919876543210",
        jobTitle="Open Source Contributor",
        jobEmployer="Github",
        jobCity="remote",
        jobState="",
        jobStart="01-05-2020",
        jobEnd="01-12-2022",
        collegeName="VIT",
        collegeLocation="Chennai",
        degree="B.Tech",
        stream="CSE",
        degreeStart="07-07-2019",
        degreeEnd="15-03-2023",
        skills=[],
        Summary=[]
    },setForm] = useContext(FormContext)
    return(
        <div className="right">  
            <div className="resume">
                <section className="left-section">
                    <div className="left-content">
                        <div className="profile">
                            <div className="image">
                                <img src={avatar} alt="" / >
                            </div>
                            <h2 className="name">{firstName+' '+lastName}</h2>
                            <p className="career">{profession}</p>
                        </div>
                        <div className="contact-info">
                            <h3 className="main-title">Contact Info</h3>
                            <ul>
                                <li>{phone}</li>
                                <li>{email}</li>
                                <li>{city} {state} {zip} </li>
                            </ul>
                        </div>
                        <div className="skills-section">
                            <h3 className="main-title">Skills</h3>
                            {[...skills].map((skill)=>(<h3 style={{color:'white'}} className="skill-title">{skill.skill}</h3>))}
                        </div>
                    </div>
                </section>
                <section className="right-section">
                    <div className="right-main-content">
                        <section className="about sect">
                            <h2 className="right-title">About Me</h2>
                            <p className="para">
                                {[...Summary].map((skill)=>(<span style={{color:'black'}} className="skill-title">{skill}&nbsp;</span>))}
                            
                            </p>
                        </section>
                        <section className="experince sect">
                        <h2 className="right-title">Experience</h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Microsoft</h5>
                                <p className="para">2017 - 2019</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Junior Developer</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Google Inc</h5>
                                <p className="para">2019 - 2020</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Lead Web developer</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Google Inc</h5>
                                <p className="para">2019 - 2020</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Lead Web developer</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Apple</h5>
                                <p className="para">2020 - Present</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Senior Developer</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section className="education sect">
                        <h2 className="right-title">education</h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Cheney School</h5>
                                <p className="para">2015 - 2016</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Gcse's</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Cheney School</h5>
                                <p className="para">2016 - 2018</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">A - Levels</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">University of Sussex</h5>
                                <p className="para">2018 - Present</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Computer Science</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="awards sect">
                    <h2 className="right-title">Awards</h2>
                    <div className="timeline">
                        <div className="left-tl-content">
                            <h5 className="tl-title">Microsoft</h5>
                            <p className="para">June 2016</p>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">Excellent Work</h5>
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                    voluptatem deleniti, 
                                    laboriosam odio nobis quae fugit facilis quo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="left-tl-content">
                            <h5 className="tl-title">Alphabet Inc</h5>
                            <p className="para">June 2016</p>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">The Star Employee</h5>
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                    voluptatem deleniti, 
                                    laboriosam odio nobis quae fugit facilis quo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                </section>
            </div>          
        </div>
    )
}