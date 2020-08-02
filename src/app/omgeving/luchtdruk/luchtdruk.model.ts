interface LuchtdrukJson{
    datum: string;
    waarde: number;
}
export class Luchtdruk {
    
    constructor(
        private _datum = new Date(),
        private _waarde: number
    ){}

    get datum(): Date {
        return this._datum;
    }

    get waarde(): number {
        return this._waarde;
    }

    static fromJSON(json: LuchtdrukJson): Luchtdruk {
        const luchtdruk = new Luchtdruk(new Date(json.datum), json.waarde);
        return luchtdruk;
    }
}