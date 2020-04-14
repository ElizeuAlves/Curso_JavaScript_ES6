"use strict";

/*class List{
    constructor(){
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Teste';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica{

    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(2, 5))*/
var a = 1; // Usando uma const não é possível reatribuir a variável;

function teste(x) {
  var y = 2; // Let é a keyword para trabalhar com variáveis de escopo

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
