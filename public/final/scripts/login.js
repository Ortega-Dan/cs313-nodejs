function validate(event) {

    event.preventDefault()
    console.log("Submitting Login Info !!")

    var params = {
        username: $('#userlogin').val(),
        password: $('#pswlogin').val()
    }

    $.ajax({
        type: "POST",
        url: "/finalfammyServices/login",
        data: JSON.stringify(params),
        contentType: "application/json",
        success: function(res, status) {
            console.log(res)
            if (!res.success) {
                alert(res.message)
            } else {
                window.location.href = 'index.html';
            }
        }
    }).fail((res) => {
        alert("Login Failed. Server or Resource Unavailable")
    })


}

function init() {
    $('#loginGo').submit(validate)
}
window.onload = init;