import funcionario from "./funcionario";

class Horista extends funcionario{
    horas:number;
    funcao:string;

    constructor(matricula:number,nome:string, idade:number, email:string, salario:number, horas:number, funcao:string){
        super(matricula, nome, idade, email, salario);
            this.horas = horas;
            this.funcao = funcao;
            console.log(this.validaEmail() ? "" : "e-Mail inválido!")

    }
    validaEmail():boolean{
        return this.email.endsWith('@adm.xpto.tec.br') || this.email.endsWith('@dev.xpto.tec.br') || this.email.endsWith('@vendas.xpto.tec.br');
    };
    calcSalario(): number{
        return this.calcSalarioBruto() + this.calcDSR() - this.calcINSS();
    };
    calcINSS(): number{
        const tetos:number[] = [1412,2666.68,4000.03,7786.02];
        const aliquota:number[] = [0.075, 0.09, 0.12, 0.14];
        let contribuicao:number;
        let salarioContribuicao = this.calcSalarioBruto() + this.calcDSR() 
        
        if (salarioContribuicao <= tetos[0]){contribuicao = this.salario * aliquota[0]}
        else if (salarioContribuicao < tetos[1]){contribuicao = this.salario * aliquota[1]}
        else if (salarioContribuicao < tetos[2]){contribuicao = this.salario * aliquota[2]}
        else if (salarioContribuicao < tetos[3] && salarioContribuicao * aliquota[3] <= 908,85){contribuicao = salarioContribuicao * aliquota[3]}
        else {contribuicao = 908.85}
        return  contribuicao
    };
    calcDSR():number{
        return this.calcSalarioBruto()/25*4
    };
    calcSalarioBruto():number{
        return this.salario*this.horas;
    };
}

export default Horista