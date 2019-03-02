Реализация туториала https://reactjs.net/tutorials/aspnetcore.html с небольшими правками.

*Что тащит Nuget*
Для компиляции jsx
React.AspNet
JavaScriptEngineSwitcher.ChakraCore
JavaScriptEngineSwitcher.ChakraCore.Native.linux-x64
JavaScriptEngineSwitcher.ChakraCore.Native.win-x64
JavaScriptEngineSwitcher.Extensions.MsDependencyInject
Подробнее здесь: https://reactjs.net/

Для генерации путей Asp.Net контроллеров в JavaScript
RouteJs.AspNet
Подробнее здесь: https://github.com/Daniel15/RouteJs
(тут давно не было комитов, но проект не заброшен -- пока нечего добавлять)

*Что тащит фронт*
Легковесный CSS-фрейморк для разработки отзывчивых веб интерфейсов с элементами material-дизайна
https://www.w3schools.com/w3css/4/w3.css

markdown рендерилка (используется в туториале для форматирования комментариев)
https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js

ReactJS

_development_-окружение
https://cdnjs.cloudflare.com/ajax/libs/react/16.8.0/umd/react.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.0/umd/react-dom.development.js

_production_-окружение
https://unpkg.com/react@16/umd/react.production.min.js
https://unpkg.com/react-dom@16/umd/react-dom.production.min.js
