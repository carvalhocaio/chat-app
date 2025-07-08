# 💬 Chat App

Uma aplicação de chat em tempo real construída com FastAPI (backend) e React + TypeScript (frontend),
utilizando WebSockets para comunicação instantânea entre os usuários.

## 🎯 Objetivo

Este projeto demonstra como criar uma aplicação de chat em tempo real utilizando tecnologias
modernas. O objetivo é fornecer uma base sólida para aplicações que necessitam de comunicação
instantânea entre múltiplos usuários.

## ✨ Funcionalidades

- **Chat em tempo real**: Mensagens são enviadas e recebidas instantaneamente
- **Interface moderna**: Interface limpa e responsiva construída com React e Tailwind CSS
- **WebSockets**: Comunicação bidirecional em tempo real
- **Múltiplos usuários**: Suporte para vários usuários conectados simultaneamente
- **Arquitetura modular**: Backend e frontend separados para melhor manutenibilidade

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI**: Framework web moderno e rápido para Python
- **WebSockets**: Para comunicação em tempo real
- **Uvicorn**: Servidor ASGI para execução da aplicação
- **CORS**: Configurado para permitir conexões do frontend

### Frontend
- **React 19**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Vite**: Ferramenta de build rápida e moderna
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos
- **Radix UI**: Componentes primitivos acessíveis

## 🚀 Como Executar Localmente

### Pré-requisitos
- Python 3.8+
- Node.js 16+
- npm ou yarn

### 1. Clonar o Repositório
```bash
git clone <url-do-repositorio>
cd chat-app
```

### 2. Configurar o Backend

```bash
# Navegar para o diretório do backend
cd backend

# Instalar dependências Python
pip install -r requirements.txt

# Executar o servidor
make run
# ou
uvicorn main:app --reload
```

O backend estará rodando em `http://localhost:8000`

### 3. Configurar o Frontend

```bash
# Navegar para o diretório do frontend (em um novo terminal)
cd frontend

# Instalar dependências
npm install

# Executar o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

### 4. Usar a Aplicação

1. Abra o navegador e acesse `http://localhost:5173`
2. Digite uma mensagem no campo de entrada
3. Pressione Enter ou clique em "Enviar"
4. Abra várias abas para simular múltiplos usuários
5. As mensagens aparecerão em tempo real em todas as abas conectadas

## 📁 Estrutura do Projeto

```
chat-app/
├── backend/
│   ├── main.py             # Aplicação FastAPI principal
│   ├── requirements.txt    # Dependências Python
│   └── Makefile            # Comandos de automação
├── frontend/
│   ├── src/
│   │   ├── app.tsx         # Componente principal do chat
│   │   ├── main.tsx        # Ponto de entrada da aplicação
│   │   └── components/     # Componentes UI reutilizáveis
│   ├── package.json        # Dependências Node.js
│   └── vite.config.ts      # Configuração do Vite
└── README.md               # Este arquivo
```

## 🔧 Funcionalidades Técnicas

### Backend (FastAPI)
- **ConnectionManager**: Gerencia conexões WebSocket ativas
- **Broadcast**: Envia mensagens para todos os usuários conectados
- **CORS**: Configurado para desenvolvimento local
- **WebSocket endpoint**: `/ws/chat` para conexões em tempo real

### Frontend (React)
- **Estado local**: Gerenciamento de mensagens e conexão WebSocket
- **Componentes UI**: Botões e inputs estilizados com Tailwind
- **Reconexão automática**: Gerenciamento do ciclo de vida da conexão
- **Interface responsiva**: Layout adaptável a diferentes tamanhos de tela

## 🎨 Personalização

### Estilos
- Edite `frontend/src/index.css` para personalizar cores e estilos globais
- Modifique os componentes em `frontend/src/components/ui/` para ajustar a aparência

### Funcionalidades
- Adicione autenticação de usuários
- Implemente salas de chat separadas
- Adicione histórico de mensagens
- Integre com banco de dados

## 📝 Comandos Úteis

### Backend
```bash
# Executar servidor
make run

# Executar com recarga automática
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido usando FastAPI e React**