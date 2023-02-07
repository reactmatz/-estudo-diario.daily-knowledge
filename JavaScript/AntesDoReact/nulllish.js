//Nullish Coalescing Operator

// quando voce quer lidar com variaveis que por sua vez existe um valor representado real nela, mas que o javascript interpreta como null, por ex o 0, ao inves de utilizar o operador || utilize o ?? pois ele vai ser mais restritivo e os valores nulos para ele vai ser algo como undefined ou null em si.

// veja o exemplo abaixo

var idade = 0;

const compar = "Minha idade e : " +  (idade ?? 'nao informada');
const teste = document.getElementById('minhaid').innerHTML = compar;

// veja que 0 e um valor real, certo ? 0 continua sendo um numero, se voce trocar o ?? por || voce vai ver que o codigo vai retornar 'nao informado' quando na verdade queremos que retorne 0.

// ou seja, nullish serve para quando vc precisar estabelecer um valor default para uma variavel que ainda nao foi for 'setada', ela ser estritamente precisa sobe oque e default ou nao, no caso de 0 iria retornar default com ||, oque nao queremos.


