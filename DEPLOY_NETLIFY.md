# Como fazer Deploy no Netlify

Este guia explica como fazer o deploy da plataforma **Bem-Estar Espiritual** no Netlify.

## 📋 Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Repositório Git (GitHub, GitLab ou Bitbucket)

## 🚀 Passos para Deploy

### Opção 1: Deploy via Interface do Netlify (Recomendado)

1. **Faça login no Netlify**
   - Acesse [app.netlify.com](https://app.netlify.com)

2. **Crie um novo site**
   - Clique em "Add new site" → "Import an existing project"
   - Conecte seu repositório Git

3. **Configure o Build**
   - **Build command**: `npm install && vite build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o build completar

### Opção 2: Deploy via Netlify CLI

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Inicialize o projeto
netlify init

# Faça o deploy
netlify deploy --prod
```

## ⚙️ Configurações Importantes

### Arquivo netlify.toml
O projeto já inclui um arquivo `netlify.toml` na raiz com as configurações necessárias:

```toml
[build]
  command = "npm install && vite build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Arquivo _redirects
O arquivo `client/public/_redirects` garante que o React Router funcione corretamente:

```
/*    /index.html   200
```

## 🔍 Verificação

Após o deploy:
1. Acesse a URL fornecida pelo Netlify
2. Teste a navegação entre as páginas
3. Verifique se todos os recursos (imagens, vídeos) estão carregando

## 📝 Notas Importantes

- **Backend**: Este projeto tem um backend Express, mas o Netlify faz deploy apenas do frontend estático
- **Dados**: Como não há backend, todas as funcionalidades que dependem de persistência de dados usarão armazenamento local do navegador
- **Vídeos do YouTube**: Os vídeos são incorporados via iframe e funcionarão normalmente

## 🛠️ Troubleshooting

### Problema: Build falha
- Verifique se o Node version está definido como 20
- Confirme que todas as dependências estão no `package.json`

### Problema: Páginas retornam 404
- Verifique se o arquivo `_redirects` existe em `client/public/`
- Confirme que o `netlify.toml` tem a configuração de redirects

### Problema: Imagens não aparecem
- Verifique se as imagens estão em `client/public/` ou importadas via `@assets`
- Confirme que os caminhos das imagens estão corretos

## 🔗 Links Úteis

- [Documentação Netlify](https://docs.netlify.com/)
- [Netlify com Vite](https://docs.netlify.com/frameworks/vite/)
- [Configuração de Redirects](https://docs.netlify.com/routing/redirects/)
