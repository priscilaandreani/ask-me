import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;