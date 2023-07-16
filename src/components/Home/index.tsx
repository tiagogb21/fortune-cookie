import React, { useEffect, useState } from "react";
import fortuneCookieClose from "../../assets/fortuneCookieClose.svg";
import fortuneCookieOpen from "../../assets/fortuneCookieOpen.png";
import { Container } from "./styles";
import { API_URL } from "../../data/constants";
import { randomNumber } from "../../data/functions";
import { IQuotes } from "../../types/IQuotes";

const Home: React.FC = () => {
    const [fortuneCookie, setFortuneCookie] = useState<boolean>(true);
    const [quotes, setQuotes] = useState<IQuotes>();

    const handleMouseEnter = () => {
        setTimeout(() => {
            setFortuneCookie((stage) => !stage);
        }, 1000);
    };

    useEffect(() => {
        getQuotes();
    }, [fortuneCookie])

    const handleClick = () => {
        setFortuneCookie((stage) => !stage);
    };

    async function getQuotes() {
        const res = await fetch(API_URL);
        const data = await res.json();
        setQuotes(data[randomNumber(data)]);
    }

    return (
        <Container>
            <div className="container">
                <h1>Qual é a sua sorte de hoje?</h1>
                <p>Abra o biscoito e descubra!</p>
                {
                    !fortuneCookie && quotes && (
                        <article className="text-fortune__wrapper">
                            <p className="text-fortune">{quotes.text} ({quotes.author})</p>
                        </article>
                    )
                }
                {fortuneCookie ? (
                    <div
                        className="img-wrapper"
                        onMouseEnter={handleMouseEnter}
                    >
                        <img
                            className="img-shake"
                            src={fortuneCookieClose}
                            alt="Fortune Cookie Close"
                        />
                    </div>
                ) : (
                    <div className="img-wrapper img-btn-wrapper">
                        <img
                            src={fortuneCookieOpen}
                            alt="Fortune Cookie Open"
                        />

                        <button onClick={handleClick} type="button">
                            Abrir outro biscoito
                        </button>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Home;
