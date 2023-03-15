# prototype em ruby

# O conceito de protótipo em Ruby é diferente do conceito de protótipo em linguagens como JavaScript. Em Ruby, o protótipo é um padrão de design que permite criar objetos com um conjunto de propriedades e métodos em comum.

#   Para criar um protótipo em Ruby, você pode usar uma classe como modelo. Por exemplo:

class Animal
  def initialize(nome, idade)
    @nome = nome
    @idade = idade
  end
  
  def fazer_barulho
    puts "..."
  end
end

# Neste exemplo, criamos uma classe Animal com duas propriedades, nome e idade, e um método fazer_barulho. Podemos usar essa classe como modelo para criar outros objetos com as mesmas propriedades e métodos:

gato = Animal.new("Gato", 2)
cachorro = Animal.new("Cachorro", 3)

puts gato.fazer_barulho # imprime "..."
puts cachorro.fazer_barulho # imprime "..."

# Neste exemplo, criamos dois objetos, um gato e um cachorro, usando a classe Animal como modelo. Ambos os objetos têm as mesmas propriedades e métodos definidos na classe Animal.

# Em resumo, o conceito de protótipo em Ruby está relacionado à criação de objetos com um conjunto de propriedades e métodos em comum, usando uma classe como modelo.
