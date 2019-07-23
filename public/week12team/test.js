function login() {
    var username = $("#username").val();
    var password = $("#password").val();

    var params = {
        username: username,
        password: password
    }

    $.ajax({
        type: "POST",
        url: "/team12/login",
        data: JSON.stringify(params),
        contentType: "application/json",
        success: function(result) {
            if (result && result.success) {
                $("#status").text("Successfully logged in.");
            } else {
                $("#status").text("Error logging in.");
            }
        }
    })

}

function logout() {
    $.post("/team12/logout", function(result) {
        if (result && result.success) {
            $("#status").text("Successfully logged out.");
        } else {
            $("#status").text("Error logging out.");
        }
    });
}

function getServerTime() {
    $.get("/team12/getServerTime", function(result) {
        if (result && result.success) {
            $("#status").text("Server time: " + result.time);
        } else {
            $("#status").text("Got a result back, but it wasn't a success. Your reponse should have had a 401 status code.");
        }
    }).fail(function(result) {
        $("#status").text("Could not get server time.");
    });
}