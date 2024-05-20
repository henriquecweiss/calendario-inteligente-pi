
# 📋 Calendário Inteligente

Uma aplicação de Calendário Inteligente (ToDo) simples e estilosa construída com Vue.js, Node.js, Express.js e MongoDB, utilizando Tailwind CSS para estilização.

## ✨ Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Visualizar todas as tarefas
- Interface amigável e responsiva

## 🚀 Tecnologias Utilizadas

- **Frontend:** Vue.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MongoDB

## 📦 Estrutura do Projeto

```bash
todo-list-app
├── backend
│   ├── models
│   │   └── Todo.js
│   ├── routes
│   │   └── todos.js
│   └── server.js
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── assets
│   │   │   └── styles.css
│   │   ├── components
│   │   │   ├── AddTodo.vue
│   │   │   ├── TodoItem.vue
│   │   │   └── TodoList.vue
│   │   ├── App.vue
│   │   └── main.js
│   └── tailwind.config.js
├── package.json
└── README.md
```

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- Node.js
- MongoDB

### Instalar e Configurar MongoDB

1. Baixe e instale o MongoDB a partir do [site oficial](https://www.mongodb.com/try/download/community).
2. Inicie o MongoDB. No terminal, execute:

   ```bash
   mongod
   ```

   Certifique-se de que o MongoDB está rodando na porta padrão `27017`.

### Clonar o Repositório

```bash
git clone https://github.com/henriquecweiss/calendario-inteligente-pi.git
cd todo-list-app
```

### Configurar o Backend

1. Navegue até a pasta `backend`:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    node server.js
    ```

### Configurar o Frontend

1. Navegue até a pasta `frontend`:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run serve
    ```

### Acessar a Aplicação

Abra seu navegador e acesse `http://localhost:8080`.

## 📚 Documentação da API

A API expõe os seguintes endpoints:

- `GET /api/todos` - Retorna todas as tarefas
- `POST /api/todos` - Cria uma nova tarefa
- `PUT /api/todos/:id` - Atualiza uma tarefa existente
- `DELETE /api/todos/:id` - Remove uma tarefa

## 🤝 Contribuições

Sinta-se à vontade para contribuir com o projeto. Para isso, faça um fork do repositório, crie uma branch para sua feature ou correção, e envie um pull request.

## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---

Feito com ❤️ por Henrique W., Caroline, Henrique F., Amanda e Gabriel 
