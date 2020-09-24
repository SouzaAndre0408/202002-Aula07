import { Veiculo } from "./Veiculo";

class Carro extends Veiculo {
    private portas: number = 0;

    constructor(portas: number, marca: string, modelo: string, placa: string, vel: number, velMax: number) {
        super(marca, modelo, placa, vel, velMax);
        this.portas = portas;
    }

    getPortas(): number {
        return this.portas;
    }

    setPortas(portas: number) {
        this.portas = portas;
    }

    imprimeDados() {
        super.imprimeDados();
        console.log(`Número de portas: ${this.getPortas()}`);
    }
}

export { Carro };