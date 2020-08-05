import { Foto, FotoJson } from '../foto/foto.model';
import { Temperatuur, TemperatuurJson } from '../temperatuur/temperatuur.model';
import { Luchtdruk, LuchtdrukJson } from '../luchtdruk/luchtdruk.model';

interface OmgevingJson{
    id: number;
    fotos: FotoJson[];
    temperaturen: TemperatuurJson[];
    luchtdrukken: LuchtdrukJson[];
}
export class Omgeving {
    private _id: number;    
    constructor(
        private _fotos = new Array<Foto>(),
        private _temperaturen = new Array<Temperatuur>(),
        private _luchtdrukken = new Array<Luchtdruk>(),
    ){}

    static fromJSON(json: OmgevingJson): Omgeving {
        const omgeving = new Omgeving(
            json.fotos.map(Foto.fromJSON), 
            json.temperaturen.map(Temperatuur.fromJSON), 
            json.luchtdrukken.map(Luchtdruk.fromJSON)
        );
        omgeving._id = json.id
        return omgeving;
    }

    toJSON(): OmgevingJson {
        return <OmgevingJson> {
            fotos: this.fotos.map(f => f.toJSON()),
            temperaturen: this.temperaturen.map(t => t.toJSON()),
            luchtdrukken: this.luchtdrukken.map(l => l.toJSON())
        };
    }

    get id(): number {
        return this._id;
    }

    get fotos(): Foto[] {
        return this._fotos;
    }

    get temperaturen(): Temperatuur[]{
        return this._temperaturen;
    }

    get luchtdrukken(): Luchtdruk[]{
        return this._luchtdrukken;
    }
}