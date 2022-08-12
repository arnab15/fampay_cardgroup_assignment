import styled from "styled-components";
import media from "../../theme/media";
export const StyledSmallCardContainer = styled.a`
    height: 60px;
    width: 100%;
    background-color: ${({ bgColor }) => bgColor};
    color: black;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 20px;
    margin-right: 15px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;

    align-items: center;
    padding-left: 20px;
    padding-right: 22px;
    white-space: nowrap;

    .description {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 15px;
        overflow: hidden;
    }
    .subTitle {
        font-size: 12px;
        padding-top: 2px;
        color: #1b1b1e;
    }
    p {
        display: inline-block;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-left: 15px;
        margin-right: 0.7rem;
        overflow: hidden;
    }

    img {
        height: 30;
        width: 30px;
        object-fit: contain;
    }
    div > svg {
        margin-left: 1rem;
        height: 18px;
        width: 18px;
        color: #1b1b1e;
        cursor: pointer;
    }
`;
