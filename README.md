# Тестовое задание VK

## Переменные окружения

Для запуска нужен файл .env

`VITE_KINOPOISK_TOKEN` - токен КиноПоиска

`VITE_SERVER_URL` - url адрес сервера (значение уже установлено)

```bash
git clone https://github.com/NikSerdu/test-task1-vk
cd test-task1-vk
cp .env.default .env
nano .env
```

## Установка

Используя npm (порт 5173)

```bash
  npm install
  npm run dev
```

Используя docker compose (порт 80)

```bash
  docker compose up -d
```
