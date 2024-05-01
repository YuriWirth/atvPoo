"use strict";
// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Novo extends Imovel_1.default {
    constructor(endereco, preco, adicional = 0) {
        super(endereco, preco);
        this.adicional = adicional;
    }
    imprimirValor() {
        console.log(`Endereço do imovel: ${this.endereco}`);
        console.log(`Novo valor do imovel NOVO: ${this.preco + this.adicional}`);
    }
}
exports.default = Novo;
