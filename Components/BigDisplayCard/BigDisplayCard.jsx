import React, { useEffect } from "react";
import Scrollview from "../ScrollView/Scrollview";
import Link from "../shared/Link/Link";
import {
    BigDisplayCardContainer,
    CallToAction,
    CardAction,
    CardActionContainer,
    CardDescriptionContainer,
    CardEntity,
    CardTitleContainer,
    StyledBigDisplayCard,
} from "./bigdisplaycard.styled";
import { useLongPress } from "use-long-press";
import EntityReplacer from "./utils/EntityReplacer";
import { getDismissedKeys, setDisMissedKey } from "../../services/storageService";

export default function BigDisplayCard({ data }) {
    const [cardData, setCardData] = React.useState(data);
    const [showCardActions, setShowCardActions] = React.useState(false);

    const bind = useLongPress(() => {}, {
        onFinish: () => {
            setShowCardActions(!showCardActions);
        },
    });

    const handelRemindLettterClick = (name) => {
        const nonRemindLettterCards = cardData.cards.filter((card) => card.name !== name);
        setCardData({ ...cardData, cards: [...nonRemindLettterCards] });
    };

    const handelDismissNowClick = (name) => {
        console.log("dismiss clicked", name);
        const nonRemindLettterCards = cardData.cards.filter((card) => card.name !== name);
        setCardData({ ...cardData, cards: nonRemindLettterCards });
        setDisMissedKey(name);
    };

    useEffect(() => {
        const keys = getDismissedKeys();
        if (cardData.cards.length > 0) {
            const cards = cardData.cards.filter((card) => !(card.name in keys));
            setCardData({ ...cardData, cards: cards });
        }
    }, []);

    return (
        <Scrollview isScrollable={cardData.is_scrollable}>
            {cardData.cards.map((card) => (
                <BigDisplayCardContainer key={card.title}>
                    {showCardActions && (
                        <CardAction>
                            <div onClick={() => handelRemindLettterClick(card.name)}>
                                <svg
                                    className="action-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>

                                <p className="action-text">remind later</p>
                            </div>
                            <div onClick={() => handelDismissNowClick(card.name)}>
                                <svg
                                    className="action-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="action-text">dismiss now</p>
                            </div>
                        </CardAction>
                    )}

                    <StyledBigDisplayCard {...bind()} bgColor={card.bg_color} bgImage={card.bg_image.image_url}>
                        <CardTitleContainer>
                            {card.formatted_title.entities.length > 0 ? (
                                <EntityReplacer formatted_text={card.formatted_title} />
                            ) : (
                                <CardEntity color="#fff">{card.title}</CardEntity>
                            )}
                        </CardTitleContainer>
                        <CardDescriptionContainer>
                            {card.formatted_description.entities.length > 0 ? (
                                <EntityReplacer formatted_text={card.formatted_title} />
                            ) : (
                                <CardEntity color="#fff">{card.title}</CardEntity>
                            )}
                        </CardDescriptionContainer>
                        <CardActionContainer>
                            {card.cta.map((cta) => (
                                <Link key={card.title} href={cta.url}>
                                    <CallToAction bgColor={cta.bg_color} color={cta.text_color}>
                                        {cta.text}
                                    </CallToAction>
                                </Link>
                            ))}
                        </CardActionContainer>
                    </StyledBigDisplayCard>
                </BigDisplayCardContainer>
            ))}
        </Scrollview>
    );
}
