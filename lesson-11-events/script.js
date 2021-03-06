'use strict';
(function () {
  function generateForm(parent, origForm, formFields) {

    var cloneForm = origForm.cloneNode(true);

    formFields.forEach(addFormElement);
    parent.replaceChild(cloneForm, origForm);

    function inputCreate(type, name) {
      var input = doc.createElement('input');
      input.name = name;
      input.type = type;
      return input;
    }
    function labelCreate(name, inner) {
      var label = doc.createElement('label');
      label.for = name;
      label.innerHTML = inner;
      return label;
    }
    function addText(obj) {
      var inner = obj.label;
      var type = obj.type;
      var name = obj.name;
      var div = doc.createElement('div');
      div.appendChild(labelCreate(name, inner));
      div.appendChild(inputCreate(type, name));
      return div;
    }
    function addSelect(obj) {
      var inner = obj.label;
      var name = obj.name;
      var options = obj.options;
      var div = doc.createElement('div');
      var label = labelCreate(name, inner);
      var select = doc.createElement('select');
      select.name = name;
      function option(optIn) {
        var option = doc.createElement('option');
        option.innerHTML = optIn;
        return option;
      }
      div.appendChild(label);
      div.appendChild(select);
      for (var i = 0; i < options.length; i++) {
        select.appendChild(option(options[i]));
      }
      return div;
    }
    function addRadio(obj) {
      var inner = obj.label;
      var type = obj.type;
      var name = obj.name;
      var options = obj.options;
      var div = doc.createElement('div');
      div.appendChild(labelCreate(name, inner));
      for (var i = 0; i < options.length; i++) {
        div.appendChild(inputCreate(type, name));
        div.appendChild(doc.createTextNode(options[i]));
      }
      return div;
    }
    function addCheckbox(obj) {
      var inner = obj.label;
      var type = obj.type;
      var name = obj.name;
      var div = doc.createElement('div');
      var label = labelCreate(name, inner);
      div.appendChild(label);
      div.appendChild(inputCreate(type, name));
      return div;
    }
    function addTextarea(obj) {
      var inner = obj.label;
      var cols = obj.cols;
      var rows = obj.rows;
      var name = obj.name;
      var div = doc.createElement('div');
      var label = labelCreate(name, inner);
      var websiteDescription = doc.createElement('textarea');
      websiteDescription.cols = cols;
      websiteDescription.rows = rows;
      div.appendChild(label);
      div.appendChild(websiteDescription);
      return div;
    }
    function addSubmit(obj) {
      var inner = obj.label;
      var type = obj.type;
      var name = obj.name;
      var sbmt = inputCreate(type, name);
      sbmt.value = inner;
      return sbmt;
    }
    function addFormElement(obj) {
      switch (obj.type) {
      case 'text':
        cloneForm.appendChild(addText(obj));
        break;
      case 'select':
        cloneForm.appendChild(addSelect(obj));
        break;
      case 'radio':
        cloneForm.appendChild(addRadio(obj));
        break;
      case 'checkbox':
        cloneForm.appendChild(addCheckbox(obj));
        break;
      case 'textarea':
        cloneForm.appendChild(addTextarea(obj));
        break;
      case 'submit':
        cloneForm.appendChild(addSubmit(obj));
      default:
        console.error('Invalid form element. Break form creation');
        break;
      }
    }
  }
  var doc = document;
  var container = doc.body;
  var origForm = doc.forms.addSiteForm;
  var formFields = [
    {label: 'Название сайта *: ', type: 'text', name: 'websiteName'},
    {label: 'Разработчики: ', type: 'text', name: 'devName'},
    {label: 'URL сайта *: ', type: 'text', name: 'URL'},
    {label: 'Дата запуска сайта: ', type: 'text', name: 'publishDate'},
    {label: 'Посетителей в сутки: ', type: 'text', name: 'visitorsPerDay'},
    {label: 'E-mail для связи *: ', type: 'text', name: 'email'},
    {label: 'Рубрика: ', type: 'select', name: 'catSection', options: ['бытовая техника', 'здоровье', 'домашний уют']},
    {label: 'Размещение: ', type: 'radio', name: 'tariff', options: [' бесплатное ', ' платное ', ' VIP ']},
    {label: 'Разрешить отзывы: ', type: 'checkbox', name: 'allowComments'},
    {label: 'Описание сайта: ', type: 'textarea', name: 'description', rows: 6, cols: 25},
    {label: 'Опубликовать', type: 'submit', name: 'publishBtn'}
  ];
  generateForm(container, origForm, formFields);
})();
