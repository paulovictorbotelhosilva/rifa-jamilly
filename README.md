# 🎟️ Rifa Jamilly

## Sobre o Projeto
O projeto **Rifa Jamilly** é uma landing page estática para divulgação de uma rifa, com interface moderna, responsiva e pronta para deploy em GitHub Pages. O usuário navega pelos números disponíveis, acessa o detalhe do número e realiza a reserva via WhatsApp, além de copiar a chave PIX facilmente.

## 🚀 Acesso ao Site
Após o deploy no GitHub Pages, o site ficará disponível em:

```
https://paulovictorbotelhosilva.github.io/rifa-jamilly/
```

## 📁 Estrutura de Arquivos
```
rifa-jamilly/
├── index.html
├── detalhe.html
├── css/
│   └── style.css
├── js/
│   ├── index.js
│   └── detalhe.js
├── data/
│   └── rifa.json
└── README.md
```

## 🛠️ Como Funciona
### Fluxo do usuário
1. O visitante acessa a página inicial com os 100 números.
2. Números disponíveis ficam em destaque e podem ser clicados.
3. O clique abre a página de detalhe com informações completas do número.
4. Se disponível, o usuário pode reservar via WhatsApp.

### Como os dados são carregados
- Os dados são mantidos no arquivo `data/rifa.json`.
- O carregamento ocorre via `fetch()` em `index.js` e `detalhe.js`.

### Como reservar um número
1. Acesse um número disponível na página de detalhe.
2. Clique em **“💬 Reservar via WhatsApp”**.
3. A mensagem é preenchida automaticamente com o número escolhido.
4. Envie o comprovante do PIX após a reserva.

## ✏️ Como Atualizar os Números Reservados
1. Abra o arquivo `data/rifa.json`.
2. Localize o número desejado (ex: `"05"`).
3. Atualize os campos:

```json
"05": { "reservado": true, "nome": "Nome da Pessoa" }
```

4. Para liberar o número, use:

```json
"05": { "reservado": false, "nome": "" }
```

5. Salve e publique as alterações na branch `main`.

## 🎨 Personalização
Você pode personalizar facilmente:
- **Cores:** `css/style.css` (variáveis CSS em `:root`).
- **Fontes:** altere o link do Google Fonts nos arquivos HTML.
- **Valor por número:** `detalhe.html`.
- **Chave PIX:** `detalhe.html` e `detalhe.js`.
- **WhatsApp:** `detalhe.js` (link e mensagem).

## 📱 Responsividade
O layout se adapta a mobile, tablet e desktop usando CSS Grid e Flexbox:
- Mobile: 4 colunas
- Tablet: 6 colunas
- Desktop: 10 colunas

Sem scroll horizontal, com botões touch-friendly e texto legível.

## 🌐 Deploy no GitHub Pages
1. Confirme que todos os arquivos estão na branch **main**.
2. Acesse **Settings → Pages**.
3. Em **Source**, selecione **Deploy from branch**.
4. Escolha **Branch: main** e **Folder: / (root)**.
5. Salve e aguarde o GitHub gerar o link público.

Pronto! O site estará disponível em:
```
https://paulovictorbotelhosilva.github.io/rifa-jamilly/
```
