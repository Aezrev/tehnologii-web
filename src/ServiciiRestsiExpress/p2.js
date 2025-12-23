const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000

const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
]

bookRouter.route('/books')

    .get((req, res) => {
        let filteredBooks = books

        if (req.query.genre) {
            filteredBooks = filteredBooks.filter(
                x => x.genre === req.query.genre
            )
        }

        res.json(filteredBooks)
    })

    .post((req, res) => {
        const { id, name, genre, author } = req.body

        if (!id || !name || !genre || !author) {
            return res.status(400).json({
                error: "All fields (id, name, genre, author) are required"
            })
        }

        if (typeof id !== 'number') {
            return res.status(400).json({ error: "id must be a number" })
        }

        if (
            typeof name !== 'string' ||
            typeof genre !== 'string' ||
            typeof author !== 'string'
        ) {
            return res.status(400).json({
                error: "name, genre and author must be strings"
            })
        }

        const bookExists = books.find(b => b.id === id)
        if (bookExists) {
            return res.status(400).json({
                error: "A book with this id already exists"
            })
        }

        const newBook = new Book(id, name, genre, author)
        books.push(newBook)

        return res.status(201).json(newBook)
    })

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
