var rents_table = $("#rents-table").DataTable({
    processing: true,
    serverSide: false,
    ajax: {
        url: "/php/data/rents_user.php",
        data: {
            user_id: user
        }
    },
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json",
    },
    scrollX: true,
    columnDefs: [{
            searchPanes: {
                show: true
            },
            targets: [1, 2]
        },
        {
            searchPanes: {
                show: false
            },
            targets: [0, 3, 4]
        },
    ],
    layout: {
        top1: {
            searchPanes: {
                layout: 'columns-3',
                panes: [{
                    header: "Zurückgegeben",
                    options: [{
                            label: "zurückgegeben",
                            value: function(rowData, rowIdx) {
                                return (
                                    rowData[0].includes('<i class="text-success fa-regular fa-circle-check"></i>')
                                );
                            },
                        },
                        {
                            label: "nicht zurückgegeben",
                            value: function(rowData, rowIdx) {
                                return (
                                    rowData[0].includes('<i class="text-danger fa-regular fa-circle-xmark"></i>')
                                );
                            },
                        },
                    ],
                    dtOpts: {
                        searching: true,
                        order: [
                            [0, "desc"]
                        ],
                    },
                }],
            },
        },
    },
});

var marks_table = $("#marks-table").DataTable({
    processing: true,
    serverSide: false,
    ajax: {
        url: "/php/data/marks.php",
        data: {
            user_id: user
        }
    },
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json",
    },
    scrollX: true,
    columnDefs: [{
            searchPanes: {
                show: true
            },
            targets: [0]
        },
        {
            searchPanes: {
                show: false
            },
            targets: [1, 2, 3]
        },
    ],
    layout: {
        top1: {
            searchPanes: {
                layout: 'columns-1',
            },
        },
    },
    order: [
        [0, 'desc']
    ]
});

function removeMark(user, book) {
    Swal.fire({
        title: "Bist du sicher?",
        text: "Diese Änderung kann nicht rückgängig gemacht werden!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ja!",
        cancelButtonText: "Nein!",
    }).then((result) => {
        if (result.value) {
            RestRequest(
                "removeBookmark", {
                    user: user,
                    book: book
                },
                function(data) {
                    marks_table.ajax.reload();
                }
            );
        }
    });
}