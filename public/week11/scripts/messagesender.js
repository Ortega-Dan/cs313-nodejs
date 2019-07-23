function run() {

    var url = window.location.search
    var user = url.split('?')[1].split('&')[1].split('=')[1].replace('%20', ' ')
    console.log("Message Sender ready for: " + user)


    $('#sender').text('Send to ' + user)
}

window.onload = run


function sendMessage() {

    console.log('Sending Message to Server')


    var URL = "/week11fammyServices/message"

    var DATA = { message: $('#message').val() }

    $.ajax({
        url: URL,
        type: "POST",
        data: JSON.stringify(DATA),
        contentType: "application/json",
        success: function(data, status) {
            console.log("Received answer was: " + data)
        }
    })

}