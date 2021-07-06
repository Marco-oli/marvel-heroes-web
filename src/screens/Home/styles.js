import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    color: ${colors.darkSmoke};
    position: relative;
`;

export const MainSection = styled.main`
    flex: 1;
    padding: 40px 113px;
`;

export const ContainerInput = styled.div`
    margin-top: 16px;
    margin-bottom: 40px;

    h3 {
        margin-bottom: 8px;
        color: ${colors.darkSmoke};
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 295px;
        width: 100%;
        background-color: ${colors.white};

        padding: 8px 16px;
        color: ${colors.smoke};
        border-radius: 4px;

        input {
            border: none;
            outline: none;
            color: ${colors.smoke};
            font-size: 14px;
        }
    }
`;

export const ContainerResults = styled.div`
    flex: 1;
`;

export const ContainerTitleCard = styled.div`
    display: flex;
    flex: 1;
    margin-bottom: 8px;
    padding-left: 24px;
   
    p {
        flex: 0.35;
    }
`;

export const ContainerTextError = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    margin-top: 50px;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 90px;
    background-color: ${colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    
`;