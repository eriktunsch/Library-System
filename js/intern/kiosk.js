var token = "";
var port;
var temp = "";
var scanUser = true;

var cart = [];

var textDecoder;
var readableStreamClosed;
var reader;

let code = "";
let reading = false;

const button = document.getElementById('connect');
button.addEventListener('click', async function() {
    const ports = await navigator.serial.getPorts();

    if (ports.length == 0) {
        port = await navigator.serial.requestPort();
    } else {
        port = ports[0];
    }

    await port.open({ baudRate: 9600 });
    document.getElementById("connect").style.display = "none";

    textDecoder = new TextDecoderStream();
    readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    reader = textDecoder.readable.getReader();
    scanUser = true;
    startCheck();
});

async function startCheck() {
    while (true) {
        const { value, done } = await reader.read();
        temp += value;
        if (temp.endsWith('#') && scanUser) {
            temp = temp.replace(" ", "").replace("#", "");
            token = temp;
            RestRequest("loadUser", {
                token: token
            }, function(data) {
                document.getElementById("username").innerText = data.data.username;
                document.getElementById("fullname").innerText = data.data.name;
                document.getElementById("balance").innerText = (Math.round(data.data.balance * 100) / 100).toFixed(2) + ' Euro';
                cart.length = 0;
                updatePrice();
                $("#waiter").fadeOut(500, "linear");
                temp = "";
                scanUser = false;
            });

            temp = "";
        } else if (!scanUser) {
            temp = "";
        }
    }
};

function checkout() {
    Swal.fire({
        title: 'Bist du fertig?',
        text: "Gehe sicher, dass du alle Artikel gescannt hast!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ja!',
        cancelButtonText: 'Nein!'
    }).then((result) => {
        if (result.value) {
            RestRequest("checkout", {
                token: token,
                cart: JSON.stringify(cart)
            }, function(data) {
                document.getElementById("cart").innerHTML = "";
                document.getElementById("scan-animation").style.display = "block";
                cart.length = 0;
                updatePrice();

                document.getElementById("balance").innerText = (Math.round(data.data.balance * 100) / 100).toFixed(2) + ' Euro';

                Swal.fire({
                    title: 'Fertig!',
                    text: 'Dein jetziges Guthaben beträgt ' + (Math.round(data.data.balance * 100) / 100).toFixed(2) + ' Euro.',
                    type: 'success',
                    showCloseButton: false,
                    showCancelButton: false,
                    showConfirmButton: false
                });

                setTimeout(function() {
                    swal.close();
                    closeKiosk();
                }, 4000);
            });
        }
    })
}

function cancel() {
    Swal.fire({
        title: 'Bist du sicher?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ja!',
        cancelButtonText: 'Nein!'
    }).then((result) => {
        if (result.value) {
            $("#waiter").fadeIn(500, "linear");
            token = "";
            scanUser = true;
            startCheck();
            document.getElementById("cart").innerHTML = "";
            document.getElementById("scan-animation").style.display = "block";
            cart.length = 0;
            cart = [];
            updatePrice();
            closeKiosk();
        }
    })
}


document.addEventListener('keypress', e => {
    //usually scanners throw an 'Enter' key at the end of read
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        e.preventDefault();
        if (code.length > 10) {
            console.log(code);
            cart.push(parseInt(code));
            RestRequest("loadItem", {
                id: code,
                token: token
            }, function(data) {
                document.getElementById("scan-animation").style.display = "none";
                document.getElementById("cart").innerHTML = data.data.html + document.getElementById("cart").innerHTML;
                updatePrice();
            });
            code = "";
        }
    } else {
        code += e.key; //while this is not an 'enter' it stores the every key    
        console.log(code);

    }

    //run a timeout of 200ms at the first read and clear everything
    if (!reading) {
        reading = true;
        setTimeout(() => {
            code = "";
            reading = false;
        }, 1000); //200 works fine for me but you can adjust it
    }
});

function removeItem(id, string) {
    $("#item_" + string).fadeOut(200, "linear", function() {
        document.getElementById("item_" + string).remove();
    });
    $("#line_" + string).fadeOut(200, "linear", function() {
        document.getElementById("line_" + string).remove();
    });
    updatePrice();

    var index = cart.indexOf(id);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    if (cart.length == 0) {
        document.getElementById("scan-animation").style.display = "block";
    }
}

function updatePrice() {
    var priceList = $('#cart').find('.price');

    var totalPrice = 0;

    $.each(priceList, function(i, price) {

        totalPrice += parseFloat($(price).text())

    });

    $('.total_price').text((Math.round(totalPrice * 100) / 100).toFixed(2) + " Euro");

    if (cart.length == 1) {
        document.getElementById("item_count").innerText = cart.length + " Produkt";
    } else {
        document.getElementById("item_count").innerText = cart.length + " Produkte";
    }

}

function closeKiosk() {
    $("#waiter").fadeIn(500, "linear");
    token = "";
    scanUser = true;
    startCheck();
}

window.setInterval(function() {
    document.activeElement.blur();
    updatePrice();
}, 1);