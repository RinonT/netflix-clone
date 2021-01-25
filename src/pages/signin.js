import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components'
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import  * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';




export default function Signin() {
    const [error, setError] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const isInvalid = password === '' | emailAdress === '';
    const handleSignin = (event) => {
        event.preventDefault();

        firebase
                .auth()
                .signInWithEmailAndPassword(emailAdress, password)
                .then(() => {
                    setEmailAdress('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.BROWSE);
                }).catch((error) => setError(error.message))

    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder="Email adress"
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
                        Sign in
                    </Form.Submit>
                    <Form.Text>
                        New to Netflix ?&nbsp; 
                        <Form.Link to='/signup'>Sign Up now</Form.Link>
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
