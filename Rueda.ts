export default class Rueda{

    tamaño: number
    tipo: string;
    material: string;
    marca: string;
    presionAire: number;
    presionMaxima: number;
    materialCubierta: string;
    tipodePico: string;

    constructor(tamaño:number, tipo:string, material:string, marca:string, presionAire:number, 
        materialCubierta:string, tipodePico:string){
        this.tamaño = tamaño;
        this.tipo = tipo;
        this.material = material;
        this.marca = marca;
        this.presionAire = presionAire;
        this.presionMaxima = 40;
        this.materialCubierta = materialCubierta;
        this.tipodePico = tipodePico;

    }

    inflar(){
        if(this.presionAire < this.presionMaxima){
            this.presionAire = this.presionAire + 10;
        } else {
            console.log('No se puede inflar mas de:', this.presionMaxima);
            
        }
    }
}