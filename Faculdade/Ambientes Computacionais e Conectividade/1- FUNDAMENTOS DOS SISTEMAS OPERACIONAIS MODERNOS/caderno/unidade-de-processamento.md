
### Unidade de processamento
Unidade de Processamento Central (CPU) é a composição de registradores, Unidade de Controle (UC), Unidade Lógica Aritmética (ULA) e contador de programa.

Registradores: são memórias temporárias que existem dentro da CPU de altíssima velocidade;
Unidade de Controle (UC): é responsável por buscar as instruções na memória principal e classificar o seu tipo;
Unidade Lógica Aritmética (ULA): é responsável por fazer as operações booleanas e aritméticas;
Contador de programa (PC): é responsável por avisar à UC qual será a próxima instrução a ser buscada e executada.

Isso mesmo! A CPU é o "cérebro" do computador, responsável por executar as instruções dos programas que são armazenados na memória principal. Os registradores são usados para armazenar dados temporários e operações aritméticas, enquanto a UC controla o fluxo de dados e instruções, buscando as instruções na memória principal e decodificando-as. A ULA realiza operações aritméticas e lógicas nos dados armazenados nos registradores e envia os resultados de volta para a memória ou para outros registradores. O contador de programa aponta para a próxima instrução que deve ser executada pela UC, permitindo que o processador execute o código de programa sequencialmente.

### E/S 

Sistema de entrada e saída é a unidade responsável por pegar os dados de entradas e mostrar os resultados de saída do programa.  Ciclo dessa execução compreende:

O contador de programa é utilizado pela UC para determinar qual e onde está a próxima instrução;
A UC busca a instrução do programa na memória principal;
A decodificação da instrução será feita para uma linguagem que a ULA possa interpretar;
Os dados requeridos são transferidos da memória e alocados nos registradores da CPU;
A ULA executa a instrução e coloca os resultados na memória ou nos próprios registradores.
Bem lembrado! O sistema de entrada e saída (ou E/S) é a interface que permite a comunicação entre o computador e o mundo externo, seja por meio de dispositivos de entrada (como teclado, mouse, scanner, leitor de código de barras, etc.) ou de saída (como monitor, impressora, alto-falante, etc.). O ciclo de execução do sistema de E/S pode ser descrito da seguinte forma:

O dispositivo de entrada/saída envia um sinal para a CPU, indicando que há dados para serem lidos ou escritos;
A UC interrompe a execução do programa atual e salva o estado atual do contador de programa e dos registradores em uma pilha de interrupção;
A UC lê a solicitação do dispositivo de E/S e inicia a transferência de dados entre o dispositivo e a memória principal, usando um controlador de E/S dedicado;
A UC aguarda a conclusão da operação de E/S, enquanto outras instruções podem ser executadas em paralelo;
Quando a operação de E/S é concluída, a UC restaura o estado anterior da CPU (contador de programa e registradores) a partir da pilha de interrupção e retorna à execução do programa principal.
Esse processo é conhecido como "interrupção de E/S" e é uma técnica usada para permitir que o processador execute outras tarefas enquanto aguarda a conclusão da operação de entrada ou saída.

### Alan Turing

Alan Turing (1912-1954) foi um matemático e criptógrafo britânico que é considerado um dos pais da ciência da computação. Ele é mais conhecido por seu trabalho durante a Segunda Guerra Mundial, quando liderou a equipe que quebrou o código Enigma dos alemães, um sistema de criptografia considerado inviolável na época.

Além de seu trabalho como criptógrafo, Turing também é conhecido por sua contribuição para o desenvolvimento da ideia de uma "máquina universal", que foi o precursor do conceito moderno de computador. Em 1936, ele publicou um artigo intitulado "On Computable Numbers, with an Application to the Entscheidungsproblem", no qual descreveu uma máquina teórica que poderia executar qualquer cálculo que pudesse ser expresso como um algoritmo.

Esse trabalho estabeleceu as bases da teoria da computação e inspirou o desenvolvimento de máquinas de computação eletrônica nas décadas seguintes. Além disso, Turing também contribuiu para a ciência da inteligência artificial, propondo um teste para determinar se uma máquina poderia ser considerada "inteligente" - o famoso "Teste de Turing".

Infelizmente, Turing teve uma vida marcada por dificuldades pessoais e profissionais. Em 1952, ele foi condenado por homossexualidade, que na época era considerada um crime no Reino Unido, e foi submetido a castração química. Ele cometeu suicídio em 1954, aos 41 anos. Somente em 2009, o então primeiro-ministro britânico Gordon Brown emitiu um pedido de desculpas oficial em nome do governo britânico pelo tratamento que Turing recebeu.


### Criador do linux


O criador do Linux é Linus Torvalds. Ele nasceu em Helsinque, Finlândia, em 28 de dezembro de 1969. Linus estudou ciência da computação na Universidade de Helsinki e começou a escrever o código para o que se tornaria o kernel do Linux em 1991, quando tinha apenas 21 anos.

Inicialmente, o Linux era apenas um hobby para Linus, mas ele rapidamente se tornou um projeto de código aberto colaborativo com a ajuda de outros programadores em todo o mundo. A ideia de Linus era criar um sistema operacional livre e de código aberto que pudesse ser usado em computadores pessoais, servidores e outros dispositivos.

O kernel do Linux é a base de muitos sistemas operacionais populares hoje em dia, incluindo Android, Chrome OS e diversas distribuições de Linux para desktops e servidores. Linus ainda é o responsável pela manutenção do kernel do Linux e é considerado uma figura importante no movimento de software livre e de código aberto.

Além de seu trabalho no Linux, Linus também é conhecido por sua personalidade controversa e por suas opiniões fortes e sinceras. Ele frequentemente se envolve em debates acalorados com outros desenvolvedores do Linux e é conhecido por usar linguagem forte em suas mensagens e comentários. No entanto, ele também é amplamente respeitado por sua contribuição significativa para a tecnologia da computação.


### O que e kernel ?

Kernel, em computação, é a camada central de um sistema operacional que gerencia os recursos de hardware e software do computador. É a primeira camada de software que é carregada na memória RAM quando o computador é iniciado, e é responsável por inicializar e controlar todos os outros componentes do sistema operacional.

O kernel é responsável por várias tarefas críticas, incluindo a alocação de memória, gerenciamento de dispositivos de entrada e saída, gerenciamento de processos e threads, controle de acesso a recursos do sistema, gerenciamento de arquivos e diretórios, e muito mais. Ele também é responsável por fornecer uma interface entre o hardware do computador e o software de nível de usuário, permitindo que programas e aplicativos acessem os recursos do sistema.

Existem diferentes tipos de kernels, incluindo os monolíticos, os microkernels e os híbridos. O kernel monolítico é o mais comum, sendo usado em sistemas operacionais como o Linux, Windows e macOS. Esse tipo de kernel é um grande bloco de código que gerencia todos os recursos do sistema operacional. Já o microkernel é uma abordagem mais modular que mantém apenas as funções essenciais no kernel e move os serviços restantes para outros componentes do sistema operacional. Por fim, o kernel híbrido combina elementos de ambos os tipos de kernel, oferecendo uma abordagem mais flexível e escalável.

Em resumo, o kernel é a base do sistema operacional, responsável por controlar e gerenciar todos os recursos do hardware e software do computador. Ele fornece uma interface para que os programas possam se comunicar com o hardware e acessar os recursos do sistema.


### Linha do tempo de grandes marcos da computacao de 1934 a 2020, e seus autores.

1934: Invenção do primeiro computador eletromecânico, o Atanasoff-Berry Computer, por John Atanasoff e Clifford Berry.
1937: Desenvolvimento do primeiro sistema de codificação de caracteres, o ASCII, por uma equipe liderada por Ralph Hartley.
1941: Desenvolvimento do primeiro computador programável, o Z3, por Konrad Zuse.
1946: Construção do primeiro computador eletrônico de uso geral, o ENIAC, por John Mauchly e J. Presper Eckert.
1951: Desenvolvimento do primeiro disco rígido, o RAMAC 305, pela IBM.
1957: Desenvolvimento da linguagem de programação FORTRAN, por uma equipe liderada por John Backus na IBM.
1964: Desenvolvimento do sistema operacional Multics, por uma equipe liderada por Fernando Corbato, da MIT.
1969: Desenvolvimento do sistema operacional UNIX, por uma equipe liderada por Ken Thompson e Dennis Ritchie, da Bell Labs.
1971: Desenvolvimento do primeiro microprocessador, o Intel 4004, por Federico Faggin, Ted Hoff e Stanley Mazor.
1975: Lançamento do primeiro computador pessoal, o Altair 8800, por Ed Roberts.
1981: Lançamento do IBM PC, que se tornou o padrão para computadores pessoais, por uma equipe liderada por Don Estridge na IBM.
1989: Criação da World Wide Web, por Tim Berners-Lee, do CERN.
1991: Lançamento do sistema operacional Linux, por Linus Torvalds.
1998: Fundação do Google, por Larry Page e Sergey Brin.
2001: Lançamento do iPod, por Steve Jobs e a equipe da Apple.
2004: Lançamento do Facebook, por Mark Zuckerberg e seus colegas de faculdade.
2007: Lançamento do iPhone, por Steve Jobs e a equipe da Apple.
2010: Lançamento do iPad, por Steve Jobs e a equipe da Apple.
2011: Lançamento do assistente pessoal Siri, por uma equipe liderada por Dag Kittlaus, Adam Cheyer e Tom Gruber, da Apple.
2016: Vitória do programa de inteligência artificial AlphaGo sobre o campeão mundial de Go, Lee Sedol, criado pela equipe da DeepMind, liderada por Demis Hassabis.
2020: A pandemia de COVID-19 leva a um aumento significativo no uso de tecnologia para trabalho remoto, ensino a distância, entre outras atividades, transformando a maneira como muitas pessoas trabalham e se comunicam.



### Gargalo de Von Neumann

O gargalo de Von Neumann é o atrofiamento que está no canal de transmissão entre a CPU e a memória, pois essa não consegue trabalhar em frequências tão altas quanto a CPU, que fica ociosa por um certo tempo. 
O conceito de "gargalo de Von Neumann" se refere a uma limitação no desempenho dos computadores de arquitetura Von Neumann, que são a base para a maioria dos computadores modernos. Essa limitação é causada pela necessidade de compartilhar o mesmo barramento para transferir dados entre a CPU e a memória, o que pode criar um gargalo no desempenho quando a quantidade de dados a ser transferida é muito grande.

Esse gargalo ocorre porque a CPU é capaz de processar dados a uma velocidade muito maior do que a capacidade da memória em fornecer esses dados. Isso significa que a CPU pode ficar ociosa enquanto espera por dados da memória, reduzindo a eficiência do sistema como um todo.

O conceito foi nomeado em homenagem a John von Neumann, um matemático e físico húngaro-americano que foi um dos principais contribuintes para o desenvolvimento da arquitetura de computadores moderna. Ele propôs a ideia de um computador com uma unidade central de processamento (CPU), memória e dispositivos de entrada/saída, todos conectados por um barramento compartilhado.

### Como funciona a linguagem assembly

A linguagem Assembly é uma linguagem de programação de baixo nível que se aproxima muito da linguagem de máquina. Ela utiliza mnemônicos para representar as instruções que serão executadas pelo processador, sendo que cada instrução corresponde a um código de máquina específico.

Na linguagem Assembly, cada instrução é escrita em uma linha e é composta por um mnemônico, que representa a operação a ser realizada, seguido de operandos, que podem ser valores constantes, registradores, endereços de memória ou expressões aritméticas.

Por exemplo, a instrução em Assembly para somar dois números inteiros armazenados em registradores é:

sql
Copy code
ADD EAX, EBX
Nesse caso, "ADD" é o mnemônico que representa a operação de adição, "EAX" e "EBX" são os registradores que contêm os números a serem somados.

Depois que o programa em Assembly é escrito, ele precisa ser traduzido para linguagem de máquina, que é a linguagem que o processador entende. Essa tradução é realizada por um programa chamado de "montador" (assembler), que gera um arquivo executável contendo os códigos de máquina correspondentes às instruções em Assembly.

Apesar de ser uma linguagem de programação de baixo nível e, portanto, ser mais difícil de ser escrita e entender do que outras linguagens de programação de alto nível, a linguagem Assembly é bastante utilizada em programação de sistemas operacionais, drivers de dispositivos e outras aplicações que precisam de acesso direto ao hardware do computador.

### O que e buffer ?
Buffer é uma área de memória temporária que é usada para armazenar dados enquanto eles estão sendo transferidos de um dispositivo para outro, processados ou aguardando a execução de uma operação.

O buffer é frequentemente utilizado para armazenar dados que estão sendo transferidos entre dois dispositivos com velocidades diferentes, de forma que o dispositivo mais lento possa receber e processar os dados no seu próprio ritmo, sem sobrecarregar o dispositivo mais rápido. Por exemplo, quando você assiste a um vídeo online, o buffer é usado para armazenar temporariamente uma parte do vídeo enquanto ele é carregado, para que possa ser reproduzido sem interrupções.

Além disso, os buffers são usados para armazenar dados temporariamente durante a execução de operações de entrada e saída em dispositivos de armazenamento, como discos rígidos, CD-ROMs e pendrives USB.

Os buffers podem ser de tamanho variável, dependendo do tipo de dados que estão sendo armazenados e do propósito do buffer. A gestão adequada do buffer é importante para garantir que os dados sejam transferidos e processados de maneira eficiente e sem erros.



### Exemplo pratico sobre exclusao mutua

A exclusão mútua é um mecanismo utilizado na programação concorrente para garantir que dois ou mais processos não acessem simultaneamente uma mesma região crítica do código, evitando assim possíveis problemas de inconsistência ou corrupção de dados.

Um exemplo prático de exclusão mútua pode ser visto no acesso a um arquivo compartilhado por dois processos em um sistema operacional. Se ambos os processos tentarem acessar e modificar o arquivo simultaneamente, pode ocorrer um problema de inconsistência de dados, onde o conteúdo do arquivo pode ser alterado de maneira não previsível.

Para evitar esse tipo de problema, é necessário implementar um mecanismo de exclusão mútua para garantir que apenas um processo tenha acesso ao arquivo por vez. Isso pode ser feito, por exemplo, utilizando-se um semáforo, que é um objeto que pode ser utilizado para controlar o acesso a uma região crítica do código.

Suponha que temos dois processos A e B que precisam acessar um arquivo compartilhado. O processo A deseja escrever dados no arquivo, enquanto o processo B deseja ler esses dados. Para garantir a exclusão mútua, podemos implementar o seguinte algoritmo:

Inicialmente, o processo A tenta obter a exclusão mútua do arquivo, utilizando um semáforo. Se o semáforo estiver livre, o processo A pode escrever no arquivo. Caso contrário, ele deve aguardar até que o semáforo seja liberado.

Enquanto isso, o processo B tenta obter a exclusão mútua do arquivo, também utilizando o semáforo. Se o semáforo estiver livre, o processo B pode ler os dados do arquivo. Caso contrário, ele deve aguardar até que o semáforo seja liberado.

Quando o processo A terminar de escrever no arquivo, ele libera a exclusão mútua do semáforo, permitindo que o processo B possa ler os dados.

Quando o processo B terminar de ler os dados, ele também libera a exclusão mútua do semáforo, permitindo que outros processos possam acessar o arquivo.

Dessa forma, garantimos que apenas um processo tenha acesso ao arquivo por vez, evitando problemas de exclusão mútua.


### O que sao processos concorrentes ? 

Processos concorrentes são processos que estão executando simultaneamente em um sistema, compartilhando recursos como CPU, memória, dispositivos de entrada e saída, entre outros. Esses processos podem ser independentes ou interdependentes, ou seja, podem ser executados sem interação ou podem depender de outros processos para executar determinadas tarefas. O objetivo da concorrência é maximizar o uso dos recursos do sistema e melhorar o desempenho e a eficiência da execução das tarefas. No entanto, é importante garantir a sincronização e a comunicação adequada entre os processos concorrentes para evitar conflitos e condições de corrida que podem levar a erros e atrasos no sistema.

# E como esses conflitos sao evitados ? 
Os conflitos entre processos concorrentes são evitados através de mecanismos de sincronização e comunicação entre processos, que permitem que os processos compartilhem recursos de forma segura e coordenada. Alguns dos mecanismos mais comuns de sincronização incluem:

Semáforos: um semáforo é uma variável que é usada para controlar o acesso concorrente a recursos compartilhados, permitindo que apenas um processo de cada vez acesse o recurso. O semáforo é utilizado como um bloqueio, que é ativado pelo processo que está utilizando o recurso e desativado quando o recurso estiver livre para ser usado por outro processo.

Mutex: é um objeto que é usado para proteger um recurso compartilhado por vários processos. Apenas um processo por vez pode adquirir o mutex, e os outros processos que desejam acessar o recurso compartilhado precisam esperar até que o mutex esteja liberado pelo processo que o está usando.

Monitores: são estruturas de dados que encapsulam o acesso concorrente a recursos compartilhados. Os processos que desejam acessar o recurso compartilhado precisam entrar no monitor, e apenas um processo por vez pode estar dentro do monitor.

Esses mecanismos de sincronização garantem que apenas um processo por vez possa acessar um recurso compartilhado, evitando condições de corrida e conflitos entre processos. A comunicação entre processos também é importante para permitir que os processos coordenem suas ações e compartilhem informações de forma segura e consistente. Algumas das técnicas de comunicação entre processos incluem filas de mensagens, pipes, sockets, entre outras.


### O que sao operacoes atomicas ? 

Operações atômicas são aquelas que ocorrem de maneira indivisível, ou seja, não podem ser interrompidas ou divididas em partes menores. Em outras palavras, uma operação atômica é executada de uma só vez, sem interferência de outras operações concorrentes.

O uso de operações atômicas é fundamental em sistemas concorrentes para garantir a consistência dos dados compartilhados. Quando várias threads ou processos tentam modificar uma mesma variável compartilhada simultaneamente, sem o uso de operações atômicas, podem ocorrer condições de corrida e inconsistências nos resultados.

Assim, operações atômicas permitem que uma operação seja realizada sem que outras operações concorrentes interfiram no seu resultado, garantindo que a operação seja executada completamente ou não seja executada de forma alguma. Em geral, sistemas operacionais e linguagens de programação possuem suporte a algumas operações atômicas, como leitura e escrita de variáveis em um único passo.
