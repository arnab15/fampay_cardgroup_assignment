import styled from "styled-components";

export const StyledBigDisplayCard = styled.div`
    background: ${({ bgImage }) => `url(${bgImage})`};
    background-color: ${({ bgColor }) => bgColor};
    width: 320px;
    height: 350px;
    border-radius: 12px;
    margin-left: 0;
    background-size: contain;
    position: relative;
    background-repeat: no-repeat;
    flex-shrink: 0;
    cursor: pointer;
`;

export const BigDisplayCardContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 10px 20px 20px;
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;
`;

export const CardAction = styled.div`
    width: 120px;
    height: 350px;
    background-color: #ffffff;
    flex-shrink: 0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: visibility 1s, opacity 0.5s linear;
    & div {
        border-radius: 12px;
        width: 72px;
        height: 59px;
        background-color: #f7f6f3;
        margin-bottom: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        cursor: pointer;
    }
    & .action-icon {
        position: relative;
        display: block;
        height: 15px;
        width: 15px;
        color: #fbaf03;
        flex-shrink: 0;
        top: 5px;
    }

    & .action-text {
        font-size: 9px;
        color: #000000;
    }
`;

export const CardEntity = styled.span`
    font-family: Roboto;
    color: ${({ color }) => color};
    text-decoration: ${({ textDecoration }) => textDecoration};
`;

export const CardTitleContainer = styled.p`
    position: absolute;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    top: 90px;
    padding-left: 33px;
    padding-right: 27px;
    white-space: pre-wrap;
`;

export const CardDescriptionContainer = styled.p`
    position: absolute;
    top: 188px;
    margin-top: 28px;
    margin-left: 33px;
    margin-right: 36px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    white-space: pre-wrap;
`;
export const CardActionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
export const CallToAction = styled.button`
    position: relative;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    padding: 13px 43.5px;
    box-shadow: none;
    border: none;
    border-radius: 6px;
    top: 280px;
    margin-left: 32.5px;
    cursor: pointer;
`;
