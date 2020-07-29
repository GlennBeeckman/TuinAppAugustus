interface TuinJson {
    naam: string;
    planten: string[];
    dateAdded: string;
}

export class Tuin {
    constructor(
        private _naam:string,
        private _planten = new Array<string>(),
        private _dateAdded= new Date()
    ){}

    static fromJSON(json: TuinJson): Tuin {
        const tui = new Tuin(json.naam, json.planten, new Date(json.dateAdded));
        return tui;
    }

    // Getters
    get naam(): string {
        return this._naam;
    }
    get planten(): string[]{
        return this._planten;
    }
    get dateAdded():Date {
        return this._dateAdded;
    }


}