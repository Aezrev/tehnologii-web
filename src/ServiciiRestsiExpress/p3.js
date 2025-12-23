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
            filteredBooks = books.filter(
                x => x.genre === req.query.genre
            )
        }
        res.json(filteredBooks)
    })

    .post((req, res) => {
        let newBook = new Book(
            req.body.id,
            req.body.name,
            req.body.genre,
            req.body.author
        )

        books.push(newBook)
        return res.json(newBook)
    })

bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(
            b => b.id === Number(req.params.bookId)
        )

        if (!bookModif) {
            return res.status(404).json({ error: "Book not found" })
        }

        bookModif.genre = req.body.genre || bookModif.genre
        bookModif.author = req.body.author || bookModif.author

        return res.json(bookModif)
    })

    .delete((req, res) => {
        const bookId = Number(req.params.bookId)

        const index = books.findIndex(b => b.id === bookId)

        if (index === -1) {
            return res.status(404).json({ error: "Book not found" })
        }

        const deletedBook = books.splice(index, 1)

        return res.json({
            message: "Book deleted successfully",
            book: deletedBook[0]
        })
    })

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
