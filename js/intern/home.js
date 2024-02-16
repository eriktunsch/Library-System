var user_table = $('#table-history').DataTable({
    processing: true,
    serverSide: true,
    ajax: '/php/data/history.php',
    "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json"
    },
    scrollX: true,
});