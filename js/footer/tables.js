$(document).ready(function() {
    $('#table-id').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
        }
    });
    $('#table-id1').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
        }
    });

    $('#table-id-nopage').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
        },
        "searching": false,
        "paging": false,
        "info": false
    });
    $('#table-id1-nopage').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
        },
        "searching": false,
        "paging": false,
        "info": false
    });
});
$(document).ready(function() {
    $('.dataTables_filter input').addClass('form-control');
});