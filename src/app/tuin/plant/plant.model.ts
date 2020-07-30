export interface PlantJson {
    naam: string;
    datumGeplant: string;
    dagenTotOogst: number;
}

export class Plant {
    
    constructor(
        private _naam: string,
        private _datumGeplant = new Date(),
        private _dagenTotOogst: number,
        private _oogstDatum = new Date()
    ){}

    static fromJSON(json: PlantJson): Plant {
        const plnt = new Plant(json.naam, new Date(json.datumGeplant), json.dagenTotOogst);
        return plnt;
    }

    toJSON(): PlantJson {
        return {
            naam: this.naam,
            datumGeplant: this._datumGeplant.toDateString(),
            dagenTotOogst: this._dagenTotOogst
        }
    };

    // Getters
    get naam(): string {
        return this._naam;
    }
    get datumGeplant():Date {
        return this._datumGeplant;
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