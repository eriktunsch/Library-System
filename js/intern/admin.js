var port;

var textEncoder;
var textDecoder;
var writableStreamClosed;
var readableStreamClosed;
var reader;

var writer;

var user_table = $("#table-user").DataTable({
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
    },
    scrollX: true,
});

var items_table = $("#table-items").DataTable({
    processing: true,
    serverSide: true,
    ajax: "/php/data/items.php",
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
    },
    scrollX: true,
});

var historyAll_table = $("#table-historyAll").DataTable({
    processing: true,
    serverSide: true,
    ajax: "/php/data/historyAll.php",
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
    },
    scrollX: true,
});

function deleteItem(id) {
    Swal.fire({
        title: "Bist du sicher?",
        text: "Diese Aktion kann nicht rückgängig gemacht werden!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
        cancelButtonText: "No!",
    }).then((result) => {
        if (result.value) {
            RestRequest(
                "deleteItem", {
                    id: id,
                },
                function(data) {
                    items_table.ajax.reload();
                    items_table.columns.adjust().draw();
                }
            );
        }
    });
}

function newItem() {
    var check = 0;
    if (document.getElementById("name").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Name",
        });
        check = 1;
    }
    if (document.getElementById("price").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Price",
        });
        check = 1;
    }
    if (document.getElementById("ean").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: EAN",
        });
        check = 1;
    }
    if (document.getElementById("picture").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Picture",
        });
        check = 1;
    }
    if (check == 1) {
        iziToast.warning({
            title: "Attention!",
            message: "The request has been stopped!",
        });
        return;
    }

    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    const file = document.getElementById("picture").files[0];
    var promise = getBase64(file);
    promise.then(function(result) {
        console.log(result);
    });
    if (acceptedImageTypes.includes(file["type"])) {
        promise.then((avatar) => {
            RestRequest(
                "newItem", {
                    name: document.getElementById("name").value,
                    price: document.getElementById("price").value,
                    ean: document.getElementById("ean").value,
                    picture: avatar,
                },
                function(data) {
                    document.getElementById("new_item").reset();
                    items_table.ajax.reload();
                    items_table.columns.adjust().draw();
                }
            );
        });
    } else {
        iziToast.error({
            title: "Error!",
            message: "Please only upload an image!",
        });
    }
}

function changeItem(id) {
    var check = 0;
    if (document.getElementById("name_change").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Name",
        });
        check = 1;
    }
    if (document.getElementById("price_change").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Price",
        });
        check = 1;
    }
    if (document.getElementById("ean_change").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: EAN",
        });
        check = 1;
    }
    if (check == 1) {
        iziToast.warning({
            title: "Attention!",
            message: "The request has been stopped!",
        });
        return;
    }

    if (document.getElementById("picture_change").value != "") {
        const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
        const file = document.getElementById("picture_change").files[0];
        var promise = getBase64(file);
        promise.then(function(result) {
            console.log(result);
        });
        if (acceptedImageTypes.includes(file["type"])) {
            promise.then((avatar) => {
                RestRequest(
                    "changeItem", {
                        name: document.getElementById("name_change").value,
                        price: document.getElementById("price_change").value,
                        ean: document.getElementById("ean_change").value,
                        picture: avatar,
                        id: id,
                    },
                    function(data) {
                        items_table.ajax.reload();
                        $("#changer").modal("hide");
                    }
                );
            });
        } else {
            iziToast.error({
                title: "Error!",
                message: "Please only upload an image!",
            });
        }
    } else {
        RestRequest(
            "changeItem", {
                name: document.getElementById("name_change").value,
                price: document.getElementById("price_change").value,
                ean: document.getElementById("ean_change").value,
                id: id,
            },
            function(data) {
                items_table.ajax.reload();
                items_table.columns.adjust().draw();
                $("#changer").modal("hide");
            }
        );
    }
}

function loadChanger(id) {
    RestRequest(
        "loadChanger", {
            id: id,
        },
        function(response) {
            document.getElementById("changer_content").innerHTML = response.data.html;
        }
    );
}

function loadBalancer(id) {
    RestRequest(
        "loadBalancer", {
            id: id,
        },
        function(response) {
            document.getElementById("balancer_content").innerHTML =
                response.data.html;
        }
    );
}

function giveMoney(id) {
    var check = 0;
    if (document.getElementById("money_change").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Sum",
        });
        check = 1;
    }

    if (check == 1) {
        iziToast.warning({
            title: "Attention!",
            message: "The request has been stopped!",
        });
        return;
    }

    RestRequest(
        "giveMoney", {
            sum: document.getElementById("money_change").value,
            id: id,
        },
        function(data) {
            document.getElementById("balance_" + id).innerHTML =
                parseInt(
                    document
                    .getElementById("balance_" + id)
                    .innerHTML.replace(" Euro", "")
                ) +
                parseInt(document.getElementById("money_change").value) +
                " Euro";

            $("#balancer").modal("hide");
        }
    );
}

function takeMoney(id) {
    var check = 0;
    if (document.getElementById("money_change").value == "") {
        iziToast.error({
            title: "Error!",
            message: "Please fillout the input: Sum",
        });
        check = 1;
    }

    if (check == 1) {
        iziToast.warning({
            title: "Attention!",
            message: "The request has been stopped!",
        });
        return;
    }

    RestRequest(
        "takeMoney", {
            sum: document.getElementById("money_change").value,
            id: id,
        },
        function(data) {
            document.getElementById("balance_" + id).innerHTML =
                parseInt(
                    document
                    .getElementById("balance_" + id)
                    .innerHTML.replace(" Euro", "")
                ) -
                parseInt(document.getElementById("money_change").value) +
                " Euro";
            $("#balancer").modal("hide");
        }
    );
}

const button = document.getElementById("connect");
button.addEventListener("click", async function() {
    const ports = await navigator.serial.getPorts();

    if (ports.length == 0) {
        port = await navigator.serial.requestPort();
    } else {
        port = ports[0];
    }

    await port.open({ baudRate: 9600 });
    document.getElementById("connect").style.display = "none";

    textEncoder = new TextEncoderStream();
    textDecoder = new TextDecoderStream();
    writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

    writer = textEncoder.writable.getWriter();

    readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    reader = textDecoder.readable.getReader();
});

$(".writeNFC").on("click", async(event) => {
    const clickedElement = $(event.target);

    var user = clickedElement.data("id");

    if (port.writable) {
        await writer.write("w");
        Swal.fire({
            title: "Bitte Tag an den Scanner halten",
            text: "Danach OK drücken!",
            type: "info",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK!",
        }).then(async(result) => {
            if (result.value) {
                const random = makeid(10);

                await writer.write(random + "#");

                RestRequest(
                    "storeToken", {
                        token: random,
                        user: user,
                    },
                    function(data) {}
                );
                Swal.fire("Fertig!", "Der Tag wurde geschrieben!", "success");
            }
        });
    }
});

var scan = true;
var scanUser = true;
var temp = "";
async function startCheck() {
    scan = true;
    scanUser = true;
    document.getElementById("testCard").disabled = true;
    document.getElementById("stopTest").disabled = false;
    while (scan) {
        const { value, done } = await reader.read();
        temp += value;
        if (temp.endsWith("#") && scanUser) {
            temp = temp.replace(" ", "").replace("#", "");
            token = temp;
            RestRequest(
                "loadUser", {
                    token: token,
                },
                function(data) {
                    document.getElementById("read_username").value = data.data.username;
                    document.getElementById("read_token").value = token;
                    document.getElementById("read_name").value = data.data.name;
                    temp = "";
                    scanUser = false;

                    document.getElementById("testCard").disabled = false;
                    document.getElementById("stopTest").disabled = true;
                }
            );

            temp = "";
        } else if (!scanUser) {
            temp = "";
        }
    }
}

function stopCheck() {
    scan = false;
    document.getElementById("testCard").disabled = false;
    document.getElementById("stopTest").disabled = true;
}

function makeid(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}