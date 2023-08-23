# crie um programa em ruby que recebe o input de idade minima para beber, e se a idade nao for a idade minima, se for maior de 18 anos, aparece "Boas compras" no terminal, se nao, aparece " Ops, voce e menor de idade, espere alguns anos para beber"

def verifica_idade(idade_minima)
  print "Digite a idade mínima para beber: "
  idade_digitada = gets.chomp.to_i

  if idade_digitada >= idade_minima
    puts "Boas compras"
  else
    puts "Ops, você é menor de idade. Espere alguns anos para beber."
  end
end

idade_minima = 18
verifica_idade(idade_minima)


