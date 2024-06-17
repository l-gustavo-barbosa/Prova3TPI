import funcionario from "./funcionario";

class Mensalista extends funcionario{
    faltas:number;
    cargo:string;

    constructor(matricula:number,nome:string, idade:number, email:string, salario:number, faltas:number, cargo:string){
        super(matricula, nome, idade, email, salario)
            this.faltas = faltas;
            this.cargo = cargo;
            console.log(this.validaEmail() ? "" : "e-Mail inválido!")

    }
    validaEmail():boolean{
        return this.email.endsWith('@adm.xpto.tec.br') || this.email.endsWith('@dev.xpto.tec.br') || this.email.endsWith('@vendas.xpto.tec.br');
    };
    calcSalario(): number {
        return this.salario - this.calcFaltas() - this.calcINSS();
    }
    calcINSS(): number {
        const tetos:number[] = [1412,2666.68,4000.03,7786.02];
        const aliquota:number[] = [0.075, 0.09, 0.012, 0.014];
        let contribuicao:number;
        let salarioContribuicao = this.salario - this.calcFaltas()
        if (salarioContribuicao <= tetos[0]){contribuicao = this.salario * aliquota[0]}
        else if (salarioContribuicao < tetos[1]){contribuicao = this.salario * aliquota[1]}
        else if (salarioContribuicao < tetos[2]){contribuicao = this.salario * aliquota[2]}
        else if (salarioContribuicao < tetos[3] && salarioContribuicao * aliquota[3] <= 908,85){contribuicao = salarioContribuicao * aliquota[3]}
        else {contribuicao = 908.85}
        return  contribuicao
    }
    calcFaltas():number{
        return this.salario/30*this.faltas
    };
}
export default Mensalista;