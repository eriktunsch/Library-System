var books_table = $("#books-table").DataTable({
    processing: true,
    serverSide: false,
    ajax: "/php/data/search.php",
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
            targets: [1, 2, 3, 4, 5]
        },
    ],
    layout: {
        top1: {
            searchPanes: {
                panes: [{
                        header: "Genre",
                        options: genres,
                        dtOpts: {
                            searching: true,
                        },
                    },
                    {
                        header: "Autor",
                        options: authors,
                        dtOpts: {
                            searching: true,
                        },
                    },
                    {
                        header: "Verlag",
                        options: publishers,
                        dtOpts: {
                            searching: true,
                        },
                    },
                ],
            },
        },
    },
});

function setMark(isbn) {
    RestRequest(
        "setBookmark", {
            isbn: isbn,
        },
        function(data) {
            books_table.ajax.reload();
        }
    );
}

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
                    books_table.ajax.reload();
                }
            );
        }
    });
}