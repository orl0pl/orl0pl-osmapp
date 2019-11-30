// @flow

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    height: 100%;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    color: #0078a8
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
  }
  
  .mapboxgl-ctrl-top-right {
    top: 83px !important;
  }
  
  .rcs-custom-scroll .rcs-inner-handle {
    background-color: rgba(70, 70, 70, 0.2);
  }
`;
export default GlobalStyle;
