## Projeto Imersão - Fábrica de Software 2019.2
---

Mini tutorial para o Projeto da Imersão 2019.2 da área de Mobile da Fábrica de Software.

Ferramentas necessárias:

* Node.js e npm pré configurados;
* Git;


### 1 - Configurando o repositório Git


**Aprendendo a criar um repositório local:**

``git init``

**Linkando o repositório local ao repositório git remoto:**

``git remote add origin {nome_do_repositório}``

**Buscando as branches no repositório remoto:**

``git fetch --all``


**Puxando os arquivos para o repositório local:**

``git pull origin {nome_da_branch}``


---


### 2 - Configurando o ambiente


**Instalando o ionic:**

`` npm install -g ionic ``

**Para verificar se o ionic está instalado:**

``ionic -v``


**Criando o primeiro aplicativo:**

`` ionic start {nome_do_app} blank ``

---

### 3 - Subindo os arquivos no Git

**Para adicionar os arquivos**

``git add {nome_do_arquivo} `` para adicionar todos os arquivos alterados ``git add .``

**Para commitar os arquivos adicionados**

``git commit -m "{especificação_da_mensagem}"``

**Subindo os arquivos para o repositório remoto:**

``git push origin {nome_da_branch}``

---

### 4 - Adicionais

**Para configurar o usuário:**

`````
git config user.name {nome_do_usuario}
git config user.email {email_do_usuario}
`````

**Para listar as branches disponíveis**

``git branch``
