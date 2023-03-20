# Temas deste modulo:

- **Modelo de interconexão de sistemas abertos**
	O modelo de interconexão de sistemas abertos (OSI) é um modelo de referência que define como os sistemas de computação podem se comunicar uns com os outros por meio de redes de computadores. O modelo OSI é composto por sete camadas, cada uma das quais é responsável por um conjunto específico de funções. Essas camadas são: Camada Física, Camada de Enlace de Dados, Camada de Rede, Camada de Transporte, Camada de Sessão, Camada de Apresentação e Camada de Aplicação.
	
- **Arquiteturas abertas e fechadas**
	As arquiteturas abertas são aquelas que permitem a integração de diferentes sistemas de fornecedores diferentes, enquanto as arquiteturas fechadas são aquelas que exigem que os sistemas provenham de um único fornecedor. A arquitetura TCP/IP é um exemplo de uma arquitetura aberta que é usada para conectar sistemas em redes de computadores.
	
- **Arquiteturas TCP**
	A arquitetura TCP/IP é um conjunto de protocolos que define como os dados são transmitidos em redes de computadores. Ele é composto por duas camadas principais: a camada de Internet (ou camada de rede) e a camada de Transporte. A camada de Internet é responsável por enviar os pacotes de dados para seus destinos corretos, enquanto a camada de Transporte é responsável por garantir que os dados sejam transmitidos de forma confiável e sem erros.
	
- **Implementação  conceitos do protocolo IPv4 e IPv6.**
	IPv4 e IPv6 são protocolos da camada de Internet que são usados para endereçar dispositivos na rede. IPv4 usa endereços de 32 bits, enquanto IPv6 usa endereços de 128 bits. Para implementar esses protocolos, é necessário configurar as interfaces de rede dos dispositivos com os endereços IP corretos. Além disso, é importante entender como os pacotes de dados são roteados pela rede e como os protocolos de camadas superiores (como HTTP, FTP e SMTP) são usados para transmitir informações entre dispositivos.
	
	==========================================================================================

**1) O que é comunicação em rede?**
	A comunicação em rede é o processo de troca de informações entre dois ou mais dispositivos conectados em uma rede de computadores. Isso permite que esses dispositivos compartilhem recursos, como arquivos, impressoras e conexão à internet, e também possam colaborar em projetos e trabalhos em equipe.

**2) Por que a internet foi desenvolvida?**
	A internet foi desenvolvida com o objetivo de criar uma rede de computadores que pudesse conectar instituições de pesquisa e governamentais em todo o mundo. A ideia era permitir a troca de informações e a colaboração em projetos em um ambiente virtual, independente de localização geográfica. Com o tempo, a internet se tornou uma ferramenta indispensável para a comunicação, o comércio, o entretenimento e o acesso à informação em geral.

**3) Por que os modelos OSI e TCP/IP são os dois modelos mais importantes de comunicação de rede?**
	Os modelos OSI e TCP/IP são os dois modelos mais importantes de comunicação de rede porque eles fornecem uma estrutura de referência para entender como os dispositivos em uma rede de computadores se comunicam uns com os outros. O modelo OSI é uma referência teórica que define sete camadas de comunicação, enquanto o modelo TCP/IP é uma implementação prática que define quatro camadas. Ambos os modelos são amplamente utilizados em redes de computadores em todo o mundo.

**4) Por que o International Organization for Standardization criou o modelo OSI?**
	O International Organization for Standardization criou o modelo OSI para definir um padrão internacional para comunicação de rede. O objetivo era criar uma referência teórica que pudesse ser usada para orientar o desenvolvimento de protocolos de rede e facilitar a interoperabilidade entre diferentes sistemas.

**5) Quais são as quatro camadas do modelo TCP/IP e suas respectivas funções?**
	As quatro camadas do modelo TCP/IP são: camada de interface de rede, camada de internet, camada de transporte e camada de aplicação. A camada de interface de rede é responsável pela transmissão de dados na rede física. A camada de internet é responsável pelo endereçamento e roteamento de pacotes. A camada de transporte é responsável pela transmissão de dados confiável entre dispositivos e a camada de aplicação é responsável pela comunicação entre aplicativos.

**6) Quais são as diferenças entre o modelo OSI comparado ao modelo TCP/IP?**
	A principal diferença entre o modelo OSI e o modelo TCP/IP é que o modelo OSI tem sete camadas, enquanto o modelo TCP/IP tem apenas quatro. Além disso, o modelo OSI é mais teórico e é usado principalmente para fins educacionais, enquanto o modelo TCP/IP é uma implementação prática que é amplamente utilizada em redes de computadores em todo o mundo.

**7) O que é endereçamento IP e o que são suas subclasses e como são utilizadas?**
	O endereçamento IP é um sistema que permite identificar dispositivos em uma rede de computadores. Existem duas subclasses principais de endereços IP: endereços IPv4 e endereços IPv6. Os endereços IPv4 são compostos por 32 bits e são divididos em quatro grupos de oito bits cada. Os endereços IPv6 são compostos por 128 bits e são divididos em oito grupos de 16 bits cada. Os endereços IP são usados para identificar dispositivos em uma rede e permitir a transmissão de dados entre eles.

**8) O que são sub-redes e função de uma máscara de sub-rede?**
	Sub-redes são redes menores dentro de uma rede maior. Elas são criadas por meio do uso de uma máscara de sub-rede, que é usada para dividir uma rede maior em sub-redes menores. A função da máscara de sub-rede é identificar qual parte do endereço IP representa a rede e qual parte representa o host. Isso permite que o roteador encaminhe os dados para a sub-rede correta e também ajuda a conservar endereços IP. A máscara de sub-rede funciona mascarando as partes de um endereço IP que pertencem à rede e as partes que pertencem ao host. Dessa forma, ela permite que os dispositivos em uma sub-rede se comuniquem diretamente, sem precisar passar pelo roteador.

**9) O que são IPv4 e IPv6 e por que algum dia o IPV4 estará totalmente obsoleto?**
	O IPv4 usa endereços de 32 bits, o que permite um total de aproximadamente 4 bilhões de endereços IP únicos. No entanto, com o aumento do número de dispositivos conectados à internet, esse número se tornou insuficiente. Por outro lado, o IPv6 usa endereços de 128 bits, o que permite um número muito maior de endereços únicos, na ordem de 10¹⁸. Com essa quantidade de endereços, é possível que cada dispositivo tenha um endereço IP exclusivo. Por essa razão, é provável que o IPv4 se torne obsoleto em um futuro próximo e seja substituído pelo IPv6.

