# o que e desing patterns ?


Design patterns (padrões de projeto) são soluções comuns para problemas de design de software recorrentes que foram identificadas, documentadas e refinadas pela comunidade de desenvolvimento de software ao longo do tempo. Esses padrões descrevem soluções gerais para problemas específicos que podem ser adaptados para atender às necessidades específicas de um projeto de software.

Os padrões de design podem ser classificados em três categorias principais: padrões criacionais, padrões estruturais e padrões comportamentais. Os padrões criacionais são usados para criar objetos, os padrões estruturais são usados para lidar com a composição de classes e objetos, enquanto os padrões comportamentais são usados para definir como objetos interagem entre si.

Alguns exemplos de padrões de design incluem o padrão Singleton, que garante que uma classe tenha apenas uma instância em todo o programa; o padrão Factory, que usa uma classe de fábrica para criar objetos em vez de instanciá-los diretamente; e o padrão Observer, que permite que objetos se inscrevam em eventos e sejam notificados quando algo acontece.

Usar padrões de design pode tornar o código mais fácil de entender, modificar e manter, uma vez que eles fornecem uma linguagem comum para descrever soluções para problemas de design comuns.


### Tipos de design patterns

Os design patterns, ou padrões de projeto, podem ser classificados em três categorias principais: padrões criacionais, padrões estruturais e padrões comportamentais.

Padrões criacionais: estes padrões lidam com a criação de objetos e suas instâncias. Eles ajudam a encapsular o processo de criação de objetos, tornando-o mais flexível e reutilizável. Exemplos de padrões criacionais incluem Singleton, Factory Method, Abstract Factory, Builder e Prototype.

Padrões estruturais: esses padrões lidam com a composição de classes e objetos para formar estruturas maiores e mais complexas. Eles fornecem maneiras de conectar objetos para formar novas funcionalidades e reduzir a complexidade do código. Alguns exemplos de padrões estruturais incluem Adapter, Bridge, Composite, Decorator, Facade, Flyweight e Proxy.

Padrões comportamentais: esses padrões lidam com a interação entre objetos e a maneira como eles se comunicam e se comportam em relação uns aos outros. Eles ajudam a tornar o código mais flexível e fácil de entender, encapsulando as interações complexas entre os objetos. Alguns exemplos de padrões comportamentais incluem Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method e Visitor.

É importante notar que esses padrões são apenas um guia geral e podem ser adaptados e combinados de várias maneiras para atender às necessidades específicas de um projeto de software.

### Prototype

O padrão Prototype (Protótipo) é um padrão de design criacional que permite que os desenvolvedores criem novos objetos por meio da clonagem de objetos existentes. Em vez de criar um novo objeto do zero, o padrão Prototype permite que os desenvolvedores criem uma cópia exata de um objeto existente e, em seguida, modifiquem a cópia conforme necessário. Isso pode economizar tempo e recursos de desenvolvimento.

### Singleton

O padrão Singleton é outro padrão de design criacional que garante que uma única instância de uma classe seja criada e usada em todo o sistema. Isso é útil em situações em que apenas uma instância de uma classe é necessária para controlar o acesso a recursos compartilhados, como um banco de dados ou um arquivo. O padrão Singleton garante que apenas uma instância da classe seja criada e gerenciada em todo o sistema.


