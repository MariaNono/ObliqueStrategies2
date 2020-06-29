const h1 = document.getElementById('strategy')
let result = []

const change = (strategy) => {
    h1.innerHTML = strategy
}

const makeArray = text => {
    const strategiesArray = text.split('\n')
    return strategiesArray
}

async function getStrategies() {
    const response = await fetch('strategies.txt')
    const text = await response.text()
    return makeArray(text)
}

document.addEventListener('DOMContentLoaded', async () => {
    result = await getStrategies()
    console.log(result)
})

document.defaultView.addEventListener('click', () => {
    const rand = Math.floor(Math.random()*result.length)
    if (result.length === 0) return
    change(result[rand])
})