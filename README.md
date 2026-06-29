# Raízes do Nordeste

    Projeto desenvolvido para a disciplina de Desenvolvimento Front-end - UNINTER.

    O Raízes do Nordeste é um sistema para gerenciamento de uma rede de restaurantes, permitindo o cadastro de produtos, categorias, usuários, pedidos, pagamentos, lojas e programa de fidelidade. O projeto foi desenvolvido utilizando Django REST Framework, React e React Native.


## Tecnologias

    Backend
    - Python
    - Django
    - Django REST Framework
    - SQLite

    Frontend Web
    - React
    - Vite

    Mobile
    - React Native
    - Expo

    Outros
    - Git
    - Axios

## Pré-requisitos

    - Python 3.14
    - Git
    - Visual Studio Code

    ## Instalação e Execução do Backend

## 1. Clonar o projeto
        ```bash
        git clone https://github.com/lindomarbatistao/raizes_do_nordeste.git
        cd raizes_do_nordeste
        code .
        ```
## 2. Acessar a pasta do projeto
    ```bash    
        cd raizes_do_nordeste
    ```
## 3. Abrir o projeto no VS Code
    ```bash
        code .
    ```
## 4. Acessar a pasta do backend
    ```bash
        cd back
    ```
## 5. Criar o ambiente virtual
    ```bash
        py -m venv env
    ```
## 6. Ativar o ambiente virtual
    ```bash
        env\Scripts\activate
    ```
## 7. Instalar as dependências
    ```bash
        pip install -r requirements.txt
    ```
## 8. Executar as migrações
    ```bash
        py manage.py migrate
    ```
## 9. Iniciar o servidor Django
    ```bash
        py manage.py runserver

        O sistema estará disponível em:
        http://127.0.0.1:8000/
    ```
## 10. Crie um super usuário:
    ```bash
        py manage.py createsuperuser
        No meu caso: 
            - username: lin
            - password: 123
    ```
## 11. Popular o Banco de Dados

        - Popular Usuários, execute no console:
            CTRL+C
            python manage.py shell

        - Após gerar o prompt, cole:

- Pare o servidor, caso ele esteja em execução (`CTRL + C`).

- Abra o shell do Django:

```bash
python manage.py shell
```

- Cole o código abaixo no terminal:

```python
from usuarios.models import Usuario

usuarios = [
    ("cliente01", "João", "Silva", "cliente01@email.com", "19999990001", "11311111911"),
    ("cliente02", "Jose", "Silva", "cliente02@email.com", "19999990002", "11311911111"),
    ("cliente03", "Pedro", "Silva", "cliente03@email.com", "19999990003", "11311111111"),
    ("cliente04", "Maria", "Souza", "cliente04@email.com", "19999990004", "22222222222"),
    ("cliente05", "Bruna", "Silva", "cliente05@email.com", "19999990005", "11111611111"),
    ("cliente06", "Matheus", "Souza", "cliente06@email.com", "19999990006", "22222262222"),
    ("cliente07", "Carlos", "Silva", "cliente07@email.com", "19999990007", "16111111111"),
    ("cliente08", "Giavana", "Souza", "cliente08@email.com", "19999990008", "22226222222"),
    ("cliente09", "Gabriel", "Silva", "cliente09@email.com", "19999990009", "11111111161"),
    ("cliente10", "Thomaz", "Souza", "cliente10@email.com", "19999990010", "22262222222"),
]

for username, first_name, last_name, email, telefone, cpf in usuarios:
    Usuario.objects.create_user(
        username=username,
        password="123456",
        first_name=first_name,
        last_name=last_name,
        email=email,
        telefone=telefone,
        cpf=cpf,
        tipo="CLIENTE"
    )
```

- Pressione **Enter** para executar o script.

- Todos os usuários serão criados com a senha:

```text
123456
```

- Para sair do shell do Django, execute:

```python
quit()
```

- Em seguida, instale a extensão **SQLite3 Editor** no Visual Studio Code.

- Abra o arquivo:

```text
popular_banco_sqlite3.sqlite3-query
```

- Copie todo o conteúdo do arquivo.

- Abra o banco de dados `db.sqlite3`.

- Selecione a tabela `lojas_loja` e clique em **Query Editor**.

- Cole o script SQL e execute todos os comandos pressionando **Shift + Enter**.

- Após concluir, verifique se os dados foram inseridos corretamente e inicie novamente o servidor:

```bash
python manage.py runserver
```
        - Dê Enter e criará 10 usuários com a senha "123456".
        - Dê o comando "quit()" para sair do console

        - Instale a extensão do VSCode chamada SQLite3 Editor
        - Clique no arquivo "popular_banco_sqlite3.sqlite3-query"
        - Copie todo o texto
        - Clique no banco db.sqlite3
        - Selecione a tabela "lojas_loja" e "Query Editor"
        - Cole o código e clique em todos os "Execute (Shift+Enter)
        - Confira as tabelas 
        - Inicie o servidor novamente:
            py manage.py runserver




## Instalação e Execução do Mobile

1. Acesse a pasta do mobile:

```bash
cd mobile
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto com Expo:

```bash
npx expo start
```

4. Após iniciar, escolha uma das opções:

```text
a - abrir no emulador Android
w - abrir no navegador
q - sair
```

5. Caso esteja usando celular físico, escaneie o QR Code com o aplicativo **Expo Go**.

---

## Instalação e Execução do Frontend Web

1. Volte para a pasta principal do projeto:

```bash
cd ..
```

2. Acesse a pasta do frontend:

```bash
cd front
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o frontend:

```bash
npm run dev
```

5. O sistema estará disponível em:

```text
http://localhost:5173/
```