---

Ruby é uma linguagem de programação dinâmica e interpretada, conhecida por sua simplicidade e produtividade. Criada em meados da década de 1990 por Yukihiro "Matz" Matsumoto, Ruby foi projetada para ser uma linguagem de programação que combina as melhores características de suas predecessoras, como Perl, Smalltalk, Eiffel, Ada e Lisp.

### Características Principais

1. **Sintaxe Elegante e Legível**:
    - Ruby tem uma sintaxe que é fácil de ler e escrever, tornando-a acessível tanto para iniciantes quanto para programadores experientes. A linguagem enfatiza a simplicidade e a clareza.
2. **Orientada a Objetos**:
    - Tudo em Ruby é um objeto, incluindo números, strings e até mesmo classes. Isso permite um design mais intuitivo e modular.
3. **Flexibilidade e Dinamismo**:
    - Ruby permite modificar a própria estrutura do programa em tempo de execução. Isso possibilita técnicas avançadas de programação, como metaprogramação.
4. **Blocos e Closures**:
    - Ruby tem um suporte poderoso para blocos, procs e lambdas, que são funções anônimas que podem ser passadas como argumentos para métodos. Isso facilita a manipulação de coleções e a implementação de iteradores personalizados.
5. **Bibliotecas Ricas**:
    - Ruby tem uma vasta coleção de bibliotecas padrão e gemas (bibliotecas externas) que simplificam o desenvolvimento de aplicações.

### Uso Comum

1. **Desenvolvimento Web**:
    - Ruby é amplamente conhecido por sua associação com o framework Ruby on Rails, que facilita o desenvolvimento rápido de aplicações web robustas e escaláveis.
2. **Automação de Tarefas**:
    - Ruby é usado para escrever scripts que automatizam tarefas de sistema, como manipulação de arquivos, gerenciamento de processos e integração de sistemas.
3. **Desenvolvimento de Software**:
    - A linguagem é utilizada no desenvolvimento de uma ampla gama de aplicações de software, desde ferramentas de linha de comando até aplicações complexas.

### Comunidade e Ecossistema

Ruby tem uma comunidade ativa e vibrante, que contribui com uma vasta quantidade de gemas e recursos. Algumas das conferências e encontros mais populares incluem RubyConf, RailsConf e meetups locais de Ruby.

## Sintaxe basica

Primeiramente, tudo em Ruby e um objeto ⇒

Isso quer dizer que cada tipo de dado vai ter metodos e propriedades, e com isso você pode manipular estes dados como muita facilidade.

```ruby
# isso inclui numeros
3.class #=> integer

# tambem inclui strings
'Hello'.class #=> string

#Ate mesmo funções/metodos
"Hello".method(:class).class #=> Method

```

### Variaveis sao muito simples ⇒

```ruby
nome = "matheus"
idade = 25
atividades = ['tocar guitarra', 'codar', 'correr na praia', 'jogar']
```

### Ruby para otarios!

> *geralmente quando se tem ! na frente de algo, no ruby e a negacao, logo e breve trocadilho ai no titulo, ruby para NAO otarios*
> 

Resumo da aulinha do youtube do nosso mano deyvin ⇒

https://www.youtube.com/watch?v=sR91qESLFDM

### Operadores aritimeticos

```ruby
# Operações aritméticas básicas
1 + 1 #=> 2      (soma)
8 - 1 #=> 7      (subtração)
10 * 2 #=> 20    (multiplicação)
35 / 5 #=> 7     (divisão)
2 ** 5 #=> 32    (exponenciação)
5 % 3 #=> 2      (módulo - resto da divisão)

# Operadores bit a bit
3 & 5 #=> 1      (AND bit a bit)
3 | 5 #=> 7      (OR bit a bit)
3 ^ 5 #=> 6      (XOR bit a bit)

# Aritmética é apenas açúcar sintático
# para chamar um método em um objeto
1.+(3) #=> 4     (soma chamando método)
10.* 5 #=> 50    (multiplicação chamando método)
100.methods.include?(:/) #=> true  (verifica se o método de divisão está incluído na lista de métodos do objeto)

```

**Valores especiais**

```ruby
# Valores especiais são objetos
nil   # equivalente a null em outras linguagens
true  # verdadeiro
false # falso

# Classes dos valores especiais
nil.class   #=> NilClass   (classe do objeto nil)
true.class  #=> TrueClass  (classe do objeto true)
false.class #=> FalseClass (classe do objeto false)

```

**Equidade e inequidade** 

```ruby
# Igualdade
1 == 1 #=> true   (verifica se 1 é igual a 1)
2 == 1 #=> false  (verifica se 2 é igual a 1)

# Desigualdade
1 != 1 #=> false  (verifica se 1 é diferente de 1)
2 != 1 #=> true   (verifica se 2 é diferente de 1)

```

**Verificando tipo de valores falsy**

```ruby
# Dupla negação (!!) para converter valores para booleanos
!!nil   #=> false  (nil é considerado falso)
!!false #=> false  (false é falso)
!!0     #=> true   (0 é considerado verdadeiro)
!!""    #=> true   (string vazia é considerada verdadeira)

```

**Operadores de comparação**

```ruby
# Operadores de comparação
1 < 10  #=> true   (verifica se 1 é menor que 10)
1 > 10  #=> false  (verifica se 1 é maior que 10)
2 <= 2  #=> true   (verifica se 2 é menor ou igual a 2)
2 >= 2  #=> true   (verifica se 2 é maior ou igual a 2)

```

**E alguns mais…**

```ruby
# Operador de comparação combinado (retorna `1` se o primeiro argumento é maior,
# `-1` se o segundo argumento é maior, e `0` caso contrário)
1 <=> 10 #=> -1  (1 < 10)
10 <=> 1 #=> 1   (10 > 1)
1 <=> 1 #=> 0    (1 == 1)

# Operadores lógicos
true && false #=> false  (E lógico: verdadeiro e falso é falso)
true || false #=> true   (OU lógico: verdadeiro ou falso é verdadeiro)

# Existem versões alternativas dos operadores lógicos com precedência muito menor.
# Estes são usados como construtos de controle de fluxo para encadear declarações
# até que uma delas retorne verdadeiro ou falso.

# `do_something_else` é chamado apenas se `do_something` tiver sucesso.
do_something() and do_something_else()
# `log_error` é chamado apenas se `do_something` falhar.
do_something() or log_error()

```

### Interporlação de string

```ruby
# Interpolação de strings
placeholder = 'use string interpolation'
"I can #{placeholder} when using double quoted strings"
#=> "I can use string interpolation when using double quoted strings"

# Combinação de strings usando `+`, mas não com outros tipos
'hello ' + 'world'  #=> "hello world"
'hello ' + 3 #=> TypeError: can't convert Fixnum into String
'hello ' + 3.to_s #=> "hello 3"
"hello #{3}" #=> "hello 3"

# Combinação de strings e operadores
'hello ' * 3 #=> "hello hello hello "

# Adição de strings
'hello' << ' world' #=> "hello world"

# Impressão com nova linha no final
puts "I'm printing!"
#=> I'm printing!
	#=> nil

# Impressão sem nova linha no final
print "I'm printing!"
#=> "I'm printing!"
#=> nil

```

### Convenções de Estilo de Código

1. **Indentação**:
    - Use 2 espaços para indentação, não use tabs.
    
    ```ruby
    def some_method
      do_something
    end
    
    ```
    
2. **Nomes de Variáveis e Métodos**:
    - Use `snake_case` para variáveis e nomes de métodos.
    
    ```ruby
    some_variable = 10
    def some_method
      # código
    end
    
    ```
    
3. **Nomes de Classes e Módulos**:
    - Use `CamelCase` para classes e módulos.
    
    ```ruby
    class SomeClass
      # código
    end
    
    module SomeModule
      # código
    end
    
    ```
    
4. **Constantes**:
    - Use `UPPER_CASE` para nomes de constantes.
    
    ```ruby
    
    MAX_ATTEMPTS = 5
    
    ```
    

### Estrutura e Organização

1. **Métodos**:
    - Mantenha os métodos curtos e focados em uma única responsabilidade.
    - Use nomes de métodos descritivos.
    
    ```ruby
    def calculate_total(price, tax)
      price + tax
    end
    
    ```
    
2. **Classes**:
    - Mantenha as classes focadas em uma única responsabilidade.
    - Separe as responsabilidades em diferentes classes ou módulos se necessário.
3. **Comentários**:
    - Use comentários para explicar o "porquê" do código, não o "como".
    - Evite comentários redundantes ou óbvios.
    
    ```ruby
    # Má prática
    total = price + tax # Adiciona o imposto ao preço
    
    # Boa prática
    # Calcula o total incluindo o imposto
    total = price + tax
    
    ```
    

### Boas Práticas de Programação

1. **Evite Código Duplicado**:
    - Reutilize código através de métodos, classes ou módulos.
    - Siga o princípio DRY (Don't Repeat Yourself).
2. **Trate Exceções**:
    - Use tratamento de exceções para lidar com erros de forma graciosa.
    - Evite capturar exceções genéricas (e.g., `rescue StandardError`), capture exceções específicas quando possível.
    
    ```ruby
    begin
      # código que pode falhar
    rescue SomeSpecificError => e
      # tratamento de erro específico
    rescue StandardError => e
      # tratamento de erro genérico
    end
    
    ```
    
3. **Escreva Testes**:
    - Escreva testes para garantir que seu código funcione conforme o esperado.
    - Use frameworks de testes como RSpec ou Minitest.
4. **Use Convenções da Comunidade**:
    - Siga as convenções de estilo e melhores práticas da comunidade Ruby, como as especificadas no [Ruby Style Guide](https://github.com/rubocop/ruby-style-guide).
    - Utilize ferramentas como RuboCop para garantir a aderência ao estilo.

### Boas Práticas Específicas de Ruby

1. **Métodos de Predicado**:
    - Use `?` ao final de métodos que retornam um booleano.
    
    ```ruby
    def active?
      # código que retorna true ou false
    end
    
    ```
    
2. **Métodos de Perigo**:
    - Use `!` ao final de métodos que modificam o objeto receptor ou têm efeitos colaterais significativos.
    
    ```ruby
    def save!
      # código que salva com validações rigorosas
    end
    
    ```
    
3. **Evite Modificações Diretas em Objetos**:
    - Prefira métodos que retornam novos objetos ao invés de modificar os existentes.
    
    ```ruby
    # Má prática
    def add_item(item)
      @items << item
    end
    
    # Boa prática
    def with_item(item)
      @items + [item]
    end
    
    ```
    

### Uso do Splat Operator (*)

1. **Desestruturação de Arrays**
    
    O splat operator pode ser usado para desestruturar arrays, ou seja, para atribuir múltiplos elementos de um array a variáveis individuais.
    
    ```ruby
    # Exemplo de desestruturação de array com splat operator
    numbers = [1, 2, 3, 4, 5]
    first, *middle, last = numbers
    
    first #=> 1
    middle #=> [2, 3, 4]
    last #=> 5
    
    ```
    
    Neste exemplo, `*middle` captura todos os elementos do segundo ao penúltimo elemento do array `numbers`.
    
2. **Passagem de Argumentos Variáveis**
    
    O splat operator permite passar um número variável de argumentos para métodos.
    
    ```ruby
    # Exemplo de passagem de argumentos variáveis para um método
    def sum(*numbers)
      numbers.sum
    end
    
    sum(1, 2, 3) #=> 6
    sum(4, 5) #=> 9
    
    ```
    
    Dentro do método `sum`, `*numbers` representa um array contendo todos os argumentos passados para o método.
    
3. **Expansão de Arrays**
    
    O splat operator pode ser usado para expandir arrays em listas de argumentos individuais.
    
    ```ruby
    # Exemplo de expansão de array com splat operator
    values = [10, 20, 30]
    result = calculate(*values)
    
    def calculate(a, b, c)
      a + b + c
    end
    
    result #=> 60
    
    ```
    
    Neste exemplo, `calculate(*values)` expande o array `values` em três argumentos individuais `10, 20, 30` quando chamando o método `calculate`.
    
4. **Criação de Arrays**
    
    O splat operator pode ser usado para criar arrays de uma maneira concisa.
    
    ```ruby
    # Exemplo de criação de array com splat operator
    first_part = [1, 2, 3]
    second_part = [4, 5, 6]
    combined = [*first_part, *second_part]
    
    combined #=> [1, 2, 3, 4, 5, 6]
    
    ```
    
    Aqui, `[*first_part, *second_part]` cria um novo array `combined` que contém todos os elementos de `first_part` seguidos por todos os elementos de `second_part`.
    

### Considerações Adicionais

- **Splat Operator em Argumentos**: É usado tanto para capturar quantidades variáveis de argumentos em métodos quanto para desestruturar arrays.
- **Compatibilidade**: Pode ser usado de forma eficaz em métodos que aceitam argumentos variáveis ou em situações onde a manipulação flexível de arrays é necessária.
- **Versatilidade**: O operador * é uma ferramenta versátil que simplifica muitas operações com arrays em Ruby, proporcionando um código mais limpo e conciso.

O splat operator é uma característica poderosa de Ruby que contribui para a expressividade e flexibilidade da linguagem, especialmente em manipulação de arrays e passagem de argumentos.
