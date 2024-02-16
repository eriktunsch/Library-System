function RestRequest(action, data, executefunction, error_allow = true) {
    $.post(
        "https://" + window.url + "/php/Rest-API.php?action=" + action, data,
        function(data) {
            var check = true;
            if (!jQuery.isEmptyObject(data.response)) {
                if (data.response.typ == "success") {
                    iziToast.success({
                        title: "Ok!",
                        message: data.response.message,
                    });
                } else if (data.response.typ == "warning") {
                    iziToast.warning({
                        title: "Achtung!",
                        message: data.response.message,
                    });
                    var check = false;
                } else if (data.response.typ == "error") {
                    iziToast.error({
                        title: "Error!",
                        message: data.response.message,
                    });
                    var check = false;
                } else if (data.response.typ == "info") {
                    iziToast.error({
                        title: "Info!",
                        message: data.response.message,
                    });
                } else {
                    if (data.response.message != null || data.response.message != undefined) {
                        iziToast.error({
                            title: "No title was defined!",
                            message: data.response.message,
                        });
                    } else {
                        iziToast.error({
                            title: "No title was defined!",
                            message: "No message was defined!",
                        });
                    }
                    var check = false;
                }
            }
            if (check) {
                executefunction(data);
            }
            console.log("Rest Request (" + action + ") --> Debug: " + JSON.stringify(data.debug));
        }, "json").fail(function() {
        if (error_allow) {
            iziToast.error({
                title: "Error!",
                message: "An error has occurred! Please try again later!",
            });
        }
    });
}

function RestRequest(action, data, executefunction, error_allow = true) {
    $.post(
        "https://" + window.url + "/php/Rest-API2.php?action=" + action, data,
        function(data) {
            var check = true;
            if (!jQuery.isEmptyObject(data.response)) {
                if (data.response.typ == "success") {
                    iziToast.success({
                        title: "Ok!",
                        message: data.response.message,
                    });
                } else if (data.response.typ == "warning") {
                    iziToast.warning({
                        title: "Achtung!",
                        message: data.response.message,
                    });
                    var check = false;
                } else if (data.response.typ == "error") {
                    iziToast.error({
                        title: "Error!",
                        message: data.response.message,
                    });
                    var check = false;
                } else if (data.response.typ == "info") {
                    iziToast.error({
                        title: "Info!",
                        message: data.response.message,
                    });
                } else {
                    if (data.response.message != null || data.response.message != undefined) {
                        iziToast.error({
                            title: "No title was defined!",
                            message: data.response.message,
                        });
                    } else {
                        iziToast.error({
                            title: "No title was defined!",
                            message: "No message was defined!",
                        });
                    }
                    var check = false;
                }
            }
            if (check) {
                executefunction(data);
            }
            console.log("Rest Request (" + action + ") --> Debug: " + JSON.stringify(data.debug));
        }, "json").fail(function() {
        if (error_allow) {
            iziToast.error({
                title: "Error!",
                message: "An error has occurred! Please try again later!",
            });
        }
    });
}