puts "hello world"

# variaveis

x = 10
y = "hello"


# metodos

def greet(name)
  puts "Hello, #{name}!"
end
greet("John") #=> Hello, John!


# blocos

(1..5).each do |i|
  puts i
end

# condicionais

if x > 5
  puts "x is greater than 5"
elsif x == 5
  puts "x is equal to 5"
else
  puts "x is less than 5"
end

# operadores

x = 5
y = 10
z = x + y #=> 15


# constantes 

PI = 3.14159

# classes e objetos

class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    puts "Hi, my name is #{@name} and I'm #{@age} years old."
  end
end

person = Person.new("John", 30)
person.greet #=> Hi, my name is John and I'm 30 years old.


