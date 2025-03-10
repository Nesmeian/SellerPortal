# SellerPortal
## Суть задания
Разработать личный кабинет продавца на маркетплейсе, в котором есть возможность управлять своими объявлениями и заказами.
## Общие вводные
* Тестовое задание необходимо реализовать с использованием представленного api.   
* Результат тестового должен соответствовать требованиям, описанным ниже.   
* В пунктах «Будет плюсом» обозначены требования, выполнять которые не обязательно, но даже частичное выполнение этих пунктов позволит лучше раскрыть ваши знания и навыки.
## Функциональные требования
**Приложение должно состоять из**:
1. Страницы объявления  
2. Страницы всех объявлений  
3. Страницы заказов  
4. Панели навигации
#### На странице всех объявлений:
1. Отображается список всех объявлений продавца  
2. Реализована пагинация показа объявлений  
3. Реализован выбор количества объявлений для показа на странице (по умолчанию должно быть 10)  
4. Реализован поиск по названию объявления  
5. Можно перейти на страницу объявления (по клику на карточку)  
6. В карточке объявления есть следующая информация о нем:  
   - Картинка  
   - Название;  
   - Стоимость;  
   - Количество просмотров;  
   - Количество лайков;
7. Есть возможность создавать новые объявления (Модальное окно с input):  
   - Картинка (текстовое поле для ввода URL);  
   - Название (текстовое поле);  
   - Описание (текстовое поле)
   - Стоимость (числовое поле);
#### На странице объявления:
1. Есть возможность просмотра объявления
2. В редактировании объявления есть возможность:  
   - Менять картинку;  
   - Менять название;  
   - Менять цену;  
   - Менять описание.
#### На странице заказов:
1. Отображается список заказов с фильтрами по статусу  
2. Возможно сделать сортировку по сумме заказа  
3. На карточке заказа изображена следующая информация:  
   - Количество товаров;  
   - Возможность завершения заказа;  
   - Стоимость заказа;
   - Дата создания заказа;
   - Статус (текстом);
   - Номер заказа;
   - Кнопка “Показать все товары”, показывающая все товары в данном заказе (можно отображать их в этой же карточке или сделать модальное окно)  
4. При клике на товар в заказе есть возможность перейти в объявление продавца по этому товару
#### Панель навигации:
1. Вкладка “Объявления” - реализован переход на страницу объявлений  
2. Вкладка “Заказы” - реализован переход на страницу заказов

**Дополнительное задание**

1. На странице всех объявлений реализована фильтрация выдачи по:
   - цене;
   - просмотрам;
   - лайкам
2. На странице объявлений при клике на кнопку “Заказы” на карточке товара происходит переход в раздел Заказы, где показаны заказы, которые содержат это объявление в товарах.
3. На странице заказов реализована пагинация показа заказов.

## **Нефункциональные требования**
1. Стек технологий:  
   * Frontend фреймворк: React, версия 18  
   * можно использовать любую общедоступную библиотеку компонент. Примеры: [material UI](https://mui.com/material-ui/), [ant.design](https://ant.design/), [mantine](https://mantine.dev/), [react-bootstrap](https://react-bootstrap.github.io/)  
   * сборщик: Webpack/Vite  
   * Node.js: 20 или выше  
   * пакетный менеджер: npm  
2. Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)

**Будет плюсом:**
1. Использование TypeScript  
2. Настройка проверки кода с помощью ESLint  
3. Наличие docker-файла для запуска  
4. Прерывание (отмена/прекращение) запросов переходе со страницы на страницу
5. Покрытие кода юнит-тестами

## Ход решения
Если у вас возникнут вопросы по заданию, ответы на которые вы не найдете в описанных требованиях, то вы вольны принимать решения самостоятельно.
В таком случае приложите к проекту README-файл, в котором будет список вопросов/проблем, с которыми вы столкнулись, и поясните как вы их решили и почему именно таким образом.

## Оформление решения
Необходимо предоставить публичный git-репозиторий на любом публичном хосте (Gitverse / etc), содержащий в master/main ветке:
1. Код сервиса  
2. Описанную в README.md инструкцию по запуску  
3. Описанные в README.md вопросы/проблемы, с которыми столкнулись,  и ваша логика их решений (если требуется)

## Перед запуском
1. Установить [NodeJS и NPM](https://nodejs.org/en/download/package-manager).  
2. Выполнить `npm install`.

## Запуск сервера
`npm run server` запустит сервер на https://localhost:3000.  
Задать порт можно самостоятельно, добавив параметр --port в команде `server` в package.json.  Например, `json-server --watch db.json --port 8000`(будет доступен по адресу https://localhost:8000)

## Работа с API
Сущности описаны в файле types.ts (опциональные поля обозначаются через `?:`).

### Обратите отдельное внимание:
   * В файл db.json можно добавлять новые записи и изменять существующие.
   * Контракт **менять нельзя**!

### advertisements

* GET `/advertisements` - получение всех объявлений.
* POST `/advertisements` - создание объявления
* GET `/advertisements/:id` -  получение конкретного объявления по id.
* PUT `/advertisements/:id` - изменение объявления по id.
* PATCH `/advertisements/:id` - изменение объявления по id.
* DELETE `/advertisements/:id` - удаление объявления по id.

### orders
* GET `/orders` - получение всех заказов.
* GET `/orders/:id` -  получение конкретного заказа по id.
* PUT `/orders/:id` - изменение заказа по id.
* PATCH `/orders/:id` - изменение заказа по id.
* DELETE `/orders/:id` - удаление заказа по id.

Для получения нескольких записей, можно использовать параметры `start` и `limit`.

**Пример:**
``http://localhost:3000/orders?_start=0&_limit=10``.  
Запрос вернет первые 10 записей.

**Пример запроса с фильтрацией и сортировкой:**
``http://localhost:3000/advertisements?_sort=price&likes=2``.  
Запрос отсортирует по цене и вернет объявления с двумя лайками.

**Пример добавления нового объявления:**

```
fetch('http://localhost:3000/advertisements', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify({
      "name": "Новый товар",
      "price": 100,
      "createdAt": "2024-08-12T12:16:55.351Z",
      "views": 200,
      "likes": 300,
      "imageUrl": ""
    })
});
