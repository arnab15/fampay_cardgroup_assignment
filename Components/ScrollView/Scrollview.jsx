import React from "react";
import { StyledScrollViewContainer } from "./scrollview.styled";

export default function Scrollview({ children, isScrollable = true }) {
    return <StyledScrollViewContainer scrollable={isScrollable}>{children}</StyledScrollViewContainer>;
}
