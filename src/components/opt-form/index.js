import React from 'react';
import {Container, Input, Button, Text} from './styles/opt-form';

export default function OptForm({children, ...resProps}) {
    return <Container {...resProps}>{children}</Container>
}

OptForm.Container = function OptFormContainer({children, ...resProps}) {
    return <Container {...resProps}>{children}</Container>
}
 OptForm.Input = function OptFormInput({children, ...resProps}) {
    return <Input {...resProps}>{children}</Input>
}
 OptForm.Button = function OptFormButton({children, ...resProps}) {
    return (<Button {...resProps}>
        {children}
        <img src="/images/icons/chevron-right.png" alt="try now" />
        </Button>)
}

OptForm.Text = function OptFormText({children, ...resProps}) {
    return <Text {...resProps}>{children}</Text>
}
