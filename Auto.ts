//Clase 09/03 Polimorfismo

import Rueda from './Rueda'
export default class Auto{

    public patente: string;
    public modelo: string;
    public marca: string;
    protected velocidadActual: number;
    protected velocidadMax: number = 200;
    public encendido: boolean;
    rueda: Rueda

    constructor(patente: string, modelo: string, marca: string, rueda: Rueda){
       this.patente = patente;
       this.modelo = modelo;
       this.marca = marca;
       this.velocidadActual = 0;
       this.encendido = false;
       this.rueda = rueda;
    }

    encenderApagar(){
       if(this.encendido === true){
           this.encendido = false;
           console.log('El auto se ha apagado');
           
       } else {
           this.encendido = true;
           console.log('El auto se ha encendido');
           
       }
    }
    acelerar(){
       this.velocidadActual = this.velocidadActual + 10;
       console.log('El auto acelero 10km/h, su velocidad ahora es:' + this.velocidadActual);
       
    }
    frenar(){
       this.velocidadActual = this.velocidadActual - 10;
       console.log('El auto freno 10 km/h, su velocidad ahora es de:' + this.velocidadActual);
       
    }

   }