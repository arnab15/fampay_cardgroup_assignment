import React from "react";
import { StyledLink } from "./link.styled";

export default function Link({ children, href, ...props }) {
    return (
        <StyledLink href={href} target="_blank" {...props}>
            {children}
        </StyledLink>
    );
}
