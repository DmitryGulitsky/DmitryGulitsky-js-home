(function () {
  function generateForm(parent, origForm, formFields) {
    var doc = document;
    var container = doc.body;
    var origForm = doc.forms.addSiteForm;
    var formFields = [
      {'type': 'text', 'label': 'Разработчики:', 'width': 500},
      {'type': 'text', 'label': 'Название сайта:', 'width': 500},
      {'type': 'url', 'label': 'URL сайта:', 'width': 500},
      {'type': 'date', 'label': 'Дата запуска сайта:', 'width': 200},
      {'type': 'number', 'label': 'Посетителей в сутки:', 'width': 200},
      {'type': 'email', 'label': 'E-mail для связи:', 'width': 300},
      {'type': 'select', 'label': 'Рубрика каталога:', 'option': {'бытовая техника': true, 'разное': true}, 'width': 300},
      {'type': 'radio', 'label': 'Размещение:', 'radioLabel': {'бесплатное': true, 'платное': true, 'VIP': true}},
      {'type': 'checkbox', 'label': 'Разрешить отзывы:'},
      {'type': 'textarea', 'label': 'Описание сайта:', 'width': 500, 'height': 200}, {'type': 'submit', 'label': 'Опубликовать'}];
    generateForm(parent, origForm, formFields);
  }
})();

formFields.forEach(addFormElement);
parent.replaceChild(cloneForm, origForm);

function addFormElement(obj) {

}

function inputCreate(type, name) {

}

function labelCreate(name, inner) {

}

function ffText(obj) {

}

function ffSelect(obj) {

}

function ffRadio(obj) {

}

function ffCheckbox(obj) {

}
