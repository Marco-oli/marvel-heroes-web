import { createGlobalStyle } from 'styled-components';
import colors from '../assets/colors';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: ${colors.darkSnow};
        font-family: 'PT Sans';
    }
`;
