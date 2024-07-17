# Desafio: Calculadora Simples
# Crie uma calculadora simples em Ruby que seja capaz de realizar as seguintes operações básicas:

# Adição
# Subtração
# Multiplicação
# Divisão
# Requisitos:
# A calculadora deve solicitar ao usuário que insira dois números.
# Deve permitir que o usuário escolha qual operação deseja realizar (adição, subtração, multiplicação ou divisão).
# Após executar a operação, a calculadora deve exibir o resultado.
# Funcionalidades Opcionais (Bônus):
# Lidar com divisão por zero de forma segura (se optar por implementar a divisão).
# Permitir que o usuário continue realizando operações até que decida sair do programa.
# Oferecer uma interface amigável e instruções claras para o usuário.


# class Calculator
#   def initialize
#     puts "Iniciando calculadora"
#     sleep(2)
#   end 
#   def GetNumbers 
#     puts "Escolha dois numeros para fazer a operação =>"
#     @first_number = gets.chomp.to_f
#     @second_number = gets.chomp.to_f
#     GetNumbers
#   end
#   def SetOperatoion
#     puts "Escolha a operação que voce deseja fazer:"
#     puts <<~TEXT
#       01: addtion
#       02: subtration
#       03: division
#       04: multiplication
#     TEXT
#     puts "digite o numero correspondente a operação: "
#     @number_operation = gets.chomp
#   end
#   SetOperatoion
#   def Calculating
#     puts "Calculado..."
#     sleep(2)
#     case number_operation
#       when '1'
#         @result = first_number + second_number
      
#       when '2'
#         @result = first_number - second_number
#       when '3'
#         @result = first_number / second_number
#       when '4'
#         @result = first_number * second_number
#     end
#   end
#   Calculating
#   puts "O Resultado da sua operação é: #{result}"
# end

class Calculator
  def initialize
    puts "Iniciando calculadora..."
    sleep(2)
  end

  def get_numbers
    puts "Escolha dois numeros para fazer a operação =>"
    print "Primeiro: "
    @first_number = gets.chomp.to_f
    print "Segundo: "
    @second_number = gets.chomp.to_f
  end

  def set_operation
    puts "Escolha a operação que voce deseja fazer:"
    puts <<~TEXT
      01: addition
      02: subtraction
      03: division
      04: multiplication
    TEXT
    puts "Digite o número correspondente à operação: "
    @number_operation = gets.chomp
  end

  def calculating
    puts "Calculando..."
    sleep(2)
    @result = case @number_operation
              when '1', '01'
                @first_number + @second_number
              when '2', '02'
                @first_number - @second_number
              when '3', '03'
                @first_number / @second_number
              when '4', '04'
                @first_number * @second_number
              else
                "Operação inválida"
              end
  end

  def display_result
    puts "O resultado da sua operação é: #{@result.to_i}"
  end

  def run
    get_numbers
    set_operation
    calculating
    display_result
  end
end


calc = Calculator.new
calc.run
