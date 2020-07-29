interface PlantJson {
    naam: string;
    familie: string;
    datumGeplant: string;
    dagenTotOogst: number;
    wikiLink: string;
    fotoUrl: string;
}

export class Plant {
    constructor(
        private _naam:string,
        private _familie: string,
        private _datumGeplant = new Date(),
        private _dagenTotOogst: number,
        private _wikiLink: string,
        private _fotoUrl: string
        
    ){}

    static fromJSON(json: PlantJson): Plant {
        const plnt = new Plant(json.naam, json.familie, new Date(json.datumGeplant), json.dagenTotOogst, json.wikiLink, json.fotoUrl);
        return plnt;
    }

    // Getters
    get naam(): string {
        return this._naam;
    }
    get familie(): string{
        return this._familie;
    }
    get datumGeplant():Date {
        return this._datumGeplant;
    }
    get wikiLink(): string {
        return this._wikiLink;
    }
    get fotoUrl(): string {
        return this._fotoUrl;
    }
    get dagenTotOogst(): number {
        return this._dagenTotOogst;
    }
    get oogstDatum(): Date {
        let datum = new Date();
        datum.setDate(this._datumGeplant.getDate() + this._dagenTotOogst.valueOf());
        return datum; 
    }


}