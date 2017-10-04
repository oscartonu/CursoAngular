/**
 * export class Provincia{
    idPro: number;
    namePro: string;

    constructor(id: number, name: string){
        this.idPro = id;
        this.namePro = name;
    }
}
*/

export class Provincia{   
    constructor(public idPro: number, public namePro: string){
    }
}