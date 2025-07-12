import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const Contact = () => {

    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const checkStorage = localStorage.getItem('planets');
        if (checkStorage) {
            const { time, data } = JSON.parse(checkStorage);
            if (Date.now() < time) {
                setPlanets(data);
                return;
            }
            localStorage.removeItem('planets');
        }
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => {
                // const time = Date.now() + 1000 * 60 * 60 * 24 * 30;
                const time = Date.now() + 1000 * 5;
                localStorage.setItem('planets', JSON.stringify({ data, time}));
                setPlanets(data);
            })
            .catch(error => console.log(error));

    }, []);
    return (
        <div className="container">
            <form action="action_page.php">

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Planets</label>
                <select id="planet" name="planet">
                    {planets.map((planet) => (
                        <option key={planet.id} value={planet.name}>
                            {planet.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" disabled/>

            </form>
        </div>

    );
};

export default Contact;