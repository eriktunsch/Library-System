$(document).ready(function() {
    update_popover()
});

function update_popover() {
    $('.new_popover').popover({
        html: true,
        sanitize: false,
        title: function() {
            return jQuery(this).data('title') + '<span class="close">&times;</span>';
        }
    });

    $(".new_popover").removeClass("new_popover");
}

$(document).on("click", ".popover .close", function() {

    $(this).parents(".popover").popover('hide');

});