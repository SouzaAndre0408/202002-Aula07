import { Veiculo } from "./Veiculo";

class Aviao extends Veiculo {
    private passageiros: number = 0;

    constructor(passageiros: number, marca: string, modelo: string, placa: string, vel: number, velMax: number) {
        super(marca, modelo, placa, vel, velMax);
        this.passageiros = passageiros;
    }

    getPassageiros(): number {
        return this.passageiros;
    }

    setPassageiros(passageiros: number) {
        this.passageiros = passageiros;
    }

    imprimeDados() {
        super.imprimeDados();
        console.log(`Numero de passageiros: ${this.getPassageiros()}`);
    }
}

export { Aviao };