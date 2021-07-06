import styled from 'styled-components';
import colors from '../../assets/colors';

export const ContainerContent = styled.div`
    flex: 1;
    display: flex;
    background-color: ${colors.white};
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 8px;
    box-shadow: 0px 0px 5px #00000033;
    

    .imageCard {
        display: flex;
        align-items: center;
        flex: 0.35;
        padding-left: 24px;

        > img {
            width: 48px;
            height: 48px;
        }

        > h2 {
            font-size: 16px;
            font-weight: bold;
            color: ${colors.darkSmoke};
            margin-left: 24px;
        }
    }

    .seriesOrEvents {
        flex: 0.35;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > p {
            font-size: 14px;
            font-weight: 400;
        }
    }
`;
