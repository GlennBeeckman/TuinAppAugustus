import {Tuin} from './tuin.model';

const JsonTuinen = [
    {
        naam: "Vierkantemeter Tuin",
        planten: ["meloen", "paprika", "pepers"],
        dateAdded: "2020-07-29"
    },
    {
        naam: "Rode bloempot",
        planten: ["munt", "thijm", "lavendel"],
        dateAdded: "2020-02-07T18:25:43.511Z"
    }
];

export const TUINEN: Tuin[] = JsonTuinen.map(Tuin.fromJSON);
