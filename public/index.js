const request = require('superagent')

const input = document.getElementById('submit')


input.addEventListener('click', event => {
    event.preventDefault()
    let newURL = document.getElementById('url-input').value
    request.post(newURL)
    .then((res) => {
        console.log(res)
    })
})