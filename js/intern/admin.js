var publishDate;
var pond;
let reading = false;
let code = ""
let scan = false;

window.onload = function(event) {
    initTags();
    publishDate = $("#publish").flatpickr({
        enableTime: false,
        dateFormat: "d.m.Y",
        "locale": "de"
    });
}

FilePond.registerPlugin(

    FilePondPluginFileEncode,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginGetFile
);

// Select the file input and use create() to turn it into a pond
pond = FilePond.create(document.getElementById('thumbnail'), {
    acceptedFileTypes: ['image/*'],
    imagePreviewHeight: 256,
    fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {

        // Do custom type detection here and return with promise

        resolve(type);
    })
});

var books_table = $('#books-table').DataTable({
    processing: true,
    serverSide: false,
    ajax: '/php/data/books.php',
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
    },
    scrollX: true,
    layout: {
      top1: {
        searchPanes: {
          panes: [{
              header: 'Verfügbarkeit',
              options: [{
                  label: 'Verfügbar',
                  value: function(rowData, rowIdx) {
                    return rowData[0] === '<i class="text-success fa-regular fa-circle-check"></i> Vefügbar';
                  }
                },
                {
                  label: 'nicht Verfügbar',
                  value: function(rowData, rowIdx) {
                    return rowData[0] === '<i class="text-danger fa-regular fa-circle-xmark"></i> nicht Verfügbar';
                  }
                }
              ],
              dtOpts: {
                searching: false,
                order: [
                  [2, 'desc']
                ]
              }
            },
            {
              header: 'Genre',
              options: genres,
              dtOpts: {
                searching: true,
              }
            },
            {
              header: 'Autor',
              options: authors,
              dtOpts: {
                searching: true,
              }
            },
            {
              header: 'Verlag',
              options: publishers,
              dtOpts: {
                searching: true,
              }
            }
          ]
        }
      }
    }
  });

function startScan() {
    scan = true;
    document.getElementById("startScan").classList.add("d-none");
    document.getElementById("stopScan").classList.remove("d-none");
}

function stopScan() {
    scan = false;
    document.getElementById("startScan").classList.remove("d-none");
    document.getElementById("stopScan").classList.add("d-none");
}

document.addEventListener('keypress', e => {
    if (scan) {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            e.preventDefault();
            if (code.length > 10) {
                RestRequest("getBook", {
                    isbn: code
                }, function(data) {
                    document.getElementById('selectBookContent').innerHTML = b64DecodeUnicode(data.data.html);
                    document.getElementById("openSelectBook").click();
                });
                code = "";
                stopScan();
            }
        } else {
            code += e.key;
        }

        if (!reading) {
            reading = true;
            setTimeout(() => {
                code = "";
                reading = false;
            }, 1000);
        }
    }
});

function selectBook(isbn, title, subtitle, description, pages, publish_date, thumbnail) {
    document.getElementById("isbn").value = isbn;
    document.getElementById("title").value = b64DecodeUnicode(title);
    document.getElementById("subtitle").value = b64DecodeUnicode(subtitle);
    $('#description').val(b64DecodeUnicode(description));
    document.getElementById("pages").value = pages;
    document.getElementById("publish").value = new Date(b64DecodeUnicode(publish_date)).toLocaleDateString("de-DE");

    pond.addFiles(thumbnail);
}

function addBook() {
    var check = 0;
    if (document.getElementById('isbn').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: ISBN'
        });
        check = 1;
    }
    if (document.getElementById('title').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Titel'
        });
        check = 1;
    }
    if (document.getElementById('publisher').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Verlag'
        });
        check = 1;
    }
    if (document.getElementById('publish').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Veröffentlichung'
        });
        check = 1;
    }
    if (document.getElementById('pages').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Seiten'
        });
        check = 1;
    }
    if (document.getElementById('authors').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Autoren'
        });
        check = 1;
    }
    if (document.getElementById('genres').value == "") {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte folgendes Feld ausfüllen: Genres'
        });
        check = 1;
    }
    var images = [];

    for (var i = 0; i < pond.getFiles().length; i++) {
        images.push(pond.getFile(i).getFileEncodeBase64String());
    }

    if (images.length == 0) {
        iziToast.error({
            title: 'Error!',
            message: 'Bitte lade ein Bild hoch'
        });
        check = 1;
    }
    if (check == 1) {
        iziToast.warning({
            title: 'Achtung!',
            message: 'Die Anfrage wurde gestoppt!'
        });
        return;
    }
    RestRequest("newBook", {
        isbn: document.getElementById('isbn').value,
        title: document.getElementById('title').value,
        subtitle: document.getElementById('subtitle').value,
        publisher: document.getElementById('publisher').value,
        publish: document.getElementById('publish').value,
        pages: document.getElementById('pages').value,
        authors: document.getElementById('authors').value,
        genres: document.getElementById('genres').value,
        description: $('#description').val(),
        images: JSON.stringify(images)
    }, function(data) {
        if (data.response.typ == "success") {
            document.getElementById('isbn').value = "";
            document.getElementById('title').value = "";
            document.getElementById('subtitle').value = "";
            document.getElementById('publisher').value = "";
            document.getElementById('publish').value = "";
            document.getElementById('pages').value = "";
            document.getElementById('authors').value = "";
            $('#description').val('');
            tagElements["genres_i"].resetTags();
            tagElements["authors_i"].resetTags();
            pond.removeFiles();

            books_table.ajax.reload();
        }
    });
}