import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
    width: 100%;
    height: 64px;
    background-color: ${colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`;

export const ContainerText = styled.div`
`;

export const Text = styled.h3`
    display: flex;
    font-size: 14px;
    color: ${colors.darkSmoke};
    font-weight: bold;

    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-left: 5px;
        font-weight: 400;
    }
`;
