# 🚀 Deploy no Netlify - Guia Completo

Este guia explica como fazer o deploy da aplicação no Netlify com as funções de IA funcionando.

## ⚠️ IMPORTANTE: Configure a Chave do Gemini no Netlify

Para que a funcionalidade **"Reflexões que Curam"** funcione no Netlify, você **DEVE** configurar a variável de ambiente `GEMINI_API_KEY` no painel do Netlify:

1. Acesse **Site settings** > **Environment variables** no dashboard do Netlify
2. Adicione a variável:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Sua chave da API do Google Gemini (a mesma que você configurou no Replit)
   - **Scopes**: Marque todas (Build, Functions, Post processing)
3. Faça um novo deploy após configurar a variável

Sem essa configuração, a página "Reflexões que Curam" não funcionará em produção.

## ✅ Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Chave da API do Google Gemini (GEMINI_API_KEY)
- Repositório Git (GitHub, GitLab ou Bitbucket)

## 📦 Estrutura Criada

A aplicação já está configurada com:

- ✅ **netlify.toml** - Configuração do build e redirecionamentos
- ✅ **netlify/functions/** - Funções serverless para a API do Gemini:
  - `soul-message.ts` - Gera mensagens personalizadas
  - `daily-reflection.ts` - Gera reflexões diárias
  - `test-gemini.ts` - Testa a API do Gemini

## 🔧 Passos para Deploy

### 1. Conecte seu Repositório ao Netlify

1. Faça login no [Netlify](https://app.netlify.com/)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Conecte com seu provedor Git (GitHub, GitLab, Bitbucket)
4. Selecione este repositório

### 2. Configure o Build

O Netlify deve detectar automaticamente as configurações do `netlify.toml`, mas verifique:

- **Build command**: `npm install && vite build`
- **Publish directory**: `dist/public`
- **Functions directory**: `netlify/functions`

### 3. Configure as Variáveis de Ambiente

**IMPORTANTE**: Adicione a chave da API do Gemini

1. No dashboard do Netlify, vá em **Site settings** > **Environment variables**
2. Clique em **Add a variable**
3. Adicione:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Sua chave da API do Google Gemini
   - **Scopes**: Marque todas (Build, Functions, Post processing)

### 4. Deploy!

1. Clique em **Deploy site**
2. Aguarde o build completar (pode levar alguns minutos)
3. Seu site estará disponível em `https://seu-site.netlify.app`

## 🧪 Testando as Funções

Após o deploy, teste se a IA está funcionando:

1. Acesse: `https://seu-site.netlify.app/test-gemini`
2. Clique em **"Testar API do Gemini"**
3. Se aparecer uma mensagem gerada, está funcionando! ✅

### Endpoints Disponíveis

- `/api/soul-message` - Mensagem personalizada da alma
- `/api/daily-reflection` - Reflexão diária
- `/api/test-gemini` - Teste da API

## 🔍 Troubleshooting

### Função retorna erro 500

1. Verifique os logs da função:
   - Dashboard do Netlify > **Functions** > Selecione a função > **Function log**

2. Verifique se a `GEMINI_API_KEY` está configurada:
   - Site settings > Environment variables

3. Certifique-se de que a chave tem permissões adequadas no Google AI Studio

### Função não é encontrada (404)

1. Verifique se o build incluiu as funções:
   - Dashboard > Deploy > Deploy log
   - Procure por "Functions packaged"

2. Teste o endpoint direto:
   - `https://seu-site.netlify.app/.netlify/functions/soul-message`

### Build falha

1. Verifique o log de build no dashboard
2. Certifique-se de que todas as dependências estão no `package.json`
3. Node.js está configurado para versão 20 no `netlify.toml`

## 💡 Dicas

- **Custom Domain**: Você pode adicionar um domínio personalizado em Site settings > Domain management
- **Deploy Previews**: Cada pull request gera um preview automático
- **Rollback**: Você pode voltar para deploys anteriores em Deploys > Production deploys

## 📱 Deploy Manual (Alternativa)

Se preferir deploy manual:

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Faça o build
npm run build

# Deploy
netlify deploy --prod
```

## 🆘 Suporte

Se tiver problemas:

1. Verifique a [documentação do Netlify](https://docs.netlify.com/)
2. Consulte os [fóruns do Netlify](https://answers.netlify.com/)
3. Revise os logs de build e funções no dashboard

## ✨ Próximos Passos

Após o deploy bem-sucedido:

- [ ] Teste todas as funcionalidades do site
- [ ] Configure um domínio personalizado (opcional)
- [ ] Ative HTTPS (automático no Netlify)
- [ ] Configure notificações de deploy
- [ ] Adicione analytics (opcional)

---

**Nota**: Se encontrar dificuldades com as funções Netlify, considere usar o **Replit Deploy** que já está configurado e funciona perfeitamente com toda a stack fullstack!
