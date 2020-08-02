interface TemperatuurJson{
    datum: string;
    waarde: number;
}
export class Temperatuur {
    
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

    static fromJSON(json: TemperatuurJson): Temperatuur {
        const temperatuur = new Temperatuur(new Date(json.datum), json.waarde);
        return temperatuur;
    }
}