interface FotoJson{
    datum: string;
    url: string;
}
export class Foto {
    
    constructor(
        private _datum = new Date(),
        private _url: string
    ){}

    get datum(): Date {
        return this._datum;
    }

    get url(): string {
        return this.url;
    }

    static fromJSON(json: FotoJson): Foto {
        const foto = new Foto(new Date(json.datum), json.url);
        return foto;
    }
}