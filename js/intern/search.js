var books_table = $("#books-table").DataTable({
    processing: true,
    serverSide: false,
    ajax: "/php/data/search.php",
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json",
    },
    scrollX: true,
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