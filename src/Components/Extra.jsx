import '../App.css'
import { useState, useContext,useEffect,useCallback } from 'react';
import { FormContext } from './FormContext';
import { FaStar, FaPlusSquare,FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button";
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import {Container,Row,Col} from 'react-bootstrap';

export default function Extra() {
    // const [{languages=[]}, setForm] = useContext(FormContext);
    const [form, setForm] = useContext(FormContext);
    useEffect(()=>{
        var updatedForm = {step: 5}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [ratingI, setRatingI] = useState(null);
    const [hoverI, setHoverI] = useState(null);
    const [ratingC, setRatingC] = useState(null);
    const [hoverC, setHoverC] = useState(null);
    const [date, setDate] = useState(null);
    const [languages, setlanguages] = useState([]);
    const [language, setlanguage] = useState(null);
    const [interests, setinterests] = useState([]);
    const [interest, setinterest] = useState(null);
    const [certificates, setCertificates] = useState([]);
    const [certificate, setCertificate] = useState(null);
    const updateinterest = e => {
        setinterest(e.target.value)
    }
    const updatelanguage = e => {
        setlanguage(e.target.value)
    }
    const updatecertificate = e => {
        setCertificate(e.target.value)
    }
    const updatedate = e => {
        setDate(e.target.value)
    }
    const updateL = e => {
        e.preventDefault();
        var newlanguage = { language: language, rating: rating }
        setlanguages(languages.concat(newlanguage))
        // setForm( form => ({
        //     ...form,
        //     ...{Summary:Summary.filter(k => k !== n.name)}
        // }))
        setRating(null)
        setlanguage(null)
    }
    
    const updateI = e => {
        e.preventDefault();
        var newinterest = { interest: interest, rating: rating }
        setinterests(interests.concat(newinterest))
        // setForm( form => ({
        //     ...form,
        //     ...{Summary:Summary.filter(k => k !== n.name)}
        // }))
        setRating(null)
        setinterest(null)
    }
    
    const updateC = e => {
        e.preventDefault();
        var newcertificate = { cert_name: certificate, cert_date: date }
        setCertificates(certificates.concat(newcertificate))
        // setForm( form => ({
        //     ...form,
        //     ...{Summary:Summary.filter(k => k !== n.name)}
        // }))
        setRating(null)
        setCertificate(null)
    }

    const [L, setL] = useState(false);
    const [I, setI] = useState(false);
    const [C, setC] = useState(false);
    return (
        <div className='left'>
            <Container>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>This is Extra Section</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>Add Extra Fields to your resume?</h5>
                    </Col>
                </Row>
                {/* Languages */}
                <Row>
                    <h3><FormCheckInput
                        type={"checkbox"}
                        id={`default-checkbox`}
                        checked={L}
                        onChange={(e)=>setL(e.target.checked)}
                    /> &nbsp;Languages:</h3>
                </Row>
                {L ?
                    <>
                        <Row>
                            <div className='stars' style={{display:'flex',alignItems:'center'}}>
                                <Col xs={6}>
                                    {/* <input type="text" name="language" id="language" value={language} onChange={updatelanguage} /> */}
                                    <Form.Group className="mb-3" controlId="formlanguage">
                                        <Form.Control type="text" value={language} onChange={updatelanguage} placeholder="Java" maxLength={10}/>
                                    </Form.Group>

                                </Col>
                                <br />
                                <Col xs={6} style={{display:'flex',alignItems:'center'}}>
                                    {/* creating array of 5 empty items and then mapping stars*/}
                                    <form onSubmit={updateL}>
                                        {[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1;
                                            return (
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        checked={ratingValue}
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
                                            onClick={updateL}
                                            />
                                    </form>
                                </Col>
                            </div>
                        </Row>
                        {[...languages].map((language, i) => (
                            <Row style={{margin:'4px'}}>
                                <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <Col xs={6}>
                                        {language.language}
                                    </Col>
                                    <Col xs={6}>
                                    {[...Array(parseInt(language.rating))].map((_, k) =>
                                        <FaStar
                                            key={k}
                                            size={50}
                                            color={"#ffc107"}
                                        />
                                    )} 
                                    {
                                        (5-parseInt(language.rating))>0 && [...Array(parseInt(5-language.rating))].map((_, k) =>
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
                                        onClick={() => setlanguages((languages) => {
                                            const newlanguages = [...languages];
                                            newlanguages.splice(i, 1);
                                            return newlanguages
                                        })}
                                    />
                                    </Col>
                                </Card>
                            </Row>
                        ))}
                    </> 
                :
                    <br />
                }
                {/* Interests */}
                <Row>
                    <h3><FormCheckInput
                        type={"checkbox"}
                        id={`default-checkbox`}
                        checked={I}
                        onChange={(e)=>setI(e.target.checked)}
                        /> &nbsp;Interests:</h3>
                </Row>
                {I ?
                    <>
                        <Row>
                            <div className='stars' style={{display:'flex',alignItems:'center'}}>
                                <Col xs={6}>
                                    {/* <input type="text" name="language" id="language" value={language} onChange={updatelanguage} /> */}
                                    <Form.Group className="mb-3" controlId="formlanguage">
                                        <Form.Control type="text" value={language} onChange={updatelanguage} placeholder="Java" maxLength={10}/>
                                    </Form.Group>

                                </Col>
                                <br />
                                <Col xs={6} style={{display:'flex',alignItems:'center'}}>
                                    {/* creating array of 5 empty items and then mapping stars*/}
                                    <form onSubmit={updateL}>
                                        {[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1;
                                            return (
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        checked={ratingValue}
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
                                            onClick={updateL}
                                            />
                                    </form>
                                </Col>
                            </div>
                        </Row>
                        {[...languages].map((language, i) => (
                            <Row style={{margin:'4px'}}>
                                <Card key={i} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <Col xs={6}>
                                        {language.language}
                                    </Col>
                                    <Col xs={6}>
                                    {[...Array(parseInt(language.rating))].map((_, k) =>
                                        <FaStar
                                            key={k}
                                            size={50}
                                            color={"#ffc107"}
                                        />
                                    )} 
                                    {
                                        (5-parseInt(language.rating))>0 && [...Array(parseInt(5-language.rating))].map((_, k) =>
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
                                        onClick={() => setlanguages((languages) => {
                                            const newlanguages = [...languages];
                                            newlanguages.splice(i, 1);
                                            return newlanguages
                                        })}
                                    />
                                    </Col>
                                </Card>
                            </Row>
                        ))}
                    </> 
                :
                    <br />
                }  
                {/* Certifications */}
                <Row>
                    <h3><FormCheckInput
                        type={"checkbox"}
                        id={`default-checkbox`}
                        checked={C}
                        onChange={(e)=>setC(e.target.checked)}
                        /> &nbsp;Certifications:</h3>
                </Row>
                {C ?
                <>
                    <Row>
                    <div className='stars' style={{display:'flex',alignItems:'center'}}>
                        <Col xs={6}>
                            {/* <input type="text" name="interest" id="interest" value={interest} onChange={updateinterest} /> */}
                            <Form.Group className="mb-3" controlId="formcertificate">
                                <Form.Control type="text" value={certificate} onChange={updatecertificate} placeholder="OWASP" maxLength={10}/>
                            </Form.Group>

                        </Col>
                        <br />
                        <Col xs={5}>
                            <Form.Group className="mb-3" controlId="formcertificate">
                                <Form.Control type="text" value={date} onChange={updatedate} placeholder="29-05-2001" maxLength={10}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <FaPlusSquare
                                color='green'
                                size={40}
                                onClick={updateC}
                                />
                        </Col>
                    </div>
                    </Row>
                </>
                :
                    <br />
                }

                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/skills'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to='/page/review'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}