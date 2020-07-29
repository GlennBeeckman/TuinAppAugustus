import {Plant} from './plant.model';

const JsonPlanten = [
    {
        naam: "Pepermunt",
        familie: "Lamiaceae",
        datumGeplant: "2020-02-07T18:25:43.511Z",
        dagenTotOogst: 90,
        wikiLink: "https://nl.wikipedia.org/wiki/Pepermunt_(plant)",
        fotoUrl: "https://images.pexels.com/photos/531260/pexels-photo-531260.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        naam: "Lavendel",
        familie: "Lamiaceae",
        datumGeplant: "2020-02-07T18:25:43.511Z",
        dagenTotOogst: 150,
        wikiLink: "https://nl.wikipedia.org/wiki/Lavendel",
        fotoUrl: "https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        naam: "Meloen",
        familie: "Cucurbitaceae ",
        datumGeplant: "2020-03-07T18:25:43.511Z",
        dagenTotOogst: 80,
        wikiLink: "https://nl.wikipedia.org/wiki/Watermeloen",
        fotoUrl: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
];

export const PLANTEN: Plant[] = JsonPlanten.map(Plant.fromJSON);