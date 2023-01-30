

function strict(){
  // Sintaxe strict mode a nível de função
  'use strict';
  function nested() { return "E eu também!"; }
  return "Oi! Eu sou uma função strict mode!  " + nested();
}
function notStrict() { return "Eu não sou strict."; }


