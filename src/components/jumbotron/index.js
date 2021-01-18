import React from 'react';

export default function Jumbostron({children, direction = 'row', ...restProps}) {
    return(
        <Item {...restProps}>
            <Inner direction={direction}></Inner>
        </Item>
    ) 
}