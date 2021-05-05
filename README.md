# Getting Started with React App Start Kit

git clone https://github.com/Mosandr/react-app-start-kit

Переименовать папку сборки именем вашего проекта.

mv react-app-start-kit имя_проекта
Затем перейти в папку проекта.

cd имя_проекта
Находясь в папке проекта удалить папку .git связанную с репозиторием сборки выполнив следующую команду.

npx rimraf .git

Установить все зависимости.

npm install

И запустить режим разработки.

npm start

Деплой на gh-pages: указать пользователя и репозиторий в свойстве "homepage" в package.json

"homepage": "https://myusername.github.io/my-app",