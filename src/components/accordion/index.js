import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Header, Item, Body, Inner, Frame } from './styles/accordion';

export default function Accordion({ children, ...resProps }) {
    return (
        <Container {...resProps}>
            <Inner> {children} </Inner>
        </Container>
    )
}

const ToggleContext = createContext();

Accordion.Item = function AccordionItem({ children, ...resProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...resProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...resProps }) {
    return <Frame {...resProps}>{children}</Frame>
}
Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...resProps}>
        {children}
        {
            toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="close"/>
            )
            : (
                <img src="/images/icons/add.png" alt="open"/>
            )
        }
    </Header>
    )
}
Accordion.Body = function AccordionBody({ children, ...resProps }) {
    const { toggleShow } = useContext(ToggleContext);
   return toggleShow ? <Body {...resProps}>{children}</Body> : null
    
}