const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const URL = 'http://brianeno.needsyourhelp.org/draw'
const h1 = document.getElementById('strategy')

const change = (strategy) => {
    h1.innerHTML = strategy
}

const getStrategy = () => {
    fetch(proxyUrl + URL)
        .then(response => response.json())
        .then((data) => {
            console.log(data["strategy"])
            change(data['strategy'])
        })
}

document.addEventListener('DOMContentLoaded', getStrategy())

document.defaultView.addEventListener('click', () => {
    console.log('click')
    getStrategy()
})