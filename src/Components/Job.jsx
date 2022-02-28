import {Link} from 'react-router-dom';
import { useEffect,useContext,useRef } from 'react';
import { FormContext } from './FormContext';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
export default function Contact(){
    useEffect(()=>{
        var updatedForm = {step: 2}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [{jobTitle='',jobEmployer='',jobCity='',jobState='',jobStart='',jobEnd='',Jobs=[]}, setForm] = useContext(FormContext)
    const updateJT = e => { 
        const val=e.target.value;
        var updatedForm = {jobTitle: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJE = e => { 
        const val=e.target.value;
        var updatedForm = {jobEmployer: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJC = e => { 
        const val=e.target.value;
        var updatedForm = {jobCity: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJS = e => { 
        const val=e.target.value;
        var updatedForm = {jobState: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJStart = e => { 
        const val=e.target.value;
        var updatedForm = {jobStart: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateJEnd = e => { 
        const val=e.target.value;
        var updatedForm = {jobEnd: val}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const removeJob = i => {
        setForm( form => ({
            ...form,
            ...{Jobs:Jobs.splice(i,1)}
        }))
    }
    const titleRef = useRef(null);
    const employerRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const startRef = useRef(null);
    const endRef = useRef(null);
    const MoreJob = () => {
        var job = {
            title:jobTitle,
            employer:jobEmployer,
            city:jobCity,
            state:jobState,
            start:jobStart,
            end:jobEnd
        }
        setForm(form =>({
            ...form,
            ...{Jobs:Jobs.concat(job)}
        }))
        titleRef.current.value = null;
        employerRef.current.value = null;
        cityRef.current.value = null;
        stateRef.current.value = null;
        startRef.current.value = null;
        endRef.current.value = null;
    }
    return(
        <div className='Job left'>
            <Form>
            <Container >
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>Job Details</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>Where have worked in the past?</h5>
                    </Col>
                </Row>
                <hr />
                {[...Jobs].map((job,i)=>(
                    <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Col xs={5}>
                            <h4>{job.employer}</h4>
                        </Col>
                        <Col xs={5}>
                            <h3>{job.title}</h3>
                        </Col>
                        <Col xs={2}>
                            <FaTrash 
                                        color='red'
                                        size={30}
                                        onClick={(i) => removeJob(i)}
                            />
                        </Col>
                    </Card>
                ))}
                {Jobs.length!==0 && <hr/>}
                <form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobEmployer">
                                <Form.Label>Employer</Form.Label>
                                <Form.Control ref={employerRef} type="text" onChange={updateJE} placeholder="Google USA" />
                            </Form.Group>    
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobTitle">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control ref={titleRef} type="text" onChange={updateJT} placeholder="Developer Advocate" />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control ref={cityRef} type="text" onChange={updateJC} placeholder="LA" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobState">
                                <Form.Label>State</Form.Label>
                                <Form.Control ref={stateRef} type="text" onChange={updateJS} placeholder="CA" />
                            </Form.Group>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobStart">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control ref={startRef} type="text" onChange={updateJStart} placeholder="08-2019" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formJobEnd">
                                <Form.Label>Graduation Date</Form.Label>
                                <Form.Control ref={endRef} type="text" onChange={updateJEnd} placeholder="03-2023" />
                            </Form.Group>    
                        </Col>
                    </Row>
                </form>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/education'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Button variant='success' onClick={MoreJob} style={{marginRight:'2rem'}}>Add More</Button>
                        <Link to='/page/summary'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </Form>
        </div>
    )
}