import { IQuotes } from "../../types/IQuotes";

export const randomNumber = (data: IQuotes[]) => Math.floor(Math.random() * data.length) + 1;
