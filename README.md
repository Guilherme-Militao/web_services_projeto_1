
# 📚 API de Gerenciamento de Disciplinas

Esta é uma API RESTful desenvolvida com **Node.js** e **Express.js** para gerenciar a lista de disciplinas de um curso. Os dados são armazenados em memória por meio de um repositório customizado.

---

## 🚀 Funcionalidades

- Listar todas as disciplinas
- Filtrar disciplinas por nome ou carga horária via query string
- Consultar uma disciplina específica por ID
- Cadastrar uma nova disciplina
- Atualizar uma disciplina existente
- Remover uma disciplina

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 🧪 Rotas da API

### 🔍 Listar todas as disciplinas

```http
GET /disciplinas
```

**Query params opcionais:**
- `nome`: filtra disciplinas cujo nome contenha o valor informado
- `cargaHoraria`: filtra disciplinas pela carga horária

---

### 📄 Consultar disciplina por ID

```http
GET /disciplinas/:id
```

---

### ➕ Cadastrar nova disciplina

```http
POST /disciplinas
```

**Corpo da requisição (JSON):**
```json
{
  "nome": "Matemática",
  "cargaHoraria": 60,
  "obrigatoria": true
}
```

---

### ✏️ Atualizar disciplina

```http
PUT /disciplinas/:id
```

**Corpo da requisição (JSON):**
```json
{
  "nome": "Matemática II",
  "cargaHoraria": 80,
  "obrigatoria": false
}
```

> Todos os campos são opcionais, mas pelo menos um deve ser informado para atualizar.

---

### ❌ Remover disciplina

```http
DELETE /disciplinas/:id
```

---

## 📂 Estrutura de Dados da Disciplina

Cada disciplina possui os seguintes campos:

- `id`: UUID gerado automaticamente
- `nome`: texto
- `cargaHoraria`: número inteiro
- `obrigatoria`: booleano (`true` ou `false`)

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript (ESModules)
- crypto (para geração de UUID)

---

## 📃 Licença

Este projeto está licenciado sob a licença MIT.

---

## 👨‍💻 Autor

**Guilherme Militão**

---
