using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        // Declaração de um método com parâmetros
        int soma(int num1, int num2)
        {
            return num1 + num2;
        }

        // Uso de string interpolation para interpolar variáveis
        string nome = "João";
        string mensagem = $"Olá {nome}, bem-vindo!";

        // Uso de constantes e variáveis
        const int IDADE_MINIMA_PARA_BEBER = 18;
        int idade = 25;
        bool pode_beber = idade >= IDADE_MINIMA_PARA_BEBER;

        // Uso do operador spread para combinar arrays
        int[] array1 = { 1, 2, 3 };
        int[] array2 = { 4, 5, 6 };
        int[] array_combinado = array1.Concat(array2).ToArray();

        // Uso de destructuring assignment para extrair valores de tuples
        (string nome, int idade, string cidade) pessoa = ("Maria", 30, "São Paulo");
        var (nome, idade, cidade) = pessoa;

        // Uso de métodos com lambdas para transformar arrays
        int[] numeros = { 1, 2, 3, 4, 5 };
        int[] numeros_dobrados = numeros.Select(numero => numero * 2).ToArray();

        // Uso de métodos assíncronos para trabalhar com Promises
        using (var client = new System.Net.Http.HttpClient())
        {
            var resposta = client.GetAsync("https://api.exemplo.com/dados").Result;
            var dados = resposta.Content.ReadAsStringAsync().Result;
            return Newtonsoft.Json.JsonConvert.DeserializeObject(dados);
        }
    }
}
