import React, { useState } from 'react'
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import FooterContainer from '../containers/footer';


export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = firstName === '' | password === '' | emailAdress === '';
    const handleSignup = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="FirstName"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="EmailAdress"
                            value={emailAdress}
                            onChange={({ target }) => setEmailAdress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="Submit">
                            Sign Up
                    </Form.Submit>
                        <Form.Text>
                            Already have an account ?&nbsp;
                        <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA
                    </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
