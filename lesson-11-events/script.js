
(function () {
  function generateForm(parent, origForm, formFields) {
    var doc = document;
    var container = doc.body;
    var origForm = doc.forms.addSiteForm;
    var formFields = [];
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