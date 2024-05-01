// 3. Dado o seguinte diagrama:

//         animal

//  cachorro cavalo gato

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

import Animal from "./Animal";

class Cavalo extends Animal {
  som(): void {
    console.log("Cavalo faz Iiirrrrí");
  }
}

export default Cavalo;
