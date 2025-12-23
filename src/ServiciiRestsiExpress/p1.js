const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000

const bookRouter = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', bookRouter)

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
]

bookRouter.route('/books')
    .get((req, res) => {
        let result = books

        if (req.query.genre) {
            result = result.filter(
                b => b.genre === req.query.genre
            )
        }

        result = result.sort((a, b) =>
            a.title.localeCompare(b.title)
        )

        res.json(result)
    })

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
