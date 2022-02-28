import {Link} from 'react-router-dom';
import { useContext,useCallback,useEffect } from 'react';
import { FormContext } from './FormContext';
import { List, ListItem } from '@material-ui/core'
import '../App.css'
import Button from 'react-bootstrap/Button'
import {Container,Row,Col} from 'react-bootstrap';
import TextEditor from './TextEditor';
export default function Summary(){
    // const [Summary, setSummary] = useState([]);
    useEffect(()=>{
        var updatedForm = {step: 3}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
    const [{Summary=[],about=""}, setForm] = useContext(FormContext)
    const items = [
        { name: 'I am Honest' },
        { name: 'I am Trustworthy' },
        { name: 'I respect everyone\' opinion' },
        { name: 'I can work in a team' }
    ]
    const convert = (e) => {
        setForm( form => ({
            ...form,
            ...{about:e.target.value}
        }))
    }
    const  handleChange = useCallback( (n)=> {
        let index = Summary.indexOf(n.name);
        if (index === -1) {
            setForm( form => ({
                ...form,
                ...{Summary:Summary.concat(n.name)}
            }))
        } else {
            // const newArray  = Summary.filter(k => k !== n.name);
            setForm( form => ({
                ...form,
                ...{Summary:Summary.filter(k => k !== n.name)}
            }))
            // setSummary([...newArray]);
        }
    },[Summary, setForm])
    function buttonOnChange (n) {
        return Summary.indexOf(n.name) === -1 ? 'Add' : 'Remove'
    }

    return(
        <div className='left'>
            <Container style={{margin:'5px'}}>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', color:'Black', fontFamily:'Pacifico'}}>
                        <h2>Summary Details</h2>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <h5>What do you want to be written inside the About section?</h5>
                    </Col>
                </Row>
                <hr />
                <Row style={{border:'2px solid black',margin:'2px'}}>
                    <textarea onChange={convert} name="about" cols="30" rows="10" placeholder='Type Markdown here'/>
                    {/* <Col>
                        <List style={{display:'flex',flexDirection:'column',width:'98%'}}>
                            {items.map(n => {
                            return (
                                <ListItem key={n.name} id='list'>
                                    <Button
                                        variant={buttonOnChange(n) === 'Remove' ? 'danger' : 'success'}
                                        style={{ marginRight: '1rem' }}
                                        className='Add'
                                        onClick={() => handleChange(n)}
                                    >
                                        {buttonOnChange(n)}
                                    </Button>
                                    {n.name}
                                </ListItem>
                            )
                            })}
                        </List>
                    </Col>
                    <Col>
                        <TextEditor />
                    </Col> */}
                </Row>
                <br />
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/job'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to='/page/skills'>
                            <Button variant='primary'> Next </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}