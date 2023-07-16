import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    background-color: #ffffff;
    border-radius: 0.3125rem;
    box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.8);
    display: flex;
    height: min(26.5rem, 90%);
    justify-content: center;
    margin: -5rem auto 0;
    padding: 3rem 4rem 4rem;
    width: 26.75rem;

    & .container {
        width: 18.75rem;
        height: 19.5rem;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        & h1 {
            color: #34355b;
            font-family: Montserrat;
            text-align: center;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .text-fortune__wrapper {
            display: flex;
            padding: 0.625rem;
            justify-content: center;
            align-items: center;
            gap: 0.625rem;
            background: #e4edf1;
            box-shadow: 2px 2px 2px 0px rgba(85, 85, 85, 0.5);
            margin-top: 1rem;
        }

        .text-fortune__wrapper p {
            color: #000000;
        }

        & p {
            color: #34355b;
            font-family: DM Sans;
            font-size: 0.9375rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: center;
        }

        .img-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .img-btn-wrapper {
            display: flex;
            flex-direction: column;
        }

        & img {
            flex-shrink: 0;
            height: 11.98688rem;
            width: 15.55263rem;
        }

        & .img-shake {
            cursor: pointer;

            &:hover {
                animation: shake 0.1s infinite;
            }

            @keyframes shake {
                0% {
                    transform: rotate(0deg);
                }
                25% {
                    transform: rotate(4deg);
                }
                50% {
                    transform: rotate(0deg);
                }
                75% {
                    transform: rotate(-4deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }
        }

        & button {
            align-items: flex-start;
            background: #ff9500;
            border-radius: 0.25rem;
            color: #ffffff;
            display: flex;
            gap: 0.625rem;
            padding: 1rem;
        }
    }
`;
