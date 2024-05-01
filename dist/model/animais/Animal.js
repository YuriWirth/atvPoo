"use strict";
// 3. Dado o seguinte diagrama:
Object.defineProperty(exports, "__esModule", { value: true });
//         animal
//  cachorro cavalo gato
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
class Animal {
    constructor(comer = true, andar = true, respirar = true) {
        this.comer = comer;
        this.andar = andar;
        this.respirar = respirar;
    }
}
exports.default = Animal;
