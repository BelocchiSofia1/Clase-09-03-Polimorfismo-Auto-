import Auto from './Auto'
import Rueda from './Rueda'

export default class AutoDeportivo extends Auto{
   
    cilindrada: string;
    turbo: boolean;
    velocidadMax: number= 300;
    

    constructor(cilindrada: string, patente: string, modelo: string, 
        marca: string, turbo: boolean, rueda: Rueda){
        super(patente,modelo,marca, rueda)
            this.cilindrada = cilindrada;
            this.turbo = turbo

        }

        acelerar(): void{
            this.velocidadActual = this.velocidadActual + 50;

    }
}
    