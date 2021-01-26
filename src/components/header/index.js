import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Frame, Feature, Group, Search, SearchInput, SearchIcon, Container, Link, Logo, Title, Text, ButtonLink, Profile, Dropdown, Picture, FeatureCallOut, PlayButton } from './styles/header';

export default function Header({ bg = true, children, ...resProps }) {
    return bg ? <Background {...resProps}>{children}</Background> : children
}

Header.Container = function ({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Header.PlayButton = function HeaderPlayButton({ children, ...resProps }) {
    return <PlayButton {...resProps} >{children}</PlayButton>
}

Header.Frame = function HeaderFrame({ children, ...resProps }) {
    return <Frame {...resProps} >{children}</Frame>
}

Header.Group = function HeaderGroup({ children, ...resProps }) {
    return <Group {...resProps} >{children}</Group>
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

Header.Link = function HeaderLink({ children, ...resProps }) {
    return <Link {...resProps} >{children}</Link>
}

Header.Feature = function HeaderFeature({ children, ...resProps }) {
    return <Feature {...resProps} >{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...resProps }) {
    return <FeatureCallOut {...resProps} >{children}</FeatureCallOut>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...resProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...resProps} >
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    )
}


Header.Picture = function HeaderPicture({ src, ...resProps }) {
    return <Picture {...resProps} src={`image/user/${src}.png`} />
}


Header.Profile = function HeaderProfile({ children, ...resProps }) {
    return <Profile {...resProps} >{children}</Profile>
}


Header.Dropdown = function HeaderDropdown({ children, ...resProps }) {
    return <Dropdown {...resProps} >{children}</Dropdown>
}



