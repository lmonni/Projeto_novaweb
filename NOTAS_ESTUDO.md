# Pesquisa: Python, Flask, frameworks web e template engines

## 1. Flask

Flask é um framework web escrito em Python, classificado como microframework. Ele oferece uma estrutura básica para criar aplicações web, com recursos como rotas, tratamento de requisições e respostas e integração com templates.

É chamado de microframework porque mantém o núcleo simples e não obriga o desenvolvedor a utilizar uma solução específica para banco de dados, autenticação ou validação de formulários. Esses recursos podem ser adicionados conforme a necessidade, inclusive por meio de extensões.

### 1.1 Características principais

- **Leve e flexível:** fornece o essencial para iniciar uma aplicação sem impor uma arquitetura complexa.
- **Rotas:** associam endereços (URLs) a funções Python.
- **Templates:** integra-se ao Jinja para gerar páginas HTML dinâmicas.
- **Arquivos estáticos:** permite organizar CSS, JavaScript e imagens na pasta `static`.
- **Extensões:** pode receber funcionalidades adicionais, como integração com bancos de dados.
- **Servidor de desenvolvimento:** oferece um servidor para testes locais; ele não deve ser utilizado como servidor de produção.

## 2. Python

Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. Sua sintaxe simples e legível facilita o aprendizado e permite desenvolver diferentes tipos de aplicações, como automações, análise de dados, APIs e sistemas web.

No desenvolvimento web, Python pode ser utilizado no lado do servidor (back-end): recebe requisições do navegador, executa regras de negócio, acessa bancos de dados e devolve respostas, como páginas HTML ou dados em JSON.

## 3. Frameworks Python para desenvolvimento web

Frameworks web disponibilizam estruturas e ferramentas que ajudam a organizar e acelerar a criação de aplicações. Alguns exemplos do ecossistema Python são:

| Framework | Características | Usos comuns |
|---|---|---|
| **Flask** | Microframework leve e flexível; permite escolher extensões e a organização do projeto. | Sites pequenos e médios, protótipos e APIs. |
| **Django** | Framework completo, com recursos integrados como ORM, autenticação, painel administrativo e estrutura de projeto. | Sistemas web completos e aplicações que precisam de recursos integrados. |
| **FastAPI** | Framework moderno voltado à criação de APIs, com suporte a anotações de tipos e documentação interativa automática. | APIs e serviços back-end. |
| **Bottle** | Microframework compacto, distribuído em um único arquivo Python. | Projetos pequenos e aplicações simples. |

A escolha depende do objetivo, do tamanho do sistema, da experiência da equipe e dos recursos necessários. Flask favorece flexibilidade; Django oferece várias soluções integradas; FastAPI é especialmente direcionado a APIs.

## 4. Template engines

Uma template engine (mecanismo de templates) permite criar documentos com uma estrutura fixa e inserir dados dinâmicos enviados pela aplicação. Em sistemas web, é comum utilizar templates HTML para separar a apresentação da lógica Python.

Por exemplo, uma página pode manter o mesmo cabeçalho e receber um nome ou uma lista de produtos conforme os dados fornecidos pelo back-end. Isso evita montar todo o HTML diretamente dentro das funções Python e facilita a reutilização de componentes.

### 4.1 Exemplos de template engines

- **Jinja:** utilizada por padrão pelo Flask. Permite inserir variáveis, condições, laços de repetição, filtros e reutilizar estruturas com herança de templates.
- **Django Template Language (DTL):** linguagem de templates integrada ao Django, com variáveis, tags e filtros.
- **Mako:** template engine para Python que oferece expressões e estruturas de controle, podendo ser integrada a diferentes aplicações.
- **Chameleon:** template engine baseada em XML/HTML, que utiliza atributos especiais para inserir conteúdo dinâmico.

## 5. Jinja no Flask

O Flask configura o Jinja automaticamente. Os arquivos de template normalmente ficam na pasta `templates`, e a função `render_template()` é utilizada para renderizá-los.

### 5.1 Exemplo em Python

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html", nome="Visitante")