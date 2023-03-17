// Declaração de variáveis:

int numeroInteiro = 10;
double numeroDecimal = 3.14;
string texto = "Olá, mundo!";

// Estruturas de controle de fluxo:

// if/else
if (numeroInteiro > 5)
{
    Console.WriteLine("O número é maior do que 5.");
}
else
{
    Console.WriteLine("O número é menor ou igual a 5.");
}

// for
for (int i = 0; i < 10; i++)
{
    Console.WriteLine("O valor de i é: " + i);
}

// while
int contador = 0;
while (contador < 5)
{
    Console.WriteLine("O contador é: " + contador);
    contador++;
}


// Funções:

int Soma(int a, int b)
{
    return a + b;
}

// Função sem retorno (void)
void ImprimeMensagem(string mensagem)
{
    Console.WriteLine(mensagem);
}

// Classes e objetos:

// Classe Pessoa
class Pessoa
{
    public string Nome;
    public int Idade;
}

// Criação de objeto Pessoa
Pessoa pessoa1 = new Pessoa();
pessoa1.Nome = "João";
pessoa1.Idade = 25;

