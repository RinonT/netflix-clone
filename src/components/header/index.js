import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Frame, Container, Logo, Title, Text, ButtonLink } from './styles/header'; 
 
export default function Header({ bg = true, children, ...resProps }) {
    return bg ? <Background {...resProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...resProps }) {
    return <Container {...resProps} >{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...resProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...resProps} /> 
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...resProps }) {
    return <ButtonLink {...resProps} >{children}</ButtonLink>
}

Header.Title = function HeaderTitle({ children, ...resProps }) {
    return <Title {...resProps} >{children}</Title>
}

Header.Text = function HeaderText({ children, ...resProps }) {
    return <Text {...resProps} >{children}</Text>
}