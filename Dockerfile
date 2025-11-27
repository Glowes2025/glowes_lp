# Stage 1: Build da aplicação
FROM node:18 AS build

WORKDIR /app

# Copia apenas os arquivos de dependências
COPY package.json package-lock.json ./

# Instala dependências (respeitando o lockfile)
RUN npm ci

# Copia o restante do código
COPY . .

# Executa o build de produção
RUN npm run build

# Stage 2: Imagem final (runtime)
FROM node:18-alpine

WORKDIR /app

# Copia os arquivos construídos + node_modules do estágio build
COPY --from=build /app ./

# Expõe a porta
EXPOSE 3000

# Comando que inicia a aplicação
CMD ["npm", "start"]
