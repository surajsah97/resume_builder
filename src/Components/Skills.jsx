import '../App.css'
import { useState, useContext,useEffect,useRef } from 'react';
import { FormContext } from './FormContext';
import { FaStar, FaPlusSquare,FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button";
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {Container,Row,Col} from 'react-bootstrap';
export default function Skills() {
    const [{skills=[]}, setForm] = useContext(FormContext);
    useEffect(()=>{
        var updatedForm = {step: 4}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [skill, setSkill] = useState(null);
    const skillRef = useRef(null);

    const updateSkill = e => {
        setSkill(e.target.value)
    }
    const update = e => {
        e.preventDefault();
        var newSkill = { skill: skill, rating: rating }
        setForm( form => ({
            ...form,
            ...{skills:skills.concat(newSkill)}
        }))
        setRating(null)
        skillRef.current.value = null;
        setSkill(null)
    }
    const removeSkill = i => {
        setForm( form => ({
            ...form,
            ...{skills:skills.splice(i,1)}
        }))
    }
    return (
        <div className='left'>
            <Container>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>Skills</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>What skills do you have?</h5>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <div className='stars' style={{display:'flex',alignItems:'center'}}>
                        <Col xs={6}>
                            {/* <input type="text" name="skill" id="skill" value={skill} onChange={updateSkill} /> */}
                            <Form.Group className="mb-3" controlId="formSkill">
                                <Form.Control type="text" ref={skillRef} value={skill} onChange={updateSkill} placeholder="Java" maxLength={10}/>
                            </Form.Group>

                        </Col>
                        <br />
                        <Col xs={6} style={{display:'flex',alignItems:'center'}}>
                            {/* creating array of 5 empty items and then mapping stars*/}
                            <form onSubmit={update}>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <label>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => { setRating(ratingValue) }}
                                                />
                                            <FaStar
                                                size={50}
                                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseOver={() => setHover(ratingValue)}
                                                onMouseOut={() => setHover(null)}
                                                />
                                        </label>
                                    )
                                })}
                                <FaPlusSquare
                                    color='green'
                                    size={40}
                                    onClick={update}
                                    />
                            </form>
                        </Col>
                    </div>
                </Row>
                <br />
                <Row>
                    <h3>Selected Skills:</h3>
                </Row>
                <br />
                {[...skills].map((skill, i) => (
                    <Row style={{margin:'4px'}}>
                        <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Col xs={6}>
                                {skill.skill}
                            </Col>
                            <Col xs={6}>
                            {[...Array(parseInt(skill.rating))].map((_, k) =>
                                <FaStar
                                    key={k}
                                    size={50}
                                    color={"#ffc107"}
                                />
                            )} 
                            {
                                (5-parseInt(skill.rating))>0 && [...Array(parseInt(5-skill.rating))].map((_, k) =>
                                    <FaStar
                                        key={k}
                                        size={50}
                                        color={"#e4e5e9"}
                                    />
                                )
                            }
                            <FaTrash 
                                color='red'
                                size={40}
                                onClick={(i) => removeSkill(i)}
                            />
                            </Col>
                        </Card>
                    </Row>
                ))}
                <br />
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/summary'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to='/page/extra'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}