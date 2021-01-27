import React, { useState, useContext, createContext } from 'react'
import { Container, Group, Title, SubTitle, Text, Entities, Meta, Image, Item, Feature, FeatureText, Maturity, FeatureTitle, FeatureClose, Content } from './styles/card'
const FeatureContext = createContext();

export default function Card({ children, ...resProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...resProps}> {children} </Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...resProps }) {
    return <Group {...resProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...resProps }) {
    return <SubTitle {...resProps}>{children}</SubTitle>
}

Card.Entities = function CardEntities({ children, ...resProps }) {
    return <Entities {...resProps}>{children}</Entities>
}

Card.Text = function CardText({ children, ...resProps }) {
    return <Text {...resProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...resProps }) {
    return <Meta {...resProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...resProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item onClick={() => {
            setItemFeature(item);
            setShowFeature(true)
        }} {...resProps}>
            {children}
        </Item>
    )
}

Card.Image = function CardImage({ ...resProps }) {
    return <Image {...resProps} />
}

Card.Feature = function CardFeature({category, children, ...resProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
     
    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...resProps}>
            <Content>
                <FeatureTitle>
                    {itemFeature.title}
                </FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="images/icons/close.png" alt="Close" />
                </FeatureClose>
                <Group margin="30px" flex-direction="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                    {children}
                </Group>
            </Content>
        </Feature>
    ) : null
}