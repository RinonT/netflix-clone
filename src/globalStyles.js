import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neu', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-something: antialised;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`