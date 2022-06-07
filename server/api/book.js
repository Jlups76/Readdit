const router = require('express').Router()
const {models: {Book}} = require('../db')
module.exports = router

//GET all books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll({
      attributes: ['bookName', 'authorName', 'quantity', ' price']
    })
    res.json(books)
  } catch (err) {
    next(err)
  }
})

//CREATE a book
router.post('/', async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.send(book.bookId)
  } catch (err) {
    //error:unique based on failure. ie. "book already exists n DB"
    next(err)
  }
})

//UPDATE a book
router.put('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    await book.update(req.body)
    res.json(book)
  } catch (err) {
    next(err)
  }
})

//DELETE a book
router.delete(':id', async (req, res, next) => {
  try {
    const book = await Book.findbyPk(req.params.id)
    await book.destroy()
    res.send(book)
  } catch (err) {
    next(err)
  }
})
