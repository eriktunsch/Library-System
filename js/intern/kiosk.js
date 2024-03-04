var temp = "";

var cart = [];

let code = "";
let reading = false;

function checkout() {
  Swal.fire({
    title: "Bist du fertig?",
    text: "Gehe sicher, dass du alle Artikel gescannt hast!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ja!",
    cancelButtonText: "Nein!",
  }).then((result) => {
    if (result.value) {
      RestRequest(
        "checkout",
        {
          cart: JSON.stringify(cart),
        },
        function (data) {
          document.getElementById("cart").innerHTML = "";
          document.getElementById("scan-animation").style.display = "block";
          cart.length = 0;

          Swal.fire({
            title: "Fertig!",
            text: "Deine Bücher wurden erfolgreich ausgeliehen bzw zurückgegeben!",
            type: "success",
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
          });

          setTimeout(function () {
            swal.close();
            document.getElementById("rent_count").innerHTML = 0;
            document.getElementById("return_count").innerHTML = 0;
          }, 4000);
        }
      );
    }
  });
}

function cancel() {
  Swal.fire({
    title: "Bist du sicher?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ja!",
    cancelButtonText: "Nein!",
  }).then((result) => {
    if (result.value) {
      $("#waiter").fadeIn(500, "linear");
      token = "";
      scanUser = true;
      document.getElementById("cart").innerHTML = "";
      document.getElementById("scan-animation").style.display = "block";
      cart.length = 0;
      cart = [];
      document.getElementById("rent_count").innerHTML = 0;
      document.getElementById("return_count").innerHTML = 0;
    }
  });
}

document.addEventListener("keypress", (e) => {
  //usually scanners throw an 'Enter' key at the end of read
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    e.preventDefault();
    if (code.length > 10) {
      console.log(code);
      cart.push(parseInt(code));
      RestRequest(
        "loadBook",
        {
          isbn: code,
        },
        function (data) {
          if (data.response.typ == "success") {
            document.getElementById("scan-animation").style.display = "none";
            document.getElementById("cart").innerHTML =
              data.data.html + document.getElementById("cart").innerHTML;
            if (data.data.type == "rent") {
              document.getElementById("rent_count").innerHTML =
                parseInt(document.getElementById("rent_count").innerHTML) + 1;
            } else {
              document.getElementById("return_count").innerHTML =
                parseInt(document.getElementById("return_count").innerHTML) + 1;
            }
          }
        }
      );
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

function removeItem(id, string, type) {
  $("#item_" + string).fadeOut(200, "linear", function () {
    document.getElementById("item_" + string).remove();
  });
  $("#line_" + string).fadeOut(200, "linear", function () {
    document.getElementById("line_" + string).remove();
  });

  var index = cart.indexOf(id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  if (cart.length == 0) {
    document.getElementById("scan-animation").style.display = "block";
  }

  if (type == "rent") {
    document.getElementById("rent_count").innerHTML =
      parseInt(document.getElementById("rent_count").innerHTML) - 1;
  } else {
    document.getElementById("return_count").innerHTML =
      parseInt(document.getElementById("return_count").innerHTML) - 1;
  }
}

window.setInterval(function () {
  document.activeElement.blur();
}, 1);
