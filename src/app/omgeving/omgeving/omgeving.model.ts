interface OmgevingJson{
    fotos: string[];
    temperaturen: string[];
    luchtdrukken: string[];
}
export class Omgeving {
    
    constructor(
        private _fotos = new Array<string>(),
        private _temperaturen = new Array<string>(),
        private _luchtdrukken = new Array<string>(),
    ){}

    get fotos(): string[] {
        return this._fotos;
    }

    get temperaturen(): string[]{
        return this._temperaturen;
    }

    get luchtdrukken(): string[]{
        return this._luchtdrukken;
    }

    static fromJSON(json: OmgevingJson): Omgeving {
        const omgeving = new Omgeving(json.fotos, json.temperaturen, json.luchtdrukken);
        return omgeving;
    }
}