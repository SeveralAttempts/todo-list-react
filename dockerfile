# Используем официальный образ Node.js 22
FROM node:22-alpine

# Устанавливаем зависимости ОС (если нужны, например, для native модулей)
RUN apk add --no-cache git

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (для кэширования слоя)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --include=dev

# Копируем весь проект
COPY . .

# Открываем порт сервера (Vite по умолчанию — 5173)
EXPOSE 80

# Запускаем dev-сервер, слушающий все интерфейсы
CMD ["npm", "run", "dev"]