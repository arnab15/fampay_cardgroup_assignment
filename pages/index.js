import React from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import Navbar from "../Components/Navbar/Navbar";
import apiServices from "../services/apiServices";
import GlobalStyle from "../theme/globalStyles";
import { designTypeRenderer } from "../utils/designTypeRenderer";
export default function Home({ data }) {
    const [cardGroups, setCardGroups] = React.useState(data.card_groups ? data.card_groups : []);

    const handleRefresh = () => {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const res = await apiServices.fecthContextualCards();
                    const fetchedData = await res.json();
                    console.log(data);
                    setCardGroups(fetchedData.card_groups ? [...fetchedData.card_groups] : []);
                    resolve();
                } catch (error) {
                    reject(error);
                    setCardGroups([]);
                }
            }, 2000);
        });
    };

    return (
        <div>
            <GlobalStyle />
            <>
                <Navbar />
                <PullToRefresh onRefresh={handleRefresh}>
                    {cardGroups.map((item) => (
                        <div key={item.id}>{designTypeRenderer(item.design_type, item)}</div>
                    ))}
                </PullToRefresh>
            </>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await apiServices.fecthContextualCards();
    const errorCode = res.ok ? false : res.statusCode;
    const data = await res.json();
    return {
        props: {
            data,
            error: {
                code: errorCode,
                message: "Unexpected error occured",
            },
        },
    };
}
