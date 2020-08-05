import { Temperatuur } from "./temperatuur.model";

const JsonTemperaturen = [
    {
        datum: "2020-03-09 16:50:09",
        waarde: 21
    }
];

export const TEMPERATUREN: Temperatuur[] = JsonTemperaturen.map(Temperatuur.fromJSON);