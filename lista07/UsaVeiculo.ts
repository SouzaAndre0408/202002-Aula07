
import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Aviao } from "./Aviao";


let marcaCarro: string = "Volks";
let modeloCarro: string = "Jetta";
let placaCarro: string = "FLQ0408";
let velCarro: number = 10;
let velMaxCarro: number = 200;

let car = new Carro(4, marcaCarro, modeloCarro, placaCarro, velCarro, velMaxCarro);



for (let index: number = 1; index < 11; index++) {
    let carro = new Carro(5, "tesla", "f*699", "andle-0408", index, 390);
    carro.imprimeDados();

}
Carro.imprimeTotVeiculo();

for (let index = 1; index < 6; index++) {
    let aviao = new Aviao(500, "boig", "f*68799", "andle47-7778", index, 2000)
    aviao.imprimeDados();

}
Aviao.imprimeTotVeiculo();





// Carro1.Acelerar(10);
// Carro1.Acelerar(10);
// /*
// while (velCarro1 < velMaxCarro1) {
//     Carro1.Acelerar(9);
//     if (velCarro1 == velMaxCarro1)
//         console.log("Velocidade Maxima Atingida:" + velCarro1);
// }/*/
// Carro1.Frear();
// Carro1.imprimeDados();

