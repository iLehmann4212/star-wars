import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMeInfo, setAboutMeInfo] = useState([]);
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
        .then((res) => res.json())
        .then(data => setAboutMeInfo(data));
    }, []);
    return (
        <div>
            <h2>{aboutMeInfo.name}</h2>
            <p>Gender: {aboutMeInfo.gender}</p>
            <p>Date of Birth: {aboutMeInfo.birth_year}</p>
            <p>Height: {aboutMeInfo.height}</p>
            <p>Weight: {aboutMeInfo.mass}</p>
            <p>Eye color: {aboutMeInfo.eye_color}</p>
            <p>Hair color: {aboutMeInfo.hair_color}</p>
        </div>
    );
};

export default AboutMe;