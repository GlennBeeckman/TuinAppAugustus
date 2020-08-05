import { Luchtdruk } from "./luchtdruk.model";

const JsonLuchtdrukken = [
    {
        datum: "2020-03-09 16:50:09",
        waarde: 2100
    }
];

export const LUCHTDRUKKEN: Luchtdruk[] = JsonLuchtdrukken.map(Luchtdruk.fromJSON);