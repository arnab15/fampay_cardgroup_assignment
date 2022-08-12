import styled from "styled-components";

export const StyledScrollViewContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;

    ${({ scrollable }) => {
        if (scrollable) {
            return `overflow-x: scroll;
                        white-space: nowrap;
                        scroll-behavior: smooth;
                        ::-webkit-scrollbar {
                            display: none;
                        }`;
        } else {
            return `overflow-x: hidden;`;
        }
    }};
`;
