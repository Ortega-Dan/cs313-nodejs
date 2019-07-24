// This will populate the window with the 
function getFammyUsers() {

    var memberslist = document.getElementById('memberslist')

    if ($('#fammymembers').css('display') === 'table') {
        memberslist.innerHTML = ""
    }

    var URL = '/finalfammyServices/fammymembers'
    $.get(URL, (data, status) => {
        console.log(data)
        if (!data.success && data.success === false) {
            alert(data.message)
            window.location.href = 'signin.html';
        } else {


            console.log(data, status)


            data.forEach(element => {
                var tr = document.createElement('tr')
                tr.innerHTML = "<td>" + element.username +
                    "</td><td><a class='btn btn-outline-primary' href='messagesender.html?id=" +
                    element.keyid + "&user=" + element.username +
                    "' role='button'><i class='fas fa-paper-plane' aria-hidden='true'></i></a></td>"

                memberslist.appendChild(tr)
            })

            $('#fammymembers').show()
        }
    })

}