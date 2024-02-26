function openModal(id) {
    $("#" + id).modal()
}

$('.modal').appendTo("body");

$(function() {
    $('.selectpicker').selectpicker();
});

var element = document.getElementsByClassName('btn');
var i;
for (i = 0; i < element.length; i++) {
    element[i].classList.remove('dropdown-toggle');
}

function randomstring(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}