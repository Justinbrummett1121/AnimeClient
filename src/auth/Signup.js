import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [firstname, setFirstname] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://jtb-theanimelist.herokuapp.com/api/user/signup", {
            method: 'POST',
            body: JSON.stringify({firstname: firstname, emailaddress: emailaddress, username: username, passwordhash: passwordhash}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} name= "firstname" value={firstname}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="emailaddress">Email Address</Label>
                    <Input onChange={(e) => setEmailaddress(e.target.value)} name="emailaddress" value={emailaddress}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordhash">Password</Label>
                    <Input type="password" onChange={(e) => setPasswordhash(e.target.value)} name="passwordhash" value={passwordhash}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;