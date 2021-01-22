import React from 'react'
import { Container, Item, Name, List, Picture, Title } from './styles/profiles';

export default function Profiles({children, ...resProps}) {
    return <Container {...resProps}>{children}</Container>
}

Profiles.List = function ProfilesList({children, ...resProps}) {
    return <List {...resProps}>{children}</List>
}

Profiles.Title = function ProfilesTitle({children, ...resProps}) {
    return <Title {...resProps}>{children}</Title>
}

Profiles.Text = function ProfilesText({children, ...resProps}) {
    return <Text {...resProps}>{children}</Text>
}

Profiles.User = function ProfilesUser({children, ...resProps}) {
    return <Item {...resProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({src, children, ...resProps}) {
    return <Picture {...resProps} src={src ? `images/users/${src}.png` : '/images/misc/loading.gif'}/>
}

Profiles.Name = function ProfilesName({children, ...resProps}) {
    return <Name {...resProps}>{children}</Name>
}
