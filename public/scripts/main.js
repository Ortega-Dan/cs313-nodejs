function clicked() {
    alert("You will be redirected by using JavaScript to the assignments page.\n Thank you for comming !!");
    window.location.href = 'assignments.php';
}


function getFammyUsers() {

    var URL = 'team10/person/DANPAPA'
    $.get(URL, (data, status) => {
        console.log(data, status)
    })

}