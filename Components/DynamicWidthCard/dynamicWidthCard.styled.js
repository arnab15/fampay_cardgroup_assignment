import styled from "styled-components";

export const DynamicWidthCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
`;
//if needed gradient can be added to the card
/* background-image: ${({ gradient }) => `linear-gradient(${gradient.degree}, ${gradient.colors.join(",")})`}; */
export const StyledDynamicWidthCard = styled.div`
    height: ${({ height }) => height};
    margin: 12px 10px 12px 20px;
    border-radius: 11px;
    flex-shrink: 0;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
