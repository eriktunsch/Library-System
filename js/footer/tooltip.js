window.setInterval(function() {
    update_tooltip()
}, 1000);

function update_tooltip() {
    $('.new_tooltip').tooltip();
    $(".new_tooltip").removeClass("new_tooltip");
}