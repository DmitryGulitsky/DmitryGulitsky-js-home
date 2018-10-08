'use strict';
(function () {
  var formFields = [
    {'type': 'text', 'label': 'Разработчики:', 'width': 500},
    {'type': 'text', 'label': 'Название сайта:', 'width': 500},
    {'type': 'url', 'label': 'URL сайта:', 'width': 500},
    {'type': 'date', 'label': 'Дата запуска сайта:', 'width': 200},
    {'type': 'number', 'label': 'Посетителей в сутки:', 'width': 200},
    {'type': 'email', 'label': 'E-mail для связи:', 'width': 300},
    {'type': 'select', 'label': 'Рубрика каталога:', 'option': ['бытовая техника', 'разное'], 'width': 300},
    {'type': 'radio', 'label': 'Размещение:', 'radioLabel': ['бесплатное', 'платное', 'VIP']},
    {'type': 'checkbox', 'label': 'Разрешить отзывы:'},
    {'type': 'textarea', 'label': 'Описание сайта:', 'width': 500, 'height': 200},
    {'type': 'submit', 'label': 'Опубликовать'}];

  function formDynamic() {
    document.write('<form action="http://fe.it-academy.by/TestForm.php">');
    function addText() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addUrl() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addDate() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addNumber() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addEmail() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addSelect() {
      document.write('<p>' + formFields[i].label + '<select width=' + formFields[i].width + '>');
      for (var j = 0; j < formFields[i].option.length; j++) {
        document.write('<option value=' + formFields[i].option[j] + '>' + formFields[i].option[j] + '</option>)');
      }
      document.write('</p>');
    }
    function addRadio() {
      document.write('<p>' + formFields[i].label);
      for (var j = 0; j < formFields[i].radioLabel.length; j++) {
        document.write('<input type=' + formFields[i].type + '>' + formFields[i].radioLabel[j]);
      }
      document.write('</p>');
    }
    function addCheckbox() {
      document.write('<p>' + formFields[i].label + '<input type=' + formFields[i].type + '></p>');
    }
    function addTextarea() {
      document.write('<p>' + formFields[i].label + '<br><input type=' + formFields[i].type + ' width=' + formFields[i].width + '></p>');
    }
    function addSubmit() {
      document.write('<p><input type=' + formFields[i].type + ' value=' + formFields[i].label + ' ></p>');
    }
    for (var i = 0; i < formFields.length; i++) {
      if ((formFields[i].type === 'text')) {
        addText();
      } else if (formFields[i].type === 'url') {
        addUrl();
      } else if (formFields[i].type === 'date') {
        addDate();
      } else if (formFields[i].type === 'number') {
        addNumber();
      } else if (formFields[i].type === 'email') {
        addEmail();
      } else if (formFields[i].type === 'select') {
        addSelect();
      } else if (formFields[i].type === 'radio') {
        addRadio();
      } else if (formFields[i].type === 'checkbox') {
        addCheckbox();
      } else if (formFields[i].type === 'textarea') {
        addTextarea();
      } else if (formFields[i].type === 'submit') {
        addSubmit();
      }
    }
  }
  document.write('<form>');
  formDynamic();
  document.write('</form>');
  console.log(formFields);
})();
