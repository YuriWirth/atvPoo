"use strict";
// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Normal_1 = __importDefault(require("./model/ingresso/Normal"));
const Vip_1 = __importDefault(require("./model/ingresso/Vip"));
const Camarote_1 = __importDefault(require("./model/ingresso/Camarote"));
const ingressoNormal = new Normal_1.default(20);
const ingressoVip = new Vip_1.default(20);
const ingressoCamarote = new Camarote_1.default(20);
ingressoNormal.imprimeValor();
ingressoVip.imprimeValor();
ingressoCamarote.imprimeValor();
// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
console.log("///////////////////////////////////////////////////");
const Novo_1 = __importDefault(require("./model/imovel/Novo"));
const Velho_1 = __importDefault(require("./model/imovel/Velho"));
const imovelNovo = new Novo_1.default("ue", 2000, 1000);
imovelNovo.imprimirValor();
const imovelVelho = new Velho_1.default("ua", 2000, 500);
imovelVelho.imprimirValor();
// 3. Dado o seguinte diagrama:
//         animal
//  cachorro cavalo gato
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
console.log("///////////////////////////////////////////////////");
const Cachorro_1 = __importDefault(require("./model/animais/Cachorro"));
const Gato_1 = __importDefault(require("./model/animais/Gato"));
const Cavalo_1 = __importDefault(require("./model/animais/Cavalo"));
const cachorro = new Cachorro_1.default();
const gato = new Gato_1.default();
const cavalo = new Cavalo_1.default();
cachorro.som();
gato.som();
cavalo.som();
