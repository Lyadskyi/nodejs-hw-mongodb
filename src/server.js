const express = require('express');

function setupServer() {
  const app = express();

  // Middleware для обробки JSON запитів
  app.use(express.json());

  // Маршрутизація
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  // Встановлюємо порт для сервера
  const PORT = process.env.PORT || 3000;

  // Запуск сервера
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
}

module.exports = setupServer;
