# template
template for start project

If you whant add new font-famaly 
You can use mixin font-mixin
To start you need add new folder
Example: 
folderName=fontFamalyName/fontFamalyName-Regular.format
OpenSans/OpenSans-Regular.ttf

SVGsprite 
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



Vmin использует размер меньшей стороны. То есть если высота окна браузера меньше ширины, 1 vmin будет равен 1 vh. Если ширина браузера меньше его высоты, 1 vmin равен 1 vw.

Vmax использует большую сторону. Если ширина браузера больше его высоты, 1 vmax равен 1 vw. Если высота браузера больше ширины, 1 vmax равен 1 vh.

Для конвертера в vw 
я задаю основной контейнер например 320 
я ставлю размер шрифта например 50px он переводит в vw = 15.625vw
по макету на 1024 размер меняется на 70px и я хочу чтобы на этом разрешение шрифт был после конвертации 70px 
но такое не произойдет потому что конвертация происходит по формуле 100 * $n / $conteiner
70px будут переведены в     font-size: 21.875vw; чему равняется 224px
потому что базовый контейнер равняется 320
первый вариант я написал функцию которая правильно переводит размер vw(70, $_mmd)
но тогда зачем нам ковертер ? 
и каждый раз писать функцию неудобно нужно заводить переменный и передавать в ручную 

по-этому второй вариант 
хочется в настройках конвертера передавать брекпоинты когда наступат тот или другой размер экрана то размеры элементов переконвертируются 

тогда я просто в медеа запросах буду завать размеры в пикселях так как они указаны в макете 
а конвертер будет делать свое дело
на промежуточных кранах между точками размеры будут пропорционально изменяться

был вариант расчета vw на каждый пиксель экрана но тогда эьто ничем не будет отличаться от жесткой величина в пикселях т.к. соотношение всегда будет сохраняться 
Нам же нужно плавное изменение по соотношению размера элемента к экрану 

идеально сделать так чтобы я пишу 1 свойсво например самый большой размер шрифта на макете 100 px на экране 1920
а при сжатие до 1024 шрифт становится 70px 
а на 320 50px


gulp clear, 
gulp static, 
npm run dev

yarn clear
yarn static
yarn dev


Если падает ошибка при старте проекта, сначала нужно проверпить все иморты в sass оставив толкько базовый styles
events.js:174
      throw er; // Unhandled 'error' event
      ^

Error: File not found with singular glob: /home/hp/Projects/iliagromov/template/dist/css/px/media/styles-calc.css (if this was purposeful, use `allowEmpty` option)

fixme 
nameing files
gulp cli crate component
удаление файлов 
gulp component header -pug -sass 
{
    <name.component.pug>
    name.component.sass
}
