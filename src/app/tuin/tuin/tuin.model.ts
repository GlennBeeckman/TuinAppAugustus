import {Plant, PlantJson} from '../plant/plant.model';

interface TuinJson {
    naam: string;
    planten: PlantJson[];
    dateAdded: string;
}

export class Tuin {
    constructor(
        private _naam:string,
        private _planten = new Array<Plant>(),
        private _dateAdded= new Date()
    ){}

    static fromJSON(json: TuinJson): Tuin {
        const tui = new Tuin(json.naam, json.planten.map(Plant.fromJSON), new Date(json.dateAdded));
        return tui;
    }

    toJSON(): TuinJson {
        return <TuinJson> {
            naam: this.naam,
            dateAdded: this.dateAdded.toDateString(),
            planten: this.planten.map(pl => pl.toJSON())
        }
    }

    // Getters
    get naam(): string {
        return this._naam;
    }
    get planten(): Plant[]{
        return this._planten;
    }
    get dateAdded():Date {
        return this._dateAdded;
    }

    addPlant(naam: string, datumGeplant: Date, dagenTotOogst: number)
    {
        this._planten.push(new Plant(naam, datumGeplant, dagenTotOogst));
    }


}