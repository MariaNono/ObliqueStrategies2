const h1 = document.getElementById('strategy')
let result = []
let drawn = []
let index = -1

const change = (strategy) => {
    h1.innerHTML = strategy
}

const randomize = () => {
    const rand = Math.floor(Math.random()*result.length)
    change(result[rand])
    drawn.push(result[rand])
    result.splice(rand, 1)
    index++
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
    randomize()
})

document.defaultView.addEventListener('keyup', (e) => {
    if (result.length === 0) return
    if (e.keyCode === 38) {
        if (index < (drawn.length - 1)) {
            index++
            change(drawn[index])
        } else {
            randomize()
        }
    }
    console.log(drawn)
    console.log(result.length)
})

document.defaultView.addEventListener('keyup', (e) => {
    if (index === 0) return
    if (e.keyCode === 40) {
        index--
        change(drawn[index])
    }
})

// HIDE MOUSE?
