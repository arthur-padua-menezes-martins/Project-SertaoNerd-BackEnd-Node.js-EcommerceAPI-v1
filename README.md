# **[ E-COMMERCE API ]**
> # TECNOLOGIAS

**Express**</br>
*  **Bcrypt**</br>
*  **Cors**</br>
*  **Crypto Js**</br>
*  **EJS**</br>
*  **Express Session**</br>
*  **jsonwebtoken**</br>
*  **Moment**</br>
*  **Morgan**</br>  
*  **Node Correios**</br>
*  **Node PagSeguro**</br>
*  **Nodemailer**</br>

**Mongoose**</br>
*  **Mongoose Paginate**</br>
  
</br></br></br>

> # FUNCIONALIDADES
</br></br>
**GERAIS**
</br></br>
* 🏆 *tratamento de erros*</br>
* ✔️ *direcionamento para rotas exclusivas ao tratamento de erros*</br>
* ✔️ *acoplamento de código de status baseando-se no tipo do erro*</br>
* ✔️ *envio de mensagem personalizada baseando-se no tipo de erro*</br>
* ✔️ *400 bad request, se campos obrigarórios forem omitidos ou inválidos*</br>
* ✔️ *401 unauthorized, se as informações não forem autênticas*</br>
* ✔️ *404 not found, se o conteúdo buscado não foi encontado*</br>
* ✔️ *422 unprocessable, se a requisição não pode ser processada*</br>
</br></br></br></br>


**MIDDLEWARE**
</br></br>
* 🏆 *autenticação*</br>
* ✔️ *busca por sessões existentes e compatíveis com os dados recebidos*</br>
* ✔️ *liberação de determinadas rotas basenado-se no nível de acesso da conta*</br>
</br></br></br></br>


**USUÁRIOS**
</br></br>
* 🏆 *registro de usuário*</br>
* ✔️ *validação de campos obrigatórios*</br>
* ✔️ *verificação preliminar da existência das informações*</br>
* ✔️ *encriptação de senha*</br>
* ✔️ *inserção das informações no banco de dados*
</br></br>
* 🏆 *login de usuário*</br>
* ✔️ *validação de campos obrigatórios*</br>
* ✔️ *verificação preliminar da existência das informações e disponibilidade de acesso à conta*</br>
* ✔️ *decodificação e verificação da compatibilidade entre senha cadastrada e senha enviada*</br>
* ✔️ *criação de sessão*</br>
</br></br>
* 🏆 *pedido de redefinição de senha*</br>
* ✔️ *validação de campos obrigatórios*</br>
* ✔️ *verificação preliminar da existência das informações*</br>
* ✔️ *definição do período para redefinição de senha*</br>
* ✔️ *envio de e-mail com a chave necessária para a redefinição da senha*</br>
</br></br>
* 🏆 *redefinição de senha*</br>
* ✔️ *validação de campos obrigatórios*</br>
* ✔️ *verificação preliminar da existência das informações e validade do período de redefinição de senha*</br>
* ✔️ *remoção do período de redefinição de senha*</br>
* ✔️ *encriptação de senha*</br>
* ✔️ *inserção das informações no banco de dados*</br>
</br></br></br></br>


**CONTA**
</br></br>
* 🏆 *atualização*</br>
* ✔️ *atualização das informações do banco de dados*</br>
* ✔️ *atualização das informações da sessão*</br>
</br></br>
* 🏆 *desativação*</br>
* ✔️ *atualização do status de desativação da conta*</br>
* ✔️ *desativação da sessão*</br>
</br></br></br></br>


**BUSCA**
</br></br>
* 🏆 *busca por termos*</br>
* ✔️ *definição do tipo de ordenação (sort)*</br>
* ✔️ *definição do número de registros retornados (offset, limit, skip)*
* ✔️ *busca por registros relacionados (populate)*
* ✔️ *busca por determinado número de registros (paginação)*
* ✔️ *busca por diversos segmentos / termos*
</br></br>
* 🏆 *busca geral*</br>
* ✔️ *definição do tipo de ordenação (sort)*</br>
* ✔️ *definição do número de registros retornados (offset, limit, skip)*
* ✔️ *busca por determinadas informações (select)*
* ✔️ *busca por registros relacionados (populate)*
* ✔️ *busca por determinado número de registros (paginação)*
* ✔️ *busca por diversos registros*
* ✔️ *busca por determinado registro*
* ✔️ *filtro por tipo, tags, categoria*
</br></br></br></br>


**ENVIO DE E-MAIL**
</br></br>
* 🏆 *configurações*</br>
* ✔️ *definição do host / serviço de envio, porta, tipo de segurança, dados da conta*</br>
* 🏆 *envio*</br>
* ✔️ *definição de parâmetros obrigatórios*</br>
* ✔️ *leitura de arquivos (corpo do e-mail)*</br>
* ✔️ *adição dos dados referentes ao determinado e-mail*</br>
* ✔️ *disparo do e-mail*</br>
</br></br></br></br>


**AVALIAÇÕES**
</br></br>
* 🏆 *listagem*</br>
* ✔️ *listagem de avaliações do usuário*</br>
* ❌ *listagem de avaliações do produto*</br>
</br></br>
* 🏆 *criação*</br>
* ✔️ *verificação de campos*</br>
* ✔️ *definição, relacionamento e inserção das informações no banco de dados*</br>
</br></br>
* 🏆 *atualização*</br>
* ✔️ *verificação de campos*</br>
* ✔️ *atualização das informações do banco de dados*</br>
</br></br></br></br>


**ENTREGAS**
</br></br>
* 🏆 *integrações*</br>
* ✔️ *PRODUÇÃO: Correios*
* ✔️ *DESENVOLVIMENTO: Correios*
</br></br>
* 🏆 *cálculo do frete*</br>
* ✔️ *utilização do CEP de destino e dimensões dos produtos*</br>
</br></br></br></br>


**PAGAMENTOS**
</br></br>
* 🏆 *integrações*</br>
* ❌ *PRODUÇÃO: PagSeguro*
* ✔️ *DESENVOLVIMENTO: PagSeguro SANDBOX*
</br></br>
* 🏆 *pagamento*</br>
* ❌ *PRODUÇÃO: online*
* ✔️ *DESENVOLVIMENTO: online*
</br></br>
* 🏆 *método de pagamento*</br>
* ❌ *PRODUÇÃO: boleto ou cartão*
* ✔️ *DESENVOLVIMENTO: boleto ou cartão*
</br></br></br></br>


**PEDIDOS**
</br></br>
* 🏆 *novo pedido*</br>
* ✔️ *recebimento de informações iniciais sobre o carrinho, entrega e pagamento*</br>
* ✔️ *verificação da disponibilidade da quantidade de produtos selecionados*</br>
* ✔️ *definição e relacionamento de um novo pedido, entrega e pagamento*</br>
* ✔️ *atualização da quantidade e disponibilidade dos produtos*</br>
</br></br>
* 🏆 *visualização dos pedidos*</br>
* ✔️ *seleção de informações gerais dos pedidos*</br>
</br></br>
* 🏆 *visualização do pedido*</br>
* ✔️ *seleção de informações da conta, carrinho, entrega e pagamento*</br>
</br></br>
* 🏆 *visualização do carrinho*</br>
* ✔️ *seleção dos dados do carrinho*</br>
</br></br>
* 🏆 *cancelamento de pedido*</br>
* ✔️ *atualização do status de cancelamento do pedido*</br>
* ✔️ *atualização da quantidade e disponibilidade dos produtos*</br>
