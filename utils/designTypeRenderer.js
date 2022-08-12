import BigDisplayCard from "../Components/BigDisplayCard/BigDisplayCard";
import DynamicWidthCard from "../Components/DynamicWidthCard/DynamicWidthCard";
import ImageCard from "../Components/ImageCard/ImageCard";
import SmallCard from "../Components/SmallCard/SmallCard";
import SmallCardWithArrow from "../Components/SmallCardWithArrow/SmallCardWithArrow";

export const designTypeRenderer = (designType, data) => {
    switch (designType) {
        case "HC1":
            return <SmallCard data={data} />;
        case "HC3":
            return <BigDisplayCard data={data} />;
        case "HC5":
            return <ImageCard data={data} />;
        case "HC6":
            return <SmallCardWithArrow data={data} />;
        case "HC9":
            return <DynamicWidthCard data={data} />;
        default:
            return null;
    }
};
