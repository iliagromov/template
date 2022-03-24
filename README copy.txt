# template
template for start project

# Comands componet
yarn clear
yarn static
yarn dev

# Start project 
yarn
yarn static // собирает статику gulp sprite && gulp images && gulp fonts && gulp libs && gulp clearTrash
yarn dev // запускает вотчер и собирает компоненты

# Prod project 
yarn prod

If you whant add new font-famaly 
You can use mixin font-mixin
To start you need add new folder
Example: 
folderName=fontFamalyName/fontFamalyName-Regular.format
OpenSans/OpenSans-Regular.ttf

# SVGsprite 
Use 
<img src="path/sprite.svg#iconName">
or
.iconName {
    background: url(path/sprite.svg#iconName) no-repeat; 
}
or
Sass class name {.iconName}
Simple import sprite.scss in your main.sass and use class in html selector
ex.
<img class="iconName">

img(src="assets/icons/svg/spriteSVG.svg#mouse" alt="").svg-mouse-box
div.svg-mouse.svg-mouse-box
div.svg-iconFacebookGray-box.svg-iconFacebookGray
div.svg-iconInstagramGray-box.svg-iconInstagramGray
# Vmin Vmax
Vmin использует размер меньшей стороны. То есть если высота окна браузера меньше ширины, 1 vmin будет равен 1 vh. Если ширина браузера меньше его высоты, 1 vmin равен 1 vw.

Vmax использует большую сторону. Если ширина браузера больше его высоты, 1 vmax равен 1 vw. Если высота браузера больше ширины, 1 vmax равен 1 vh.

Если падает ошибка при старте проекта, сначала нужно проверпить все импорты в sass оставив толкько базовый styles
events.js:174
      throw er; // Unhandled 'error' event
      ^

Error: File not found with singular glob: /home/hp/Projects/iliagromov/template/dist/css/px/media/styles-calc.css (if this was purposeful, use `allowEmpty` option)

# Create componet
yarn cmp --c some2
return 
{
    <some2.component.pug>
    some2.component.sass
}
yarn cmp --c some2 --js
return 
{
    <some2.component.pug>
    some2.component.sass
    some2.component.js
}
# Remove componet
yarn cmp --r some2
return remove component

удаление файлов 
тесты перед пушем 
найминг
Проверка грида 
Пути для pug чтобы не писать pointHall ../../../../../../

ssh 

настроить варианты сборки 
1 вариант 
сборка статики если не нужен бекенд
2 вариант 
сборка статики сразу на бекенд папка для вотчинга тоже бекенд
3 вариант 
сборка компонентов сразу с интеграцией уже в папке бекенд в таком случае место html у нас php данные заводим сразу в админке или json Преимущество в том что стили пишем в sass  js модульно работает gulp или webpack есть node_modules
Верстаем сразу с интеграцией, не тратится вермя на интеграцию с админкой и так быстрее можно устранить проблемы со стилями если они возникают в плагине

Сделать github actions чтобы шел автодеплой файлов !ТЕМЫ! на сервер. плагины устанавливаются отдельно

Сделать dump базы, чтобы не перености поля руками 

Таким образом фронт будет сразу в беке и если верстальщик не умеет делать интеграцию подготовленная среда для интегратора уже будет готова 

Такой деплой можно легко настраивать на wp 
Нужно выяснить как это делать на другие cms 

Для фронта:

Делать каждый элемент блоком 
Создать ui который будет максимально обработан для данного проекта 
Смысл в том, чтобы можно было включить любой отверстанный блок на сайт и он четко отображался 

Проект будет состоять из множество компонентов
Это нужно для того, что есть будет соять задача сделать новую страницу, а по дизайну будут использоваться уже готовые блоки на сайте, то смысл повторять код нет. нужно его переиспользовать
за исключением если добавляется какой-то новый компонент
Или если менятся модификация компонента, то просто наследоваться от родительско блока
