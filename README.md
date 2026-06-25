# Raízes do Nordeste

Projeto desenvolvido para a disciplina de Desenvolvimento Front-end - UNINTER.

## Pré-requisitos

- Python 3.14
- Git
- Visual Studio Code

## Instalação e Execução do Backend

1. Clonar o repositório

    ```bash
    git clone https://github.com/lindomarbatistao/raizes_do_nordeste.git

2. Acessar a pasta do projeto
    cd raizes_do_nordeste

3. Abrir o projeto no VS Code
    code .

4. Acessar a pasta do backend
    cd back

5. Criar o ambiente virtual
    py -m venv env

6. Ativar o ambiente virtual
    env\Scripts\activate

7. Instalar as dependências
    pip install -r requirements.txt

8. Executar as migrações
    py manage.py migrate

9. Iniciar o servidor Django
    py manage.py runserver

    O sistema estará disponível em:
    http://127.0.0.1:8000/

10. Crie um super usuário:
    py manage.py createsuperuser
    No meu caso: 
        - username: lin
        - password: 123

11. Popular o Banco de Dados

    - Popular Usuários, execute no console:
        CTRL+C
        python manage.py shell

    - Após gerar o prompt, cole:
        from usuarios.models import Usuario

        usuarios = [
            ("cliente01", "João", "Silva", "cliente01@email.com", "19999990001", "11311111911"),
            ("cliente02", "Jose", "Silva", "cliente01@email.com", "19999990001", "11311911111"),
            ("cliente03", "Pedro", "Silva", "cliente01@email.com", "19999990001", "11311111111"),
            ("cliente04", "Maria", "Souza", "cliente02@email.com", "19999990002", "22222222222"),
            ("cliente05", "Bruna", "Silva", "cliente01@email.com", "19999990001", "11111611111"),
            ("cliente06", "Matheus", "Souza", "cliente02@email.com", "19999990002", "22222262222"),
            ("cliente07", "Carlos", "Silva", "cliente01@email.com", "19999990001", "16111111111"),
            ("cliente08", "Giavana", "Souza", "cliente02@email.com", "19999990002", "22226222222"),
            ("cliente09", "Gabriel", "Silva", "cliente01@email.com", "19999990001", "11111111161"),
            ("cliente10", "Thomaz", "Souza", "cliente02@email.com", "19999990002", "22262222222"),

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

