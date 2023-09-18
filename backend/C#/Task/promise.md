// Em C#, não existe um tipo de dados nativo chamado "Promise" como em JavaScript. No entanto, a linguagem oferece um recurso semelhante chamado "Task" que pode ser usado para executar uma operação assíncrona e retornar um resultado quando a operação for concluída.

// A classe Task é uma classe genérica que representa uma operação assíncrona que pode retornar um valor. A sintaxe básica para criar uma tarefa é a seguinte:

Task<int> task = new Task<int>(() =>
{
    // Código assíncrono a ser executado
    return 42;
});

// Inicia a execução da tarefa
task.Start();

// Espera a conclusão da tarefa e obtém o resultado
int resultado = task.Result;

// No exemplo acima, uma nova tarefa é criada com uma função anônima que retorna o número 42. A tarefa é iniciada usando o método Start(), que inicia a execução da operação assíncrona. Em seguida, a propriedade Result é usada para obter o resultado da operação quando ela for concluída.

// Também é possível usar o operador await para aguardar a conclusão de uma tarefa em um contexto assíncrono:

async Task<int> MeuMetodoAssincrono()
{
    Task<int> task = Task.Run(() =>
    {
        // Código assíncrono a ser executado
        return 42;
    });

    int resultado = await task;
    return resultado;
}

// No exemplo acima, o método MeuMetodoAssincrono() é declarado como assíncrono e retorna uma tarefa que retorna um valor inteiro. Dentro do método, é criada uma nova tarefa usando o método estático Task.Run(), que inicia a execução da operação assíncrona. O operador await é usado para aguardar a conclusão da tarefa e obter o resultado quando estiver disponível.
