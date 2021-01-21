import React from 'react';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';


export default function Home() {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere, cancel anytime.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email adress"></OptForm.Input>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer></JumbotronContainer>
            <FaqsContainer></FaqsContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}
