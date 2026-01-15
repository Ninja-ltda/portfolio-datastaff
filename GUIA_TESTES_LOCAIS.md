# 🛠️ Guia de Testes Locais - Sem Consumir Créditos

## ⚠️ Problema Atual
Os erros de animação estão persistindo e estamos consumindo créditos do Netlify a cada rebuild.

## ✅ Solução: Testar Localmente Primeiro

### Passo 1: Instalar Node.js
Baixe e instale em: **https://nodejs.org/**
- Escolha a versão LTS (recomendada)
- Reinicie o terminal PowerShell após instalar

### Passo 2: Instalar Dependências
```powershell
cd "C:\Users\1\Downloads\Nova pasta\Github-Auto"
npm install
```

### Passo 3: Rodar em Desenvolvimento
```powershell
npm run dev
```

Isto abrirá o site em `http://localhost:5173` onde você poderá:
- ✅ Testar a animação dos números ("Resultados que Falam")
- ✅ Verificar se as bordas estão corretas
- ✅ Testar responsividade em todos os tamanhos
- ✅ **SEM consumir nenhum crédito**

### Passo 4: Verificar o Console
Abra o DevTools (F12) e verifique:
1. Se há erros no Console
2. Se o `statsRef` está sendo detectado corretamente
3. Se `setStatsVisible` está mudando para `true`

### Passo 5: Fazer Fix Local
Edite o código no VS Code enquanto o servidor está rodando - ele fará hot reload automático!

### Passo 6: Depois de Tudo OK
Faça push e deixe o Netlify fazer apenas 1 rebuild com confiança de que tudo funciona.

## 🔍 O que Testar

**Cenário 1: Página Normal**
- Abra `http://localhost:5173`
- Rolle até "Resultados que Falam"
- Os números devem animar de 0 até 21, 30, 230

**Cenário 2: Mobile**
- Abra DevTools (F12)
- Mude para modo mobile (iPhone/Android)
- Verifique responsividade e animações

**Cenário 3: Navegação**
- Clique em "Ver Portfolio"
- Clique em "Solicitar Orçamento"
- Verifique links do footer

## 📝 Comandos Úteis

```powershell
# Rodar em modo desenvolvimento
npm run dev

# Fazer build para produção (teste local)
npm run build

# Ver o build feito
npm run preview

# Parar o servidor
# Pressione Ctrl+C no terminal
```

## 🎯 Economia de Créditos
- **Antes**: 1 erro = 1 rebuild Netlify = créditos gastos
- **Depois**: Vários testes locais = 0 créditos, 1 deploy final = mínimo de gasto

---

**Próximo passo**: Instale Node.js e execute `npm install` para começar os testes locais!
