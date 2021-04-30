# Fluxo do Bot

---

### <a id="inicio"></a>**1° Bloco:** Início

**Comportamento:** Bot espera pelo input (mensagem) do usuário, assim que ele recebe ele vai para o [próximo bloco](#boasvindas).

[USER] **Mensagem:** Qualquer Mensagem

---

### <a id="boasvindas"></a>**2° Bloco:** Boas Vindas

**Comportamento:** Bot envia as mensagens de boas vindas e vari para o [próximo bloco](#opcoeslinguagens).

[BOT] **Mensagem:** Olá! {{contact.name}}!

[BOT] **Mensagem:** Eu sou um bot criado para retornar repositórios da empresa Takeblip no Github! Escolha abaixo alguma linguagem de programação e eu retornarei uma lista dos 5 repositórios mais antigos que usam essa linguagem.

---

### <a id="opcoeslinguagens"></a>**3° Bloco:** Opções Linguagens

**Comportamento:** Bot envia a mensagem com o menu de opções e espera o input (mensagem) do usuário para ir para o próximo bloco. Caso o input do usuário seja alguma das linguagens esse input será assinalado para a variável **{{language}}** e bot irá para o [próximo bloco](#repositorios), caso o input seja o **Cancelar** o bot irá para o bloco [Sair - Agradecimentos](#agradecimentos).

[BOT] **Menu opções:**
Escolha uma linguagem e eu te mandarei os 5 repositórios mais antigos da Takeblip que usam a linguagem escolhida:

- C#
- JavaScript
- TypeScript
- Cancelar

[USER] **Mensagem com escolha do menu:** {{input.content}}

---

### <a id="repositorios"></a> **4° Bloco:** Repositórios

**Comportamento:** Antes de tudo o bot envia uma requisição para a API passando como Query String a variável **{{language}}** que foi declarada no bloco anterior. Após isso o bot envia uma mensagem explicando o conteúdo do Carousel que será enviado e envia o Carousel com os repositórios que usam a linguagem escolhida. Após o envio do Carousel o bot pergunta se o usuário deseja receber mais repositórios da TakeBlip, caso escolha **Sim** o bot retorna ao bloco [Opções Linguagens](#opcoeslinguagens), caso escolha a opção **Não** o bot irá para o bloco [Sair - Agradecimentos](#agradecimentos).

[BOT] **Mensagem:** Aqui estão os repositórios da TakeBlip que usam {{language}}, estão ordenados dos mais antigos para os mais novos!

[BOT] **Carrousel:**

- Lista de Cards com a seguinte estrutura:
  - Imagem: {{repositories@repositoryX.owner_avatar_url}}
  - Title: {{repositories@repositoryX.full_name}}
  - Description: {{repositories@repositoryX.description}}

[BOT] **Menu opções:** Gostaria de receber mais repositórios da Takeblip?

- Sim
- Não

[USER] **Mensagem com escolha do menu:** {{input.content}}

---

### <a id="agradecimentos"></a>**5° Bloco:** Sair - Agradecimentos

**Comportamento:** Bot envia as mensagens de agradecimento e vai para o bloco [Inicio](#inicio).

[BOT] **Mensagem:** Caso queira consultar os repositórios novamente estarei aqui! Basta enviar uma mensagem! :D

---
