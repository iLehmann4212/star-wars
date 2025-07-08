import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
        // return () => console.log('Opening crawl was unmounted');
    }, [])

    if (openingCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (
            <p className={'farGalaxy'}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }


}

export default OpeningCrawl;