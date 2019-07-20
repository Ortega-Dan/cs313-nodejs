function clicked() {
    alert("You will be redirected by using JavaScript to the assignments page.\n Thank you for comming !!");
    window.location.href = 'assignments.php';
}


function getFammyUsers() {

    var URL = 'fammyServices/fammymembers'
    $.get(URL, (data, status) => {
        console.log(data, status)

        var memberslist = document.getElementById('memberslist')


        var tr = document.createElement('tr')
        tr.innerHTML = "<td>Somethingo</td><td><a class='btn btn-outline-primary' href='#' role='button'><i class='fas fa-paper-plane' aria-hidden='true'></i></a></td>"

        memberslist.appendChild(tr)
        $('#fammymembers').show()
    })


}