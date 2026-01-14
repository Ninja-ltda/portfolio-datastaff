# Digital Presence - Portfolio Interativo

Um portfolio profissional responsivo e moderno para agências de web design. Criado com React, Tailwind CSS e Vite.

## Características

- 🎨 Design moderno e atraente
- ⚡ Animações suaves com canvas
- 📱 Responsivo em todos os dispositivos
- 🎯 Otimizado para conversão
- 🚀 Carregamento ultrarrápido
- 📊 Animação de estatísticas
- 🎬 Hero section dinâmico

## Personalização Rápida

Antes de usar em produção, ajuste os seguintes dados:

### 1. WhatsApp (Linha ~234)
```jsx
href="https://wa.me/351YOUR_NUMBER"
```
Troque `YOUR_NUMBER` pelo seu número completo (ex: 351912345678)

### 2. Email (Linha ~244)
```jsx
href="mailto:contato@seuemail.com"
```
Troque pelo seu email real

### 3. Estatísticas Animadas (Linha ~122-128)
No componente `PortfolioInterativo.jsx`, ajuste:
```javascript
const [stats, setStats] = useState({
  sites: 0,        // Número de sites (atualmente 47)
  clientes: 0,     // Número de clientes (atualmente 38)
  conversao: 0     // Taxa de conversão (atualmente 312%)
});
```

### 4. Links de Redes Sociais (Footer)
Substitua os links no footer (linha ~376):
```jsx
<a href="LINK_FACEBOOK" className="hover:text-blue-400 transition">Facebook</a>
<a href="LINK_INSTAGRAM" className="hover:text-blue-400 transition">Instagram</a>
```

## Instalação

```bash
# Instalar dependências
npm install

# Executar desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Deployment

### Netlify (Recomendado)
1. Conecte seu repositório GitHub em [netlify.com](https://netlify.com)
2. Defina o comando de build: `npm run build`
3. Defina a pasta de publicação: `dist`
4. Deploy automático a cada push

### Vercel
1. Importe o projeto em [vercel.com](https://vercel.com)
2. Configuração automática detectará Vite
3. Deploy com um clique

### GitHub Pages
```bash
# Adicione ao vite.config.js
export default {
  base: '/seu-repositorio/',
  // ... resto da config
}
```

## Estrutura do Projeto

```
src/
├── main.jsx           # Entrada da aplicação
├── App.jsx            # Componente principal
├── PortfolioInterativo.jsx  # Componente portfolio
├── index.css          # Estilos globais
└── App.css            # Estilos da app

index.html            # HTML principal
package.json          # Dependências
vite.config.js        # Config Vite
tailwind.config.js    # Config Tailwind
postcss.config.js     # Config PostCSS
```

## Dependências Principais

- **React 18.2**: Framework UI
- **Tailwind CSS**: Styling utilitário
- **Lucide React**: Ícones SVG
- **Vite**: Build tool ultrarrápido

## Dicas de Otimização

1. **Imagens**: Comprima as imagens do portfolio em [tinypng.com](https://tinypng.com)
2. **SEO**: Ajuste o `<title>` e `<meta>` no `index.html`
3. **Analytics**: Adicione Google Analytics no `<head>` do HTML
4. **Performance**: Use o build de produção para máxima velocidade

## Próximos Passos

1. ✅ Customizar dados (WhatsApp, email, estatísticas)
2. ✅ Adicionar links de redes sociais reais
3. ✅ Ajustar cores da marca se necessário
4. ✅ Hospedar em Netlify/Vercel
5. ✅ Configurar domínio personalizado
6. ✅ Adicionar Google Analytics

## Suporte

Para dúvidas ou melhorias, abra uma issue ou contacte-nos!

---

© 2026 Digital Presence. Todos os direitos reservados.
