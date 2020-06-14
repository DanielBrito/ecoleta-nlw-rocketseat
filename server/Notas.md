# Notas

**Rota:** Endereço completo da requisição.

**Recurso:** Qual entidade estamos acessando do sistema.

**GET:** Buscar uma ou mais informações no back-end.

**POST:** Criar uma nova informação no back-end.

**PUT:** Atualizar uma informação no back-end.

**DELETE:** Remover uma informação no back-end.

**Request Param:** Parâmetros que vêm na própria rota que identificam um recurso.

**Query Param:** Parâmetros que vêm na própria rota, geralmente, opcionais para filtros, paginação etc.

**Request Body:** Parâmetros para criação/atualização de informações.

**Knex vs SQL** \
SELECT \* FROM users WHERE name = 'Daniel' \
knex('users').where('name', 'Diego').select('\*')

**Migrations:** Histórico do banco de dados
