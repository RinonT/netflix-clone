import React from 'react';
import Accordion from '../components/accordion/index';
import OptForm from '../components/opt-form/index';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {
                    faqsData.map((item) => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion.Frame>
            <OptForm>
                <OptForm.Input placeholder="Email adress"></OptForm.Input>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
