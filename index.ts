import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url)
    .then(response => {
        const todo = response.data
        const {title, finished} = todo
        console.log(`${title} is ${finished ? '' : 'not'} finished`)
    })