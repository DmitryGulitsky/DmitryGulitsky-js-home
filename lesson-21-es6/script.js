'use strict';

var AjaxHandlerScript = "http://fe.it-academy.by/TestAjax2.php";

/*Запрашивая список курсов, мы указываем параметром func другую функцию —
'COURSES_JSON'. В ответ на такой запрос, сервис вернёт не HTML-код
выпадающего списка, а просто строку с JSON-массивом курсов.
Соответственно, мы ожидаем ответ в формате JSON, что указано в опции dataType.*/
$.ajax(AjaxHandlerScript, {
  type: 'GET', dataType: 'json',
  data: {func: 'COURSES_JSON'},
  success: CoursesListReady, error: ErrorHandler
});

function CoursesListReady(data) {
  /*Функция его выводит в консоль, для контроля. Как видите, каждый элемент
  массива — хэш с ключами id и name — это соответственно внутренний идентификатор
  курса и наименование курса. Заметьте, передаваемые по сети данные теперь
  минимально возможного объёма, и серверный программист не занимался вёрсткой.
  Но, теперь нам надо из этого массива "слепить" выпадающий список.
  */

  console.log('От сервера получен ответ:');
  console.log(data);

  var CoursesA = data;
  /*Заводим пустую строку OptionsStr, циклом перебираем все элементы
  массива и добавляем к строке нужную нам вёрстку. Заметьте,
  мы сами выбираем, как верстать список — радиокнопками, выпадающим
  списком или, скажем, кнопками или ссылками.*/
  var OptionsStr = "";
  for (var C = 0; C < CoursesA.length; C++) {
    var CourseH = CoursesA[C];
    OptionsStr += '<a>' + CourseH.name + '</a><br>';
  }

  console.log('Скомпонованы options: ' + OptionsStr);
  /*Полученная строка выдаётся в консоль для контроля — как видите, это HTML-код,
  аналогичный тому, что мы получали от сервиса в предыдущем примере;
  далее, этот код вносится в innerHTML пустого элемента <select>.
  Далее всё работает как и на предыдущем слайде.
  Обычно, не фронтенду решать, ЧТО отдаёт AJAX-сервис, сервис обычно
  уже дан "как есть"; но обычно, если нужно вернуть ДАННЫЕ (а не вёрстку),
  AJAX-сервис отдаёт их в виде JSON-хэша или массива, т.к. это компактнее
  всего и гибче всего; на клиенте же мы из полученных
  данных можем сделать то, что хотим.
  */

  page.innerHTML = OptionsStr;
}

function GetCourseInfo() {
  var SelectedCourseId = document.getElementById('ISelectedCourse').value;
  console.log('выбран курс с id=' + SelectedCourseId);
  $.ajax(AjaxHandlerScript,
    {
      type: 'GET', dataType: 'html', data: {func: 'COURSE_INFO', id: SelectedCourseId},
      success: CourseInfoReady, error: ErrorHandler
    }
  );
}

function CourseInfoReady(data) {
  console.log('От сервера получен ответ:');
  console.log(data);
  document.getElementById('ICourseInfo').innerHTML = data;
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  alert(StatusStr + ' ' + ErrorStr);
}
