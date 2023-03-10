import Auto from './Auto'
import AutoDeportivo from './AutoDeportivo'
import Rueda from './Rueda';

//rueda
let ruedaPirelli : Rueda = new Rueda (14,'calle','carbono','Pirelli', 40, 'caucho', 'auto')

//auto comun
let fordFalcon : Auto = new Auto('123abc', 'Falcon', 'Ford', ruedaPirelli);
let fordKa : Auto = new Auto('456cde', 'Ka', 'Ford', ruedaPirelli);
let astra : Auto = new Auto('789fgh', 'astra', 'Chevrolet', ruedaPirelli);
let minicooper : Auto = new Auto('101ijk', 'Minicooper', 'Minicooper', ruedaPirelli);

//fordFalcon.acelerar();
//console.log(typeof(fordFalcon));
//fordFalcon.frenar()

//auto deportivo
let lamborghini : AutoDeportivo = new AutoDeportivo('5000cc', 'lmn112', '1994', 'Lamborghini', true, ruedaPirelli)
let ferrari : AutoDeportivo = new AutoDeportivo('4000cc', 'opq131', '1992', 'Ferrari', true, ruedaPirelli)
let camaro : AutoDeportivo = new AutoDeportivo('3000cc', 'rst415', '1996', 'Chevrolet', true, ruedaPirelli)
let rollsRoyce : AutoDeportivo = new AutoDeportivo('5000cc', 'abc123', '2000', 'rollsRoyce', true, ruedaPirelli)

//lamborghini.encenderApagar()
//lamborghini.acelerar()
//lamborghini.frenar()

let listadoAutos : Auto[] = [fordFalcon, lamborghini, fordKa, rollsRoyce, camaro, ferrari, astra, minicooper]
//console.log(listadoAutos);


function buscarMarca(array: Auto[], marca : string) {
    let autos = array.filter(auto => auto.marca === marca)
    console.log('autos:', autos);
}

function excluirMarca(array: Auto[], marca : string) {
    let autos = array.filter(auto => auto.marca !== marca)
    console.log('autos:', autos);
}
//Busca las marcas menos la que le asignamos en el parametro
//excluirMarca(listadoAutos, 'rollsRoyce') 

//Busca la marca que le asignamos en el parametro
//buscarMarca(listadoAutos, 'rollsRoyce') 