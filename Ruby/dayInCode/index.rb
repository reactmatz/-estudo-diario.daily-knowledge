# Declaração de um método com parâmetros
def soma(num1, num2)
  return num1 + num2
end

resultado = soma(1, 2)

puts "#{resultado}"

# Uso de string interpolation para interpolar variáveis
nome = "João"
mensagem = "Olá #{nome}, bem-vindo!"

# Uso de constantes e variáveis
IDADE_MINIMA_PARA_BEBER = 18
idade = 25
pode_beber = false

if idade >= IDADE_MINIMA_PARA_BEBER
  pode_beber = true
end

# Uso do operador splat para combinar arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]
array_combinado = [*array1, *array2]

# Uso de destructuring assignment para extrair valores de hashes
pessoa = {
  nome: "Maria",
  idade: 30,
  cidade: "São Paulo"
}

nome, idade, cidade = pessoa.values_at(:nome, :idade, :cidade)

# Uso de métodos com blocos para transformar arrays
numeros = [1, 2, 3, 4, 5]
numeros_dobrados = numeros.map { |numero| numero * 2 }

# Uso de métodos assíncronos para trabalhar com Promises
require 'net/http'
require 'json'

def buscar_dados
  uri = URI('https://api.exemplo.com/dados')
  resposta = Net::HTTP.get(uri)
  dados = JSON.parse(resposta)
  return dados
end
