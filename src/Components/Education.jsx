import {Link} from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'

export default function Address(){
    const stylish = {
            padding: '10px 20px',
            color: '#03e9f4',
            fontSize: '16px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            overflow: 'hidden',
            transition: '.5s',
            marginTop:'5px',
            letterSpacing: '4px',
            background: 'black'
    }
    useEffect(()=>{
        var updatedForm = {step: 1}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [{collegeName='',collegeLocation='',degree='',stream='',degreeStart='',degreeEnd='',Edu=[]},setForm] = useContext(FormContext)
    const updateCN = e => { 
        const val=e.target.value;
        var updatedForm = {collegeName: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCL = e => { 
        const val=e.target.value;
        var updatedForm = {collegeLocation: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateD = e => { 
        const val=e.target.value;
        var updatedForm = {degree: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateS = e => { 
        const val=e.target.value;
        var updatedForm = {stream: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateDS = e => { 
        const val=e.target.value;
        var updatedForm = {degreeStart: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateDE = e => { 
        const val=e.target.value;
        var updatedForm = {degreeEnd: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const removeEdu = i => {
        setForm( form => ({
            ...form,
            ...{Edu:Edu.splice(i,1)}
        }))
    }
    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const degreeRef = useRef(null);
    const streamRef = useRef(null);
    const startRef = useRef(null);
    const endRef = useRef(null);
    const MoreEdu = () => {
        var edu = {
            "institute":collegeName,
            "location":collegeLocation,
            "degree":degree,
            "stream":stream,
            "start":degreeStart,
            "end":degreeEnd
        }
        setForm(form =>({
            ...form,
            ...{Edu:Edu.concat(edu)}
        }))
        nameRef.current.value = null;
        locationRef.current.value = null;
        degreeRef.current.value = null;
        streamRef.current.value = null;
        startRef.current.value = null;
        endRef.current.value = null;
    }
    return(
        <div className='Education left'>
            <Form>
            <Container >
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>Education Details</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>Where did you study?</h5>
                    </Col>
                </Row>
                <hr />
                {[...Edu].map((edu,i)=>(
                    <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Col xs={5}>
                            <h4>{edu.institute+" "+edu.location}</h4>
                        </Col>
                        <Col xs={5}>
                            <h3>{edu.degree}</h3>
                        </Col>
                        <Col xs={2}>
                            <FaTrash 
                                        color='red'
                                        size={30}
                                        onClick={(i) => removeEdu(i)}
                            />
                        </Col>
                    </Card>
                ))}
                {Edu.length!==0 && <hr/>}
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCollegeName">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} onChange={updateCN} placeholder="VIT" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCollegeLocation">
                            <Form.Label>College Location</Form.Label>
                            <Form.Control type="text" ref={locationRef} onChange={updateCL} placeholder="Chennai" />
                        </Form.Group>    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formDegree">
                            <Form.Label>Degree Type</Form.Label>
                            <Form.Control type="text" ref={degreeRef} onChange={updateD} placeholder="Bachelor's of Technology" />
                        </Form.Group>  
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formStream">
                            <Form.Label>Stream</Form.Label>
                            <Form.Control type="text" ref={streamRef} onChange={updateS} placeholder="CSE" />
                        </Form.Group>  
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDegreeStart">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="text" ref={startRef} onChange={updateDS} placeholder="01/08/2019" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDegreeEnd">
                            <Form.Label>Graduation Date</Form.Label>
                            <Form.Control type="text" ref={endRef} onChange={updateDE} placeholder="31/03/2023" />
                        </Form.Group>    
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Button onClick={MoreEdu} variant='success' style={{marginRight:'2rem'}}>Add More</Button>
                        <Link to='/page/job'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </Form>
        </div>
    )
}