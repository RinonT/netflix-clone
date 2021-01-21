import React from 'react'
import {Container, Input, Link, Submit, Text, Title, Error, Base, TextSmall } from './styles/form';

export default function Form({children, ...resProps}) {
    return  <Container {...resProps}>{children}</Container>
}

Form.Input = function FormInput({children, ...resProps}) {
    return <Input {...resProps} >{children}</Input>
}

Form.Link = function FormLink({children,...resProps}) {
    return <Link {...resProps} > {children} </Link>
} 

Form.Submit = function FormSubmit({children,...resProps}) {
    return <Submit {...resProps} > {children} </Submit>
} 

Form.Text = function FormText({children,...resProps}) {
    return <Text {...resProps} > {children} </Text>
} 
Form.Base = function FormBase({children,...resProps}) {
    return <Base {...resProps} > {children} </Base>
} 

Form.Title = function FormTitle({children,...resProps}) {
    return <Title {...resProps} > {children} </Title>
} 

Form.TextSmall = function FormTextSmall({children,...resProps}) {
    return <TextSmall {...resProps} > {children} </TextSmall>
}

Form.Error = function FormError({children,...resProps}) {
    return <Error {...resProps} > {children} </Error>
}