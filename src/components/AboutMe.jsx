import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMeInfo, setAboutMeInfo] = useState([]);
    useEffect(() => {
        const checkStorage = localStorage.getItem('aboutMeInfo');
        if (checkStorage) {
            const {time, data} = JSON.parse(checkStorage);
            if (Date.now() < time) {
                setAboutMeInfo(data);
                return;
            }
            localStorage.removeItem('planets');
        }

        setTimeout(()=> {
            fetch(`${base_url}/v1/peoples/1`)
                .then((res) => res.json())
                .then(data => {
                    const time = Date.now() + 1000 * 5;
                    localStorage.setItem('aboutMeInfo', JSON.stringify({data, time}));
                    setAboutMeInfo(data);
                })
                .catch(error => console.log(error));
        },2000);


        fetch(`${base_url}/v1/peoples/1`)
            .then((res) => res.json())
            .then(data => {
            // const time = Date.now() + 1000 * 5;
            const time = Date.now() + + 1000 * 60 * 60 * 24 * 30;
            localStorage.setItem('aboutMeInfo', JSON.stringify({ data, time}));
            setAboutMeInfo(data);
        })
            .catch(error => console.log(error));

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