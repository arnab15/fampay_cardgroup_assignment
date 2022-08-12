import React from "react";
import { CardEntity } from "../BigDisplayCard/bigdisplaycard.styled";
import EntityReplacer from "../BigDisplayCard/utils/EntityReplacer";
import Scrollview from "../ScrollView/Scrollview";
import { StyledSmallCardWithArrowContainer } from "./smallcardwitharrow.styled";

export default function SmallCardWithArrow({ data }) {
    return (
        <Scrollview isScrollable={data.is_scrollable}>
            {data.cards.map((card) => (
                <StyledSmallCardWithArrowContainer bgColor="#FBAF03" key={card.name} href={card.url} target="_blank">
                    <div>
                        <img src={card.icon.image_url} alt={card.icon.image_type} />
                    </div>
                    <div className="description">
                        <div className="title">
                            {card.formatted_title.entities.length > 0 ? (
                                <EntityReplacer formatted_text={card.formatted_title} />
                            ) : (
                                <CardEntity>{card.title}</CardEntity>
                            )}
                        </div>
                        <div className="subTitle">
                            {card.formatted_description.entities.length > 0 ? (
                                <EntityReplacer formatted_text={card.formatted_description} />
                            ) : (
                                <CardEntity>{card.description}</CardEntity>
                            )}
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </StyledSmallCardWithArrowContainer>
            ))}
        </Scrollview>
    );
}
