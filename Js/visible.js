
var seeList = document.getElementById('visible');
var visible = false;

function setVisible() {

    var inputs = document.getElementsByTagName('input'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
            if (inputs[i].value == 0) {
                visible = false;
            } else if (inputs[i].value == 1) {
                visible = true;
            }
        }

    }
}


var app2 = new Vue({
    el: '#app2',
    data: {
        seen: visible
    }
})