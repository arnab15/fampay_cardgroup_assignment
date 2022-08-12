import React from "react";
import Scrollview from "../ScrollView/Scrollview";
import { ImageCardComponent } from "./imagecard.styled";

function ImageCard({ data }) {
    return (
        <Scrollview isScrollable={data.is_scrollable}>
            {data.cards.map((card, index) => (
                <ImageCardComponent key={card.name} target="_blank" href={card.url}>
                    <img src={card.bg_image.image_url} alt={card.name} />
                </ImageCardComponent>
            ))}
        </Scrollview>
    );
}

export default ImageCard;
