export class Veiculo {
    public marca: string = "";
    public modelo: string = "";
    private placa: string = "";
    private vel: number = 0;
    protected velMax: number = 0;
    static totVeiculos: number = 0;

    constructor(marca: string, modelo: string, placa: string, vel: number, velMax: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.vel = vel;
        this.velMax = velMax;
        Veiculo.totVeiculos += 1;
    }

    Acelerar(velocidade) {
        if (velocidade > 11) {
            console.log("Não permitido aumentar a velocidade em mais de 10Km/hora");
            return this.vel;
        }
        this.vel += velocidade;
        if (this.vel >= this.velMax) {
            console.log("Velocidade Máxima atingida!Velocidade Atual:" + this.velMax);
            this.vel = this.velMax;
        }
        else {
            this.vel += velocidade;
            console.log("Velocidade Atual:" + this.vel);
        }
    }

    Frear() {
        let temp = this.vel / 10;
        this.vel = 0;
        console.log("Tempo para frear:" + temp + "s");
    }
    imprimeDados() {
        console.log("Dados do Veiculo:");
        console.log("* Marca:" + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Placa: " + this.placa);
        console.log("Velocidade Atual: " + this.vel);
        console.log("Velocidade Maxima:" + this.velMax);
    }

    static imprimeTotVeiculo() {
        console.log(`Total de veiculos: ${Veiculo.totVeiculos}`)
    }

}
