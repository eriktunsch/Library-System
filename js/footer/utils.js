function openModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById(id))
    myModal.show()
}

function closeModal(id) {
    document.querySelectorAll('.modal-backdrop').forEach(e => e.remove());
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
    document.getElementsByTagName("body")[0].style.overflow = "";
    document.getElementById(id).classList.remove("show");
    document.getElementById(id).style.display = "none";
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

function abo() {
    RestRequest(
        "abo", {},
        function(data) {
            document.getElementById("newsletter_disable").style.display = "block";
            document.getElementById("newsletter_enable").style.display = "none";
        }
    );
}

function deabo() {
    RestRequest(
        "deabo", {},
        function(data) {
            document.getElementById("newsletter_disable").style.display = "none";
            document.getElementById("newsletter_enable").style.display = "block";
        }
    );}