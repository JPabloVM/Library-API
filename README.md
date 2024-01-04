# **Biblioteca Digital API**

Bem-vindo ao repositório da API da Biblioteca Digital! Esta API foi desenvolvida para gerenciar informações sobre livros e autores, oferecendo uma solução eficiente para bibliotecas digitais.

## **Instalação**

1. Clone este repositório:
    
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
    
2. Instale as dependências:
    
    ```bash
    npm install
    ```
    
3. Configure as variáveis de ambiente (se necessário).

## **Rotas**

### **Controlador de Autores**

- **Listar Todos os Autores:**
    
    ```
    GET /author
    ```
    
- **Pesquisar Autores por Filtro:**
    
    ```
    GET /authors/query
    ```
    
- **Buscar Autor por ID:**
    
    ```
    GET /author/:id
    ```
    
- **Criar Novo Autor:**
    
    ```
    POST /author
    ```
    
- **Editar Autor Existente:**
    
    ```
    PUT /author/:id
    ```
    
- **Excluir Autor:**
    
    ```
    DELETE /author/:id
    ```
    

### **Controlador de Livros**

- **Listar Todos os Livros:**
    
    ```
    GET /books
    ```
    
- **Pesquisar Livros por Filtro:**
    
    ```
    GET /books/query
    ```
    
- **Buscar Livro por ID:**
    
    ```
    GET /book/:id
    ```
    
- **Registrar Novo Livro:**
    
    ```
    POST /book
    ```
    
- **Editar Livro Existente:**
    
    ```
    PUT /book/:id
    ```
    
- **Excluir Livro:**
    
    ```
    DELETE /book/:id
    ```
    

## **Uso**

1. Inicie o servidor:
    
    ```bash
    npm start
    ```
    
2. Acesse a API em http://localhost:3000.
3. **Teste a API usando o Postman:**
- Baixe e instale o Postman.
- Abra o Postman e crie a coleção de requisições da API.
- Teste as rotas da API para garantir seu funcionamento correto.

## **Contribuição**

Contribuições são bem-vindas! Se você encontrar problemas, bugs ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## **Autores**

Este projeto foi desenvolvido com amor e dedicação por João Pablo Vilanir de Melo.

Agradecimentos especiais aos instrutores Juliana Amoasei e Antônio Evaldo da Alura por compartilharem conhecimentos valiosos.
