import {useEffect, useState} from "react";

const OpeningCrawl = () => {
    const [openingCrawl,setopeningCrawl]=useState('sdvcsdv')
    useEffect(() => {
        const episode = Math.floor((Math.random()*6)+1);
        fetch(`https://sw-info-api.herokuapp.com/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setopeningCrawl(data.opening_crawl));
        return () => console.log('opening crawl was unmounted');
    },[])
    if(!openingCrawl){
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    }else {
        <p className={}>
            <span> </span></p>
    }

};

export default OpeningCrawl;