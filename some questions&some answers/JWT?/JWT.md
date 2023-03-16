# O que e JWT ? 

JWT significa "JSON Web Token" e é um padrão aberto (RFC 7519) para representar informações de forma segura entre duas partes como um objeto JSON. É comumente usado como um meio de autenticação e autorização em aplicativos da web e móveis.

Um JWT consiste em três partes separadas por pontos (.), que são:

1. Cabeçalho (Header): Contém informações sobre o tipo do token e o algoritmo de criptografia usado para assinar o token.

2. Carga Útil (Payload): É onde as informações sobre o usuário e as permissões são armazenadas. As informações da carga útil incluem dados como nome do usuário, endereço de e-mail, ID do usuário, etc.

3. Assinatura (Signature): É uma combinação do cabeçalho e da carga útil que é criptografada usando uma chave secreta. A assinatura é usada para verificar se o token foi alterado ou adulterado.

Quando um usuário faz login em um aplicativo da web ou móvel, o servidor gera um JWT e o envia de volta ao cliente. O cliente, por sua vez, inclui o JWT em cada solicitação para recursos protegidos no servidor. O servidor pode, então, verificar a assinatura do JWT para garantir que ele não tenha sido modificado e que o usuário tenha as permissões necessárias para acessar o recurso solicitado. Se o JWT for válido, o servidor responderá à solicitação do cliente. Se não for válido, o servidor responderá com um erro de autenticação.

Os JWTs são populares porque são compactos, autocontidos e podem ser facilmente transmitidos entre diferentes sistemas. Além disso, a carga útil de um JWT pode ser criptografada, o que garante que as informações transmitidas sejam seguras e confidenciais.

### Entao basicamente, quando o usuario fazia duplicidade de comportamento, como colocar a senha para acessar novamente outra area do site, este e o problema que ele resolve ?

Isso mesmo! Uma vez que um usuário é autenticado com sucesso em um aplicativo, um JWT é gerado e enviado para o cliente. Esse JWT contém informações sobre a autenticação do usuário, como seu ID e quaisquer permissões associadas a sua conta.

O cliente então inclui esse JWT em cada solicitação subseqüente para o aplicativo, geralmente por meio de um cabeçalho HTTP ou como um parâmetro em uma URL. O servidor, em seguida, verifica a validade do token para cada solicitação que recebe, e se o token for válido, concede ao usuário acesso ao recurso solicitado sem precisar pedir credenciais novamente.

No entanto, é importante destacar que a duração do JWT é definida pelo aplicativo e pode expirar depois de um período de tempo definido. Nesse caso, o usuário precisará se autenticar novamente para gerar um novo JWT e continuar a usar o aplicativo.
