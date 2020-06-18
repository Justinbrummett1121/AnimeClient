import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PastPresCreate from './PastPresCreate';
import PastPresTable from './PastPresTable';
import PastPresEdit from './PastPresEdit';
import './PastPresIndex.css';

const PastPresIndex = (props) => {

    const [pastpres, setPastpres] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [pastPresToUpdate, setPastPresToUpdate] = useState({});

    const fetchPastPres = () => {
        fetch('http://localhost:3000/pastpres', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                setPastpres(logData.pastPres)
            })
            
    }
    
    const editUpdatePastPres = (pastPres) => {
        console.log(pastPres)
        setPastPresToUpdate(pastPres);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchPastPres();
    }, [])

    return(
        <div classname="mainDiv">
        <Container>
            <Row>
                <Col md="3">
                    <PastPresCreate fetchPastPres={fetchPastPres} token={props.token}/>
                </Col>
                <Col md="9">
                    <PastPresTable pastpres={pastpres} editUpdatePastPres={editUpdatePastPres} updateOn={updateOn} fetchPastPres={fetchPastPres} token={props.token}/>
                </Col>
                {updateActive ? <PastPresEdit pastPresToUpdate={pastPresToUpdate} updateOff={updateOff} token={props.token} fetchPastPres={fetchPastPres}/> : <></>}
            </Row>
        </Container>
        </div>
    )
}

export default PastPresIndex;