# Digital Presence - Copilot Instructions

Este é um projeto React com Vite para um portfolio interativo de agência de web design.

## Personalização Rápida

Antes de hospedar, ajuste:

1. **WhatsApp** - `src/PortfolioInterativo.jsx` linha ~234:
   ```
   href="https://wa.me/351YOUR_NUMBER"
   ```

2. **Email** - Linha ~244:
   ```
   href="mailto:contato@seuemail.com"
   ```

3. **Estatísticas** - Linha ~122-128:
   ```javascript
   sites: 47,    // Total de sites
   clientes: 38, // Total de clientes
   conversao: 312 // Taxa de conversão %
   ```

4. **Redes Sociais** - Footer (linha ~376)

## Stack

- React 18.2
- Tailwind CSS
- Lucide Icons
- Vite

## Comandos

```bash
npm install
npm run dev      # Desenvolvimento
npm run build    # Produção
npm run preview  # Preview
```

## Deploy

- **Netlify**: Build: `npm run build`, Pasta: `dist`
- **Vercel**: Detecção automática
- **GitHub Pages**: Adicionar `base` em vite.config.js

## Estrutura

```
src/
├── PortfolioInterativo.jsx (componente principal)
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

Pronto para usar em produção com simples customizações!
