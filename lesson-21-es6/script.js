'use strict';

var AjaxHandlerScript = "http://fe.it-academy.by/TestAjax2.php";



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
