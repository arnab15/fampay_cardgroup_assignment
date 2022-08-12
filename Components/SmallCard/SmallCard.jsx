import React from "react";
import { CardEntity } from "../BigDisplayCard/bigdisplaycard.styled";
import EntityReplacer from "../BigDisplayCard/utils/EntityReplacer";
import Scrollview from "../ScrollView/Scrollview";
import { StyledSmallCardContainer } from "./smallcard.styled";

export default function SmallCard({ data }) {
    return (
        <Scrollview isScrollable={data.is_scrollable}>
            {data.cards.map((card, index) => (
                <StyledSmallCardContainer
                    target="_blank"
                    href={card.url}
                    bgColor={card.bg_color ? card.bg_color : "#ffff"}
                    key={card.name}
                >
                    <div>
                        <img src={card.icon.image_url} />
                    </div>
                    <div className="description">
                        <div className="title">
                            {card.formatted_title.entities.length > 0 ? (
                                <EntityReplacer formatted_text={card.formatted_title} />
                            ) : (
                                <CardEntity>{card.title}</CardEntity>
                            )}
                        </div>
                        {card.description && (
                            <div className="subTitle">
                                {card.formatted_description.entities.length > 0 ? (
                                    <EntityReplacer formatted_text={card.formatted_description} />
                                ) : (
                                    <CardEntity>{card.description}</CardEntity>
                                )}
                            </div>
                        )}
                    </div>
                </StyledSmallCardContainer>
            ))}
        </Scrollview>
    );
}
