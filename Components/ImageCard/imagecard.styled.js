import styled from "styled-components";

export const ImageCardComponent = styled.a`
    position: relative;
    height: 140px;
    border-radius: 12px;
    margin: 24px 20px;
    display: inline-block;
    flex-shrink: 0;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
