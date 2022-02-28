import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
import '../App.css';

// delete all comments in the 
export default function Test(){
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
        degreeEnd="15-03-2023"
    },setForm] = useContext(FormContext)
    return(
        <div className="Test left">
            <Container style={{display:'flex',flexDirection:'row'}}>
                {/* left section */}
                <Col xs={4} style={{display:'flex',flexDirection:'column',border:'1px solid black'}}>
                    <Row className='profile' style={{flex:'1',width:'100%',borderBottom:'1px solid #002333',paddingLeft:'10px'}}>
                        <div className="image">
                            {/* <img src="../images/beluga.jpg" alt="profile" / > */}
                        </div>
                        <h3 className="name">{firstName+' '+lastName}</h3>
                        <p className="career">{profession}</p>
                    </Row>
                    <Row className='contact' style={{flex:1,paddingLeft:'10px'}}>
                        <h6 className='email'>{email}</h6>
                        <h6 className='phone'>{phone}</h6>
                    </Row>
                    <Row className='skills' style={{flex:1}}>

                    </Row>
                    <Row className='references' style={{flex:1}}>
                        
                    </Row>
                </Col>
                {/* right section */}
                <Col xs={8} style={{border:'1px solid red'}}>
                    {/* Main Content */}
                    <Row style={{border:'3px solid black',margin:'3px'}}>
                        {/* About Section */}
                        {/* Experience Section */}
                        {/* Education Section */}
                    </Row>
                    {/* Main Content */}
                    <Row style={{border:'3px solid blue',margin:'3px'}}>
                        {/* Awards */}
                    </Row>
                </Col>
            </Container>
        </div>
    )
}