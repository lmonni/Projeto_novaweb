# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

As **labels** identificam permanentemente a função de cada campo e permanecem visíveis mesmo depois que o usuário começa a digitar.

O **placeholder** serve apenas como exemplo ou orientação sobre o que deve ser preenchido. Ele desaparece quando o usuário começa a digitar.

Por isso, o placeholder não deve substituir a label, pois isso pode dificultar a identificação do campo, principalmente para pessoas com dificuldades cognitivas ou que utilizam leitores de tela.

### Hierarquia Visual

O **Primary Button** é o botão de ação principal da página. Na tela de login, o botão **"Entrar"** deve possuir maior destaque visual, utilizando uma cor mais forte e maior contraste.

As ações secundárias, como **"Criar Conta"** ou **"Esqueci minha senha"**, devem possuir menos destaque para não competir visualmente com a ação principal.

---

## 2. Estados de Validação dos Campos de Entrada

### Default (Padrão)

O campo apresenta uma borda neutra e uma label claramente legível. O usuário consegue identificar facilmente onde deve inserir as informações.

### Focus (Foco)

Quando o usuário seleciona o campo, ele recebe um destaque visual, como uma alteração na cor da borda ou um contorno de foco.

### Error (Erro)

Quando existe algum problema no preenchimento, o campo apresenta uma borda em tom vermelho e uma mensagem explicativa abaixo do campo, informando o que precisa ser corrigido.

### Success (Sucesso)

Quando o preenchimento está correto, o campo apresenta um indicador visual de sucesso, como uma borda ou ícone que indique que a informação foi aceita.

### Disabled (Desabilitado)

O campo apresenta contraste reduzido e aparência diferente dos campos disponíveis, indicando que ele não pode ser utilizado naquele momento.

---

## 3. Padrões de Acessibilidade

### Contraste

Os textos devem apresentar contraste suficiente em relação ao fundo para facilitar a leitura. Como referência, a WCAG recomenda contraste mínimo de 4,5:1 para textos comuns e 3:1 para textos grandes.

### Leitores de Tela

Os campos devem possuir labels claras e associadas aos respectivos inputs. Mensagens de erro e outros feedbacks importantes também devem ser apresentados de forma que possam ser identificados por tecnologias assistivas.

### Navegação pelo Teclado

Todos os campos, botões e links devem poder ser acessados utilizando a tecla `Tab`, seguindo uma ordem lógica de navegação.

---

## 4. Especificações da Tela de Login

A tela de login será composta pelos seguintes elementos:

- Título ou logotipo da aplicação;
- Campo de usuário ou e-mail;
- Campo de senha;
- Opção visual para exibir ou ocultar a senha;
- Checkbox "Lembrar de mim";
- Link "Esqueci minha senha";
- Botão principal "Entrar";
- Divisor visual;
- Link ou botão para criação de conta.

O botão "Entrar" será tratado como a ação principal da tela, enquanto as demais ações terão menor destaque visual.

---

## 5. Estados dos Componentes

### Input

O componente de input possuirá as seguintes variantes:

- Default;
- Focus;
- Error;
- Success;
- Disabled.

Cada estado apresentará uma diferença visual para facilitar a identificação da situação atual do campo.

### Botão

O componente de botão possuirá:

**Tipos:**
- Primary;
- Secondary/Outline.

**Estados:**
- Default;
- Hover;
- Disabled.

---

## 6. Prototipagem

O protótipo deverá apresentar a interação entre os diferentes estados dos componentes.

O estado Hover será utilizado para demonstrar a alteração visual dos botões quando o cursor estiver sobre eles.

Também será criada uma segunda tela representando um erro de autenticação, contendo uma mensagem como:

> E-mail ou senha inválidos.

Essa tela demonstrará como o sistema fornece feedback ao usuário quando os dados informados não são aceitos.