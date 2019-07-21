function search() {

    var input = $('#in').val()

    var URL = 'http://www.omdbapi.com/'

    var PARAMS = { apikey: 'df0ac10d', t: input }

    $.get(URL, PARAMS,
        (data, status) => {

            console.log(data, status)

            $('#paragraph').text(JSON.stringify(data))

        }
    )
}