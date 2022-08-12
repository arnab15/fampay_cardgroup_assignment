import React from "react";
import reactStringReplace from "react-string-replace";
import { CardEntity } from "../bigdisplaycard.styled";

export default function EntityReplacer({ formatted_text }) {
    let count = 0;
    return (
        <>
            {reactStringReplace(formatted_text.text, "{}", (match, i) => {
                const node = (
                    <CardEntity key={i} color={formatted_text.entities[count].color}>
                        {formatted_text.entities[count].text}
                    </CardEntity>
                );
                count++;
                return node;
            })}
        </>
    );
}
